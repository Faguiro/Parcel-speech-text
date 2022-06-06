import Cookies from "js-cookie";

function fala(texto, callback) {
  const main = document.getElementsByTagName('main')[0];
  const voiceSelect = document.getElementById('voices');
  let voices;
  let currentVoice;

  const populateVoices = () => {
    const availableVoices = speechSynthesis.getVoices();
    //voices = availableVoices.filter(voice => voice.lang === 'pt-BR');

    availableVoices.forEach(voice => {
      const option = document.createElement('option');
      let optionText = `${voice.name} (${voice.lang})`;

      if (voice.default) {
        optionText += ' [default]';
        if (typeof currentVoice === 'undefined') {
          currentVoice = voice;
          option.selected = true;
        }
      }
      if (currentVoice === voice) {
        option.selected = true;
      }
      option.textContent = optionText;
      voiceSelect.appendChild(option);
    });
    voices = availableVoices;
    // Cookies.set('vozes', voiceSelect.value)
    // voices = availableVoices[callback];
    //console.log(voices);

  };
  populateVoices();//



  if (speechSynthesis.onvoiceschanged !== undefined) {//se existir onvoiceschanged
    speechSynthesis.onvoiceschanged = populateVoices;//popula as vozes

  }

  // currentVoice = voices;
  const toSay = texto 

  voiceSelect.addEventListener('change', event => {
    const selectedIndex = event.target.selectedIndex;
    
    Cookies.set('vozes', selectedIndex)
  });
 // console.log();
currentVoice = Cookies.get('vozes'); 
  const utterance = new SpeechSynthesisUtterance(toSay);

  utterance.voice =voices[callback];
  //
  utterance.addEventListener('start', event => {
    main.classList.add('speaking');
  });
  utterance.addEventListener('end', event => {
    main.addEventListener(
      'animationiteration',
      event => {
        main.classList.remove('speaking');
      },
      {
        once: true
      }
    );
  });
  speechSynthesis.speak(utterance);
  return
}
export { fala }