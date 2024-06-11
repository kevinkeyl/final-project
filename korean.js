let slideIndex = 1,
    selectedSize,
    selectedStyle,
    autoplay;

function initEnlargeImage() {
    document.querySelectorAll('.slide img').forEach(img => {
        img.addEventListener('click', function() {
            document.getElementById('picEnlarge').style.display = 'block';
            document.getElementById('img01').src = this.src;
        });
    });
    
    document.querySelector('.close').addEventListener('click', function() {
        document.getElementById('picEnlarge').style.display = 'none';
    });
}

function initProductOptions() {
    selectedStyle = '';
    selectedSize = '';

    document.querySelectorAll('.style-box').forEach(box => {
        box.addEventListener('click', function() {
            document.querySelectorAll('.style-box').forEach(box => box.classList.remove('selected'));
            this.classList.add('selected');
            selectedStyle = this.textContent; 
        });
    });

    document.querySelectorAll('.size-box').forEach(box => {
        box.addEventListener('click', function() {
            document.querySelectorAll('.size-box').forEach(box => box.classList.remove('selected'));
            this.classList.add('selected');
            selectedSize = this.textContent; 
        });
    });
}

function addToCart() {
    let quantity = Number(document.getElementById("num").value);
    if (quantity > 0) {
        if (selectedSize && selectedStyle) {  
            //...
            alert('已加入 ' + quantity + ' 件商品到購物車');
        } else if (!selectedSize) {
            alert('請選擇尺寸');
        } else if (!selectedStyle) {
            alert('請選擇款式');
        }
    } else {
        alert('請至少加入一件商品到購物車');
    }
}

function addListener() {
    let num = document.getElementById("num");
    document.getElementById("up").addEventListener("click", function() {
        num.value = Number(num.value)+1;
    });
    document.getElementById("down").addEventListener("click", function() {
        if(num.value <= 0){
            num.value = 0;
        }else{
            num.value = Number(num.value)-1;
        }
    });
}

window.onload = function() {
    initSlides();
    initEnlargeImage();
    initProductOptions();
    addListener();
};



function initSlides() {
    showSlides(slideIndex);

    document.querySelector(".prev").addEventListener('click', function() {
        plusSlides(-1);
    });

    document.querySelector(".next").addEventListener('click', function() {
        plusSlides(1);
    });

    document.querySelectorAll(".dot").forEach((dot, index) => {
        dot.addEventListener('click', function() {
            showSlides(slideIndex = index + 1);
        });
    });
   
    setAutoPlay();
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    clearInterval(autoplay);

    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");

    if (n > slides.length) 
        slideIndex = 1;
    else if (n < 1) 
        slideIndex = slides.length;
        
    slides.forEach(slide => {
        slide.style.display = "none";
    });
    dots.forEach(dot => {
        dot.className = dot.className.replace(" active", "");
    });
    
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";

    setAutoPlay();
}

function setAutoPlay() {
    autoplay = setInterval(function() {
        plusSlides(1);
    }, 4000);
}


