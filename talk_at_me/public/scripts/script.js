console.log("hi")
const SpeechRecognition = webkitSpeechRecognition;
// import config from 'config.js';

var socket = io.connect(window.location.origin);
var btn;

socket.on('timesocket', function(data) {
    console.log(data);
    document.querySelector('#link-button').setAttribute("style","visibility: visible");
    document.querySelector('#link-button').onclick = () => {
      window.open(data);
    };
    document.querySelector('#reload-button').setAttribute("style","visibility: visible");
    document.querySelector('#reload-button').onclick = () => {
      location.reload();
    };
});


const getSpeech = () => {
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';

    recognition.start();
    console.log('started rec');
    recognition.onresult = event => {
      const speechResult = event.results[0][0].transcript;
      console.log('result: ' + speechResult);
      console.log('confidence: ' + event.results[0][0].confidence);
      urlResult = "www." + speechResult.replace(/ /g,'') + ".com";
      pushToSocket(urlResult);
    }
    recognition.onend = () => {
      console.log('it is over');
      recognition.stop();
    }

    recognition.onerror = event => {
      console.log('oops');
    }


}


const pushToSocket = thephrase => {
  socket.emit('theurl',thephrase);
  btn = document.createElement("BUTTON");
}

document.querySelector('#my-button').onclick = () => {
    console.log('click');
    getSpeech();
    // getGif();
}
