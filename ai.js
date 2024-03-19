document.getElementById("speakButton").addEventListener("click", function() {
  var text = document.getElementById("textToSpeak").value;
  if ('speechSynthesis' in window) {
      var msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
  } else {
      alert("Sorry, your browser does not support text-to-speech.");
  }
});
