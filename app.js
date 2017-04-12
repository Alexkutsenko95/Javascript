var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');
var questions = require('./routes/questions');
var routes = require('./routes/index');
var intentClassifier = require('./neuronNetwork');
var models = require('./models');
var question = ('./models/question');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(favicon(__dirname + '/favicon.ico'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', routes);
app.use('/edit', questions);

// models.sequelize.sync({force: true})
//     .then(function (err) {
//         console.log('It worked!');
//     }, function (err) {
//         console.log('An error occurred while creating the table:', err);
//     });
//

io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        var response = intentClassifier.classify(msg);
        if (response.toString() === '') {
            console.log(msg);
            models.Question.add(msg);
            io.emit('chat message', msg);
        } else {
            // var json = intentClassifier.toJSON();
            // var outputFilename = 'dataset.json';
            // fs.writeFile(outputFilename, JSON.stringify(json), function (err) {
            //     if (err) {
            //         console.log(err);
            //     } else {
            //         console.log("JSON saved to " + outputFilename);
            //     }
            // });
            io.emit('chat message', msg);
            io.emit('bot message', response);
        }
    });
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});