console.log("hi")
const SpeechRecognition = webkitSpeechRecognition;
var config = require('config.js')


const giphyAPIKey = ''


const getSpeech = () => {
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';

    recognition.start();
    console.log('started rec');
    recognition.onresult = event => {
      const speechResult = event.results[0][0].transcript;
      console.log('result: ' + speechResult);
      console.log('confidence: ' + event.results[0][0].confidence);
      getGif(speechResult);
    }
    recognition.onend = () => {
      console.log('it is over');
      recognition.stop();
    }

    recognition.onerror = event => {
      console.log('oops');
    }


}


const getGif = phrase => {
  let url = `http://api.giphy.com/v1/gifs/random?api_key=${giphyAPIKey}&tag=${phrase}`
  console.log(url);
  fetch(url, {mode: "cors"}).then(response => response.json()).then(result => {let imgURL = result.data.image_url;   console.log(imgURL); document.querySelector('#the-gif').src = imgURL});

}

document.querySelector('#my-button').onclick = () => {
    console.log('click');
    getSpeech();
    // getGif();


}
