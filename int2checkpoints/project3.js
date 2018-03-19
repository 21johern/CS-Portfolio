/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {
    with(processing) {
        size(1350, 1000);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
        background(20, 120, 40);
        draw = function() {
            for (var i = 0; i < width; i += sizerandom) {
                for (var j = 0; j < height; j += sizerandom) {
                    var sizerandom = random(35);
                    fill(0,200,200);
                    ellipse(i, j, sizerandom, sizerandom);
                }
            }
        }
    };

    // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//  
}
var p = new Processing(document.getElementById("output-canvas"), sketch);
