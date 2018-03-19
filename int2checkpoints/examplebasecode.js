/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {
    with(processing) {
        size(1366, 629);
        var ballPos = [];
        background(random(255), random(255), random(255));
        draw = function() {
            for (var i = 0; i < ballPos.length; i++) {
                ellipse(ballPos[i].xa, ballPos[i].ya, 15, 15);
                ellipse(ballPos[i].xb, ballPos[i].yb, 15, 15);
                ellipse(ballPos[i].xc, ballPos[i].yc, 15, 15);
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
var p = new Processing(document.getElementById("output1-canvas"), sketch);
