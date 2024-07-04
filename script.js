let tom = new Audio('tom.mp3');
let clap = new Audio('clap.mp3');
let snare = new Audio('snare.mp3');
let boom = new Audio('boom.wav');
let tink = new Audio('tink.wav');
let kick = new Audio('kick.wav');
let ride = new Audio('ride.wav');
let hihat = new Audio('hihat.wav');
let openhat = new Audio('openhat.wav');


document.addEventListener('keydown', (event)=>{
    let key = event.key;
    player(key);
});

function player(key) {
    if (key == 'a'|| key == 'A') {
        clap.play();
    }
    else if (key == 's'|| key == 'S') {
        hihat.play();
    }
    else if (key == 'd'|| key == 'D') {
        kick.play();
    }
    else if (key == 'f'|| key == 'F') {
        openhat.play();
    }
    else if (key == 'g'|| key == 'G') {
        boom.play();
    }
    else if (key == 'h'|| key == 'H') {
        ride.play();
    }
    else if (key == 'j'|| key == 'J') {
        snare.play();
    }
    else if (key == 'k'|| key == 'K') {
        tom.play();
    }
    else if (key == 'l'|| key == 'L') {
        tink.play();
    }
};