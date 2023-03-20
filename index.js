
for (let i = 0; i < document.querySelectorAll(".drum").length; i++){ 
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        //this.style.color = "white";
        playSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
        
    });

}

document.addEventListener("keydown", (event)=>{    //function(event){}
    //console.log(event);
    playSound(event.key);
    buttonAnimation(event.key);
});

function playSound(char){
    switch(char){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        default: 
            // alert("Invalid");
            break;
    }
}

function buttonAnimation(keyVal){
    document.querySelector("."+keyVal).classList.add("pressed");
    setTimeout(function (){
        document.querySelector("."+keyVal).classList.remove("pressed");
    }, 100);
}