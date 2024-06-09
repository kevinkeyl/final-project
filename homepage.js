let slideIdx = 1;
let autoplay;
function changeSlide(ctrl) {
    showSlides(slideIdx + ctrl);
}
function showSlides(idx) {
    slideIdx = idx;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if(slideIdx > slides.length) {
        slideIdx = 1;
    }else if(slideIdx == 0) {
        slideIdx = slides.length;
    }
    for(let i=0; i<slides.length; i++) {
        slides[i].className = slides[i].className.replace(" show", "")
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIdx - 1].className += " show";
    dots[slideIdx - 1].className += " active";
    setAutoPlay();
}
function setAutoPlay() {
    if(autoplay != undefined) clearInterval(autoplay);
    autoplay = setInterval(function() {
        changeSlide(1);
    }, 4000);
}
const itemObj = {
    0: {name: 'LEE 24SS 老帽', price: '950', img: 'img/p4-2.jpg', url: '#'},
    1: {name: 'Marithe 襪子三入組', price: '680', img: 'img/p4-4.jpg', url: '#'},
    2: {name: 'Dinotaeng卡夾 零錢包', price: '650', img: 'img/p1-1.jpg', url: '#'}
};
function generateItems(itemObj, containerId) {
    let objlength = Object.keys(itemObj).length;
    let needAppendElement = $('#' + containerId);
    needAppendElement.empty(); // 清空容器内容

    for(let i = 0; i < objlength; i++){
        needAppendElement.append(newCardItem(itemObj[i]));
    }
}
function newCardItem(item) {
    let temp = '';
    temp += '<div class="cardItem" onclick="window.location.href=\'' + item.url + '\'">';
    temp += '  <img class="card-img-top" src="' + item.img + '">';
    temp += '  <div class="card-body">';
    temp += '    <p class="card-title">' + item.name + '</p>';
    temp += '    <p class="card-price">$ ' + item.price + '</p>';
    temp += '  </div>';
    temp += '</div>';
    return temp;
}
window.onload = function() {
    showSlides(slideIdx);
    generateItems(itemObj, 'ContentDetail');
    
};
