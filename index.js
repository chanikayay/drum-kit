var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//mouse click 
for (var i = 0; i < numberOfDrumButtons; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

})
}


//keydown 
document.addEventListener("keydown", function(event) {

    makeSound(event.key);
    buttonAnimation(event.key)
});


// make sound for click, keydown, and button
    function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play(); 
            
            break;
        
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play(); 

            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play(); 

            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play(); 

            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play(); 

            break;
        
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play(); 

            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play(); 

            break;
            default: console.log(makeSound);
    }
}


function buttonAnimation(currentkey) {
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");
    setTimeout(() => {activeButton.classList.remove("pressed")}, 100);
}


//funny drum button
document.querySelector("#myButton").addEventListener("click", function() { 
    var snare = document.querySelector(".j")
    var crash = document.querySelector(".k")

    //callback hell
    setTimeout(() => {snare.click()
        setTimeout(() => {snare.click()
            setTimeout(() => {crash.click()
        }, 600);
    }, 160);
}, 0);
})