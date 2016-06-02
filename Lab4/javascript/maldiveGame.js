$(document).ready(function () {
    drawCanvas();
});
function drawCanvas() {
    var canvas = document.getElementById('game');
    var context = canvas.getContext('2d');
    context.strokeStyle = 'gold';
    context.strokeRect(20, 20, 150, 100);
    context.fillStyle = 'lightblue';
    context.fillRect(20, 20, 150, 100);
}
