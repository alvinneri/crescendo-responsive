const hamburger = document.getElementById('hamburger');
const navigation = document.getElementById('navigation');

let menuOpen = false;
hamburger.addEventListener('click', ()=>{
    if(!menuOpen){
        navigation.classList.add('responsive');
        menuOpen = true;
    }else{
        navigation.classList.remove('responsive');
        menuOpen = false;
    }
});

