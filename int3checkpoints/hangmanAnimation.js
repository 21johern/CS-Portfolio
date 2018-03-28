/* global line ellipse p Processing size nextFrame background message*/
    var message = document.getElementById("message");
    var sketch = function(processing) {
    with(processing) {
        size(600, 255);
        background(255);
        draw = function() {
            line(300, 0, 300, 25);
            line(150, 0, 300, 0);
            line(150, 250, 150, 0);
            line(50, 250, 250, 250);
            if (nextFrame === 1) {
                ellipse(300,40,30,30);
            }
            else if (nextFrame === 2) {
                line(300,55,300,125);
            }
            else if (nextFrame === 3) {
                line(300,75,285,115);
            }
            else if (nextFrame === 4) {
                line(300,75,315,115);
            }
            else if (nextFrame === 5) {
                line(300,125,285,145);
            }
            else if (nextFrame === 6) {
                line(300,125,315,145);
            }
            else if (nextFrame === 7) {
                line(295,40,290,35);
            }
            else if (nextFrame === 8) {
                line(305,40,310,35);
            }
            else if (nextFrame === 9) {
                line(290,40,295,35);
            }
            else if (nextFrame === 10) {
                line(305,35,310,40);
            }
            else if (nextFrame === 11) {
                line(305,48,295,48);
                message.innerHTML = "YOU LOSE . . .";
            }
        };
    }
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
