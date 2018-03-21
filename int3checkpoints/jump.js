var annoyingButton = document.getElementById("annoyingButton");
annoyingButton.style.position = "absolute";
annoyingButton.addEventListener("mousemove",function(){
    annoyingButton.style.top = Math.random() * 300 + "px";
    annoyingButton.style.left = Math.random() * 300 + "px";
});
annoyingButton.addEventListener("click", function() {
    document.body.style.backgroundColor = rgb(random(255),random(255),random(255));   
    var captions = document.getElementById("captions");
    captions.innerHTML = "This meme embodies what all cat lovers think of dogs. I am not a cat lover. In fact, I am allergic to cats.";
});