console.log("hi from the script")

const synth = window.speechSynthesis;
let phrase = '';

const speak = (text) => {
  if (synth.speaking){
    console.error("it's already talking");
    return;
  }
  let utterThis = new SpeechSynthesisUtterance(text);
  synth.speak(utterThis);
}



document.querySelector("#button").onclick = () => {
  console.log('click?');
  let textInput = document.querySelector('#text-input').value
  let split = textInput.split('');
  split.forEach(letter => {
    console.log(letter);

    switch(letter){
      case "h":
        phrase += "heh";
        break;
      case "e":
        phrase += "ee";
        break;
      case "l":
        phrase += "luh";
        break;
      case "o":
        phrase += "oh";
        break;
    }

  })
  speak(phrase);
  // console.log(textInput);
  // speak(textInput);
};
