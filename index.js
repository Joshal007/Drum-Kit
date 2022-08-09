var btns = document.querySelectorAll("button");
var l = btns.length;

for(var i=0;i<l;i++){
    btns[i].addEventListener("click",function(){
        // var audio = new Audio('./sounds/tom-1.mp3');
        // audio.play();
        var randomchar = this.innerHTML;
        makeSoundKey(randomchar);
        buttonAnimation(randomchar)
    })
    
}

// document.querySelector(".l").addEventListener("click",function(){
//     var audio = new Audio('./sounds/kick-bass.mp3');
//     audio.play();
// })
// document.querySelector(".k").addEventListener("click",function(){
//     var audio = new Audio('./sounds/crash.mp3');
//     audio.play();
// })
// document.querySelector(".j").addEventListener("click",function(){
//     var audio = new Audio('./sounds/snare.mp3');
//     audio.play();
// })
// document.querySelector(".w").addEventListener("click",function(){
//     var audio = new Audio('./sounds/tom-1.mp3');
//     audio.play();
// })
// document.querySelector(".a").addEventListener("click",function(){
//     var audio = new Audio('./sounds/tom-2.mp3');
//     audio.play();
// })
// document.querySelector(".s").addEventListener("click",function(){
//     var audio = new Audio('./sounds/tom-3.mp3');
//     audio.play();
// })
// document.querySelector(".d").addEventListener("click",function(){
//     var audio = new Audio('./sounds/tom-4.mp3');
//     audio.play();
// })

// document.addEventListener("keypress",function(){
//     alert("Key was Pressed!");
// })

//for(var i=0;i<l;i++){
    document.addEventListener("keypress",function(event){
        //var randomchar = this.innerHTML;
        makeSoundKey(event.key);
        buttonAnimation(event.key);
    })
    
//}
function makeSoundKey(key){
    switch(key){
        case 'w':
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            var tom5 = new Audio('./sounds/snare.mp3');
            tom5.play();
            break;
        case 'k':
            var tom6 = new Audio('./sounds/crash.mp3');
            tom6.play();
            break;
        case 'l':
            var tom7 = new Audio('./sounds/kick-bass.mp3');
            tom7.play();
            break;
    }
}

function buttonAnimation(pressedKey){
    var activeButton = document.querySelector("."+pressedKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}