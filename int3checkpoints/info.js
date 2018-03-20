var memeDog = document.getElementById("dumbDog1");
var toiletDog = document.getElementById("dumbDog2");
var captions = document.getElementById("captions");
memeDog.addEventListener("mouseenter", function(){
    captions.innerHTML = "This meme embodies what all cat lovers think of dogs. I am not a cat lover. In fact, I am allergic to cats.";
});
toiletDog.addEventListener("mouseenter", function(){
    captions.innerHTML = "This is what Dog lovers see in dogs and appreciate. They are just as chaotic as we are.";
});
