/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {
    with(processing) {
        size(1366, 629);
        background(255);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
        function draweyeball() {
            ellipse(mouseX + 5, mouseY + 5, 30, 30);
            ellipse(mouseX + 5, mouseY + 5, 10, 30);
            /*The mouseX and mouseY make it so that the object appears wherever you click.*/
            ellipse(mouseX + 5, mouseY + 5, 10, 10);
        }
        mouseClicked = function() {
            draweyeball();
        };
        draw = function() {
            
        };
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
