const btnMic = document.getElementById('btn-mic');
let micEncendido = true;

btnMic.addEventListener('click', () => {
  micEncendido = !micEncendido; 
  if (micEncendido) {
    btnMic.innerHTML = '<i class="bi bi-mic"></i>'; 
    btnMic.classList.remove('btn-mic-off');
    btnMic.classList.add('btn-mic-on');
  } else {
    btnMic.innerHTML = '<i class="bi bi-mic-mute"></i>'; 
    btnMic.classList.remove('btn-mic-on');
    btnMic.classList.add('btn-mic-off');
  }
});