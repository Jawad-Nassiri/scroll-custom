let customScroll = document.getElementById('scroll');

function scroll (){

    let scrollTop = window.scrollY;
    
    let documentHeight = document.body.clientHeight;
    
    let windowHeight = window.innerHeight;

    let scrollPercent = scrollTop / (documentHeight - windowHeight) * 100;

    let scrollPercentRounded = Math.floor(scrollPercent);

    customScroll.style.width = scrollPercentRounded + '%';

    
}


window.addEventListener('scroll', scroll);