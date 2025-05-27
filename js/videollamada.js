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


const btnVideo = document.getElementById('btn-video');
let videoOn = true;
btnVideo.addEventListener('click', () => {
  videoOn = !videoOn;
  if (videoOn) {
    btnVideo.innerHTML = '<i class="bi bi-camera-video"></i>';
    btnVideo.classList.remove('btn-video-off');
    btnVideo.classList.add('btn-video-on');
  } else {
    btnVideo.innerHTML = '<i class="bi bi-camera-video-off"></i>';
    btnVideo.classList.remove('btn-video-on');
    btnVideo.classList.add('btn-video-off');
  }
});
