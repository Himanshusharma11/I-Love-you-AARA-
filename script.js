document.getElementById('playButton').addEventListener('click', function() {
    var audio = document.getElementById('audio');
    if (audio.paused) {
        audio.play();
        this.textContent = 'Pause Song';
    } else {
        audio.pause();
        this.textContent = 'Play Song';
    }
});
