const functions = require('firebase-functions');
const random = require("random-js")();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// set defaults
// note to self: this could be better handled with an object
var room = "End of Road";
var value = random.integer(1,20);
var items = [];
var roomItems = [];
var description = "You are standing at the end of a road before a small brick building. Around you is a forest. A small stream flows out of the building and down a gully.";

const moveR = (room, direction) => {
    if (room = "End of Road"){
        if(direction = "north"){
            return('Building');
        } else {
            return('Forest');
        }
    }

    if (room = "Forest"){
        return('Forest');
    }
    if (room = "Building"){
        if(direction = "south"){
            return('End of Road');
        } else{
            return('Building');
        }
    }
}

const checkRoom = room => {
    if(room = "End of Road"){
        roomItems = [];
        description = "You are standing at the end of a road before a small brick building. Around you is a forest. A small stream flows out of the building and down a gully.";
    }
    if(room = "Forest"){
        roomItems = [];
        description = "You are lost in the forest."
    }
    if(room = "Building"){
        roomItems = ["lamp", "food","bottle"];
        description = ["You are standing in the small building. There is a clear stream of water running through it."]
    }
}


app.intent('Default Welcome Intent', conv => {
    conv.ask(`${description}`);

});

app.intent('look', conv => {
    if(roomItems = []){
        conv.ask(`${description}`);
    } else {
        conv.ask(`${description} There is a ${roomItems[0]}, ${roomItems[1]}, and ${roomItems[2]} there.`)
    }

});

app.intent('take', (conv, params) => {
    if(roomItems = []){
        conv.ask("There is nothing to take.");
    } else {
        items = roomItems;
        roomItems = [];
        conv.ask("You have taken the items.")
    }
});

app.intent('move', (conv, params) => {
    room = moveR(room,params.direction);
    checkRoom(room);
    conv.ask(`You have moved ${params.direction}. Try looking around.`)
});


app.intent('quit', (conv) => {

    conv.close("Goodbye");
})


//fix this
exports.Experiment = functions.https.onRequest(app);