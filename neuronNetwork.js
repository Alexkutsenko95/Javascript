/**
 * Created by junior on 4/5/17.
 */

// First, define a function that creates a fresh  (untrained) classifier.
// This code should be stand-alone - it should include all the 'require' statements
//   required for creating the classifier.
function newClassifierFunction() {
    var limdu = require('limdu');
    var TextClassifier = limdu.classifiers.multilabel.BinaryRelevance.bind(0, {
        binaryClassifierType: limdu.classifiers.Winnow.bind(1, {retrain_count: 10})
    });

    // Initialize a classifier with a feature extractor:
    return new limdu.classifiers.EnhancedClassifier({
        classifierType: TextClassifier,
        featureExtractor: limdu.features.NGramsOfLetters(10),
        pastTrainingSamples: [] // to enable retraining
    });
}

// Use the above function for creating a new classifier:
var intentClassifier = newClassifierFunction();

// Train and test:
intentClassifier.trainBatch([
    {input: "Hello", output: "Hello from chat bot ! "},
    {input: "What time is it ?", output: "I dont now what time is it"},
    {input: "How are you ?", output: "Im fine , thx"},
    {input: "How old are you ?", output: "im 100 years old"},
    {input: "You like programming ?", output: "Of course , im like !"}
]);
//----------------------------------------------------------------------------
// console.log("Original classifier:");
// intentClassifier.classifyAndLog("I want an apple and a banana");  // ['apl','bnn']
// intentClassifier.trainOnline("I want a doughnut", "dnt");
// intentClassifier.classifyAndLog("I want chips and a doughnut");  // ['cps','dnt']
// intentClassifier.retrain();
// intentClassifier.classifyAndLog("I want an apple and a banana");  // ['apl','bnn']
// intentClassifier.classifyAndLog("I want chips and a doughnut");  // ['cps','dnt']


// var limdu = require('limdu');
//
// var TextClassifier = limdu.classifiers.multilabel.BinaryRelevance.bind(0, {
//     binaryClassifierType: limdu.classifiers.SvmJs.bind(0, {C: 1.0})
// });
//
// // Initialize a classifier with a feature extractor and a lookup table:
// var intentClassifier = new limdu.classifiers.EnhancedClassifier({
//     classifierType: TextClassifier,
//     featureExtractor: limdu.features.NGramsOfWords(1),  // each word ("1-gram") is a feature
//     featureLookupTable: new limdu.features.FeatureLookupTable()
// });
//
// var dataset = [
//     {input: "Hello", output: "Hello its pizzeria"},
//     {input: "What is your address ?", output: "Pizzeria address is Heroiv Dnipra 20"},
//     {input: "I wish make order", output: "Im listen you"},
//     {input: "I want pizza and two coca-cola", output: "Ok , what is your address"},
//     {input: "My address is * street", output: "wait for call to confirm your order"}
// ];
//
// intentClassifier.trainBatch(dataset);
/*
 console.dir(intentClassifier.classify("What is  your address ?"));
 console.dir(intentClassifier.classify("Hi"));
 console.dir(intentClassifier.classify("i wish make a order"));
 console.dir(intentClassifier.classify("I want two pizza and four coca-cola"));
 console.dir(intentClassifier.classify("My address is Schorsa 34 street"));
 */
//
//fasdfasdf sdgxdfgx gxcvbxdfbsdg dfgxcb

// I dont now whats write and AI dont response me becouse it brilliant
// Really i want make a lot of many
//
module.exports = intentClassifier;