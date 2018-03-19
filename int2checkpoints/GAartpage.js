/* global draw ellipse rect p processing width height size*/
var sketch = function(processing) {
    with(processing) {
        // This line below this comment sets the screen size to be the size of my screen, 1366 pixels wide by 629 pixels in height.
        size(1366, 629);
        // This is an array. It currently empty as you see it, but it is essentially a variable that is a list of things which can be use later. 
        // You can add to an array with "arrayname.push({ item label })  
        var ballPos = [];
        // The following four variables are set as random numbers between the first number and the second one on each line(0 being black and 255,
        // being white), and is used as the `coloring for the circles. This allows my cricles to be different colors each time you reload. 
        var numberOne = random(25, 175);
        var numberTwo = random(50, 200);
        var numberThree = random(75, 225);
        var numberFour = random(100, 250);
        // This line sets the background color values red, green, and blue from anywhere between the maximum and the minimum. 
        background(random(255), random(255), random(255));
        // The following functions change the brightness of the circles when called.
        function increasebrightness(numberOne, numberTwo, numberThree, numberFour) {
            numberOne += random(25);
            numberTwo += random(100);
            numberThree += random(50);
            numberFour += random(75);
        }

        function decreasebrightness(numberOne, numberTwo, numberThree, numberFour) {
            numberOne -= random(50);
            numberTwo -= random(75);
            numberThree -= random(100);
            numberFour -= random(25);
        }

        function randomizeBrightness(numberOne, numberTwo, numberThree, numberFour) {
            numberOne -= random(50);
            numberTwo += random(75);
            numberThree -= random(100);
            numberFour += random(25);
        }
        // The noStroke gets rid of the broders of my circles.
        noStroke();
        // The draw function repeats the code in a lot of times per second.
        draw = function() {
            // This makes sure the cicles never are the same color by calling functions that change the brightness when this would be true. 
            if (((numberOne === numberTwo) && (numberTwo === numberThree)) && (numberThree === numberFour)) {
                if (numberOne <= 155) {
                    increasebrightness();
                }
                else if (numberOne >= 120) {
                    decreasebrightness();
                }
                else {
                    randomizeBrightness();
                }
            }
            // This is where things get complicated. I starts at 0, grows by one each time it repeats, and repeats as long as i is less than the 
            // number of items in the array. It can re-enter the loop since it is inside of the draw = function, which also repeats.
            for (var i = 0; i < ballPos.length; i++) {
                // The category 'a' of the array is a set of x and y coordinates that appears wherever your mouse moves or clicks, and the y value 
                // increases from there. The line below takes the number i entry in the category ya and adds 6 to it each time the for loop repeats
                // allowing the circles to move down, since the ellipses have xa and ya as they're x and y coordinates.
                ballPos[i].ya += 6;
                // The next line uses the variables numberOne, numberTwo, and numberThree to determine the color of all circles going down.
                fill(numberOne, numberTwo, numberThree);
                ellipse(ballPos[i].xa, ballPos[i].ya, 15, 15);
                // The category 'b' of the array is a set of x and y coordinates that appears wherever your mouse moves or clicks, and the x value 
                // increases from there. The line below takes the number i entry in the category xa and adds 6 to it each time the for loop repeats
                // allowing the circles to move right, since the ellipses have xb and yb as they're x and y coordinates.
                ballPos[i].xb += 6;
                // The next line uses the variables numberTwo, numberThree, numberFour to determine the color of all circles going right\.
                fill(numberTwo, numberThree, numberFour);
                ellipse(ballPos[i].xb, ballPos[i].yb, 15, 15);
                // The category 'c' of the array is a set of x and y coordinates that appears wherever you mouse moves or clicks, and the y value 
                // decreases from there. The line below takes the number i entry in the category yc and subtracts 6 to it each time the for loop 
                // repeats allowing the circles to move up, since the ellipses have xc and yc as they're x and y coordinates.
                ballPos[i].yc -= 6;
                // The next line uses the variables numberThree, numberFour, and numberOne to determine the color of all circles going up.
                fill(numberThree, numberFour, numberOne);
                ellipse(ballPos[i].xc, ballPos[i].yc, 15, 15);
                // The category 'c' of the array is a set of x and y coordinates that appears wherever you mouse moves or clicks, and the y value 
                // decreases from there. The line below takes the number i entry in the category yc and subtracts 6 to it each time the for loop 
                // repeats allowing the circles to move down, since the ellipses have xd and ycd as they're x and y coordinates.
                ballPos[i].xd -= 6;
                // The next line uses the variables numberFour, numberOne, muber to determine the color of all circles going left.
                fill(numberFour, numberOne, numberTwo);
                ellipse(ballPos[i].xd, ballPos[i].yd, 15, 15);
            }
        };
        // The mouseClicked function sets it so that xa, ya, xb, yb, xc, yc, xd, yd as wherever you clicke, then they will change form there.
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
        // The mouseMoved function sets it so that xa, ya, xb, yb, xc, yc, xd, yd as wherever you clicke, then they will change form there.
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
// This displays the content inside the html file with the same name.
var p = new Processing(document.getElementById("output-canvas"), sketch);
