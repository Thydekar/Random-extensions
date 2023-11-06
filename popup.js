document.addEventListener('DOMContentLoaded', function() {
  const speakButton = document.getElementById('speakButton');
  speakButton.addEventListener('click', function() {
    const textArea = document.getElementById('textArea');
    const words = textArea.value.split(' ');

    words.forEach(function(word, index) {
      const audioSrc = chrome.runtime.getURL(word.toLowerCase() + '.mp3');
      const audio = new Audio(audioSrc);
      setTimeout(function() {
        audio.play();
      }, index * 1000); // Delay each audio file by 1 second (1000 milliseconds)
    });
  });
});
