// Turns the input in the text box into a variable that can be used as a background-color later.
var newColor = document.getElementById('color');
// This does the same thing as the line above, except the button is used instead of the input in the text box, and it is used to enable the button to 
// do anything.
var colorButton = document.getElementById('button');

// The following code simply listens for the variable colorButton to be clicked, then when it is, sets the background color to be newColor's value.
colorButton.addEventListener("click", function() {
    document.body.style.backgroundColor = newColor.value;    
});
