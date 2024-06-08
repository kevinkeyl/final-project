let slideIndex1 = 0;
let slideIndex2 = 0;

function showSlides(slideSet) {
    let i;
    let slides, dots;
    if (slideSet === 1) {
        slides = document.getElementsByClassName("mySlides-1");
        dots = document.getElementsByClassName("dot-1");
        slideIndex1++;
        if (slideIndex1 > slides.length) { slideIndex1 = 1 }
        if (slideIndex1 < 1) { slideIndex1 = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex1 - 1].style.display = "block";
        dots[slideIndex1 - 1].className += " active";
    } else {
        slides = document.getElementsByClassName("mySlides-2");
        dots = document.getElementsByClassName("dot-2");
        slideIndex2++;
        if (slideIndex2 > slides.length) { slideIndex2 = 1 }
        if (slideIndex2 < 1) { slideIndex2 = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex2 - 1].style.display = "block";
        dots[slideIndex2 - 1].className += " active";
    }
}

function plusSlides(n, slideSet) {
    if (slideSet === 1) {
        slideIndex1 += n - 1;
        showSlides(1);
    } else {
        slideIndex2 += n - 1;
        showSlides(2);
    }
}

function currentSlide(n, slideSet) {
    if (slideSet === 1) {
        slideIndex1 = n - 1;
        showSlides(1);
    } else {
        slideIndex2 = n - 1;
        showSlides(2);
    }
}

function autoSlides() {
    showSlides(1);
    showSlides(2);
    setTimeout(autoSlides, 3000); // Change image every 3 seconds
}

document.addEventListener("DOMContentLoaded", function() {
    autoSlides();
});

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
    generateItems(itemObj, 'ContentDetail');
};