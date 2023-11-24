const firstScreen = document.querySelector(".first-screen");
const firstScreenContent = firstScreen.innerHTML;

document.addEventListener('DOMContentLoaded', () => {
    const firstScreenState = localStorage.getItem('firstScreenDisplay');
    if (firstScreenState === 'none') {
        firstScreen.style.display = 'none';
    }
});

firstScreen.addEventListener('click', e => {
    
    e.target.innerHTML="";
    e.target.style.transition = 'width 1s ease-in-out';
    e.target.style.width = '30vw'

    setTimeout(()=>{
        e.target.style.display = 'none';
        localStorage.setItem('firstScreenDisplay', 'none');
    }, 1000)
    
});

const resetFirstScreen = document.getElementById("resetFirstScreen");

resetFirstScreen.addEventListener('click',() => {

    firstScreen.style.display = 'flex';
    firstScreen.style.width = '30vw';

    setTimeout(() => {   
        firstScreen.style.transition = 'width 1s ease-in-out';
        firstScreen.style.width = '100vw';
    }, 100);
    setTimeout(()=>{
        firstScreen.innerHTML = firstScreenContent;
        localStorage.setItem('firstScreenDisplay', 'flex');
    }, 1000)

});

document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = [ "안녕하세요.", "개발자 권재웅입니다.", "타이핑효과", "적용중입니다."];
    
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
       document.querySelector("#typing").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
       }
       // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
       typeWriter(dataText[i], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });