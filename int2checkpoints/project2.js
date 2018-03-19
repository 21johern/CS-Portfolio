/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {
    with(processing) {
        size(1350, 1000);
        background(100);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
        draw = function() {
            background(100);
            if (mouseX < 250) {
                ellipse(mouseX, mouseY, 25, 25);
                line(mouseX, mouseY, 750, 750);
                fill(50, 50, 100);
                stroke(0, 200, 200);
            }
            else if (mouseX < 500) {
                rect(mouseX, mouseY, 25, 25);
                line(mouseX, mouseY, 750, 750);
                fill(0, 200, 200);
                stroke(0, 200, 200);
            }
            else if (mouseX < 750) {
                triangle(mouseX,mouseY,mouseX+20,mouseY,mouseX+10,mouseY+20)
                line(mouseX, mouseY, 750, 750);
                fill(200, 0, 200);
                stroke(0);
            }
            else {
                quad(mouseX,mouseY,mouseX+20,mouseY,mouseX+10,mouseY+20,mouseX+30,mouseY+30) 
                line(mouseX, mouseY, 750, 750);
                fill(200, 200, 200);
                stroke(150);
            }

        }
    };

    // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
