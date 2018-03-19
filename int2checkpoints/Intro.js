/* global strokeWeight global stroke global fill ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var xPos=0;
var yPos=0;
var Xpos=0;
var Ypos=360;
var xpOs=0;
var ypOs=150;
var xposition=200;
var yposition=0

draw = function() {
    
    strokeWeight (3);
    stroke(255,0,0);
    fill(0);
    ellipse(xPos,yPos,30,30);
/* The next part makes circley-circles*/
    xPos = xPos + 12;
    yPos = yPos + 12;
    
    strokeWeight (6);
    stroke(0,200,200);
    fill(0);
    ellipse(Xpos,Ypos,30,30);
/* The next part makes circley-circles*/
    Xpos = Xpos + 21;
    Ypos = Ypos - 21;
    
    strokeWeight (6);
    stroke(0,100,200);
    fill(100);
    ellipse(xpOs,ypOs,30,30);
/* The next part makes circley-circles*/
    xpOs = xpOs + 21;
    ypOs = ypOs - 15;
    
    strokeWeight (3);
    stroke(200,0,200);
    fill(0);
    ellipse(xposition,yposition,30,30);
/* The next part makes circley-circles*/
    xposition = xposition + 8;
    yposition = yposition + 30;
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
