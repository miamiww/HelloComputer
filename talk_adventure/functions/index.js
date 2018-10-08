const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

app.intent('Default Welcome Intent', conv => {
    conv.ask('You are standing at the end of a road before a small brick building. Around you is a forest. A small stream flows out of the building and down a gully.');

});

app.intent('get fortune', (conv, params) => {
    // convs.contexts.set('dreams question', 5);
    conv.ask(`Hello, ${params.name}, what did you dream about last night?`);

});

app.intent('dreams', (conv) => {
    const dreamSentiment = sentiment.analyze(conv.query)
    console.log(dreamSentiment);
    let day;
    if(dreamSentiment.score < -2){
        day = ' you are going to have a terrible day'
    } else if(dreamSentiment.score >= -2 && dreamSentiment < 2){
        day = 'your day will be fine'
    } else {
        day = 'you are going to have the best day ever'
    }
    conv.close(`${day}`);
})

exports.Experiment = functions.https.onRequest(app);