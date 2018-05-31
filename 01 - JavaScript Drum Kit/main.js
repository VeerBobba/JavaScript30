
function keypressevent(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(key.classList.contains('playing')){
        key.classList.remove('playing');
    }
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    
};
window.addEventListener("keydown",keypressevent);
function removeTransition(e){
   if(e.propertyName !== 'transform') return;
   this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key=> key.addEventListener('transitionend',removeTransition));
