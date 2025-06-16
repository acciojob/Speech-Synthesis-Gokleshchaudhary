// Your script here.
let voices = [];
function populateVoiceList() {
    voices = speechSynthesis.getVoices();
    const voiceSelect = document.getElementById('voice-select');
    voices.forEach((voice) => {
        const option = document.createElement('option');
        option.value = voice.name;
        option.textContent = voice.name;
        voiceSelect.appendChild(option);
    });
}

// Speak function
document.getElementById('speak-button').addEventListener('click', () => {
    const textInput = document.getElementById('text-input').value;
    if (textInput === '') return; // Prevent if no text
    const utterance = new SpeechSynthesisUtterance(textInput);
    const selectedVoice = voices.find(voice => voice.name === document.getElementById('voice-select').value);
    utterance.voice = selectedVoice;
    utterance.rate = document.getElementById('rate-slider').value;
    utterance.pitch = document.getElementById('pitch-slider').value;
    speechSynthesis.speak(utterance);
});

// Stop function
document.getElementById('stop-button').addEventListener('click', () => {
    speechSynthesis.cancel();
});

// Populate voices on load
window.speechSynthesis.onvoiceschanged = populateVoiceList;