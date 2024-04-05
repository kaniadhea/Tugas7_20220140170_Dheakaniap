var video = document.querySelector('video');
var audio = document.querySelector('audio');
var gambar = document.querySelector('picture');

video.addEventListener("click", function() {
    alert("Ini video Dan Bandung");
});

audio.addEventListener("click", function() {
    alert("Ini audio Dan Bandung");
});

gambar.addEventListener("click", function() {
    alert("Ini gambar Dan Bandung");
});

var volumeControl = document.querySelector('#volumeControl');

volumeControl.addEventListener('input', function() {
    video.volume = volumeControl.value;
});
