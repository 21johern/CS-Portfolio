/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {
    with(processing) {
        size(1366, 629);
        var ballPos = [];
        var numberOne = random(25, 175);
        var numberTwo = random(50, 200);
        var numberThree = random(75, 225);
        var numberFour = random(100, 250);
        background(random(255), random(255), random(255));
        noStroke();
        draw = function() {
            for (var i = 0; i < ballPos.length; i++) {
                ballPos[i].ya += 6;
                fill(numberOne, numberTwo, numberThree);
                ellipse(ballPos[i].xa, ballPos[i].ya, 15, 15);
                ballPos[i].xb += 6;
                fill(numberTwo, numberThree, numberFour);
                ellipse(ballPos[i].xb, ballPos[i].yb, 15, 15);
                ballPos[i].yc -= 6;
                fill(numberThree, numberFour, numberOne);
                ellipse(ballPos[i].xc, ballPos[i].yc, 15, 15);
                ballPos[i].xd -= 6;
                fill(numberFour, numberOne, numberTwo);
                ellipse(ballPos[i].xd, ballPos[i].yd, 15, 15);
            }

        };
        mouseClicked = function() {
            ballPos.push({
                xa: mouseX,
                ya: mouseY,
                xb: mouseX,
                yb: mouseY,
                xc: mouseX,
                yc: mouseY,
                xd: mouseX,
                yd: mouseY
            });
        };
        mouseMoved = function() {
            ballPos.push({
                xa: mouseX,
                ya: mouseY,
                xb: mouseX,
                yb: mouseY,
                xc: mouseX,
                yc: mouseY,
                xd: mouseX,
                yd: mouseY
            });
        };
    }
};
var p = new Processing(document.getElementById("output2-canvas"), sketch);
