use strict';

const fullScreen = document.getElementById('button-full'),
normalScreen = document.getElementById('button-normal');

function setFullScreen() {
document.documentElement.requestFullscreen();
alert("asdasdsa");
function setNormalScreen() {
document.exitFullscreen();
}
fullScreen.addEventListener('click', setFullScreen, true);
normalScreen.addEventListener('click', setNormalScreen, true);



