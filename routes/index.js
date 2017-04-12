/**
 * Created by junior on 4/5/17.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('chat', {
        title: 'Super Chat',
        myname: 'Alexander',
        hobby: 'football'
    });
});


module.exports = router;