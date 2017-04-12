var models = require('../models');
var express = require('express');
var router = express.Router();
var intentClassifier = require('../neuronNetwork');

router.get('/', function (req, res) {
    models.Question.findAll().then(function (questions) {
        res.render('edit', {
            title: 'Super Chat',
            questions: questions
        });
    });
});

router.post('/:id/answer', function (req, res) {
    models.Question.find({
        id: ':id'
    }).then(function (Question) {
        var q = Question.question;
        var a = req.body.answer;
        //    console.log(a);
        intentClassifier.retrain();
        intentClassifier.trainOnline(q, a);
        Question.destroy({
            where: {
                id: Question.id
            }
        });
        res.redirect('/edit');
    })
});

router.post('/:id/remove', function (req, res) {
    models.Question.find({
        id: ':id'
    }).then(function (Question) {
        // console.log(Question);
        Question.destroy({
            where: {
                id: Question.id
            }
        });
        //res.redirect('/edit');
    }).then(function () {
        res.redirect('/edit');
    });
});


//<!--   a(href="/edit/" + question.id + "/remove") Удалить -->

// router.post('/create', function(req, res) {
//     models.Question.create({
//         id:req.body.id,
//         question:req.body.question
//     }).then(function() {
//         res.redirect('/');
//     });
// });

router.get('/WithoutResponse.json', function (req, res) {
    res.sendFile('/home/junior/WebstormProjects/ChatExample/WithoutResponse.json');

});
router.get('/package.json', function (req, res) {
    res.sendFile('/home/junior/WebstormProjects/ChatExample/package.json');
});


module.exports = router;