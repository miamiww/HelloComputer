const functions = require('firebase-functions');
const {dialogflow, BasicCard} = require('actions-on-google');
const app = dialogflow();
const Sentiment = require('sentiment');
const sentiment = new Sentiment();
const fs = require('fs');
const _ = require('lodash');
const db = admin.firestore();

admin.initializeApp(functions.config().firebase);
const docRef = db.collection('fortuneSeekers').doc('latest');

const veggiesRaw = fs.readFileSync('veggies.json');
const veggies = JSON.parse(veggiesRaw);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

app.intent('Default Welcome Intent', conv => {
    conv.ask('hello I am your fortune friend');

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
    // conv.close(`${day}`);
    // this is what is new
    conf.data.firstResponse = day;
    console.log(conv.data);
    conv.ask('Very interesting! Tell me your favorite animal.')
})

app.intent('animal', (conv, params) => {
    conv.data.favAnimal = params.animal;
    conv.ask(`So your favorite animal is ${conv.data.favAnimal}. Fascinating. One more question: what city do you live in?`)
});

app.intent('city', (conv, params) => {
    conv.data.city = params.city;
    conv.close()
});

exports.Experiment = functions.https.onRequest(app);