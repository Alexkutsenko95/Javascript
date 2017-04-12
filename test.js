/**
 * Created by junior on 4/6/17.
 */
var id = ("0000000" + "Today i want study and spend my money".split("").reduce
(function (a, b) {
    a = ((a << 5) - a) + b.charCodeAt();
    return a & a
}, 0).toString(16)).substr(-8);
console.log(id);