/**
 * Created by junior on 4/5/17.
 */

module.exports = function (sequelize, DataTypes) {

    var Question = sequelize.define('Question', {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                unique: true
            }, question: DataTypes.STRING
        },
        {
            updatedAt: false,
            createdAt: false,
            classMethods: {
                add: function (msg) {
                    var id = ("0000000" + msg.split("").reduce
                    (function (a, b) {
                        a = ((a << 5) - a) + b.charCodeAt();
                        return a & a
                    }, 0).toString(16)).substr(-8);
                    Question.create({id: id, question: msg})
                        .then(function () {
                            console.log('Save id: ' + id + ', question: ' + msg);
                        })
                        .catch(function (err) {
                            console.log('Question.create: ' + err);
                        });
                }
            }
        });
    return Question;
};