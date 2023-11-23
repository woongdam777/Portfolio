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

})