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

// 新增評論 當使用者按下新增評論按鈕時，觸發顯示彈跳視窗的函式
function showCommentModal() {
    // 建立彈跳視窗的 HTML 結構
    var modalHTML = `
    <div class="modal-overlay">
      <div class="modal-content">
        <div class="modal-header">
          <h3>新增評論</h3>
          <button class="close-modal">x</button>
        </div>
        <div class="modal-body">
          <form id="commentForm">
            <div style="display: flex; align-items: center; margin-bottom: 10px;">
              <label for="userName">姓名：</label>
              <input type="text" id="userName" required>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 10px;">
              <label for="starRating">商品品質：</label>
              <div class="star-rating">
                <i class="far fa-star star" data-value="1"></i>
                <i class="far fa-star star" data-value="2"></i>
                <i class="far fa-star star" data-value="3"></i>
                <i class="far fa-star star" data-value="4"></i>
                <i class="far fa-star star" data-value="5"></i>
              </div>
            </div>
            <label for="commentText">評論：</label>
            <textarea id="commentText" rows="5" required></textarea>
            <div id="buttonContainer">
              <button type="submit">提交</button>
              <button type="button" id="clearForm">清除</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    `;
  
   // 將彈跳視窗的 HTML 結構加入到網頁中
   var modalContainer = document.createElement('div');
   modalContainer.innerHTML = modalHTML;
   document.body.appendChild(modalContainer);
  
   // 關閉按鈕的點擊事件
   var closeButton = document.getElementsByClassName('close-modal')[0];
   closeButton.addEventListener('click', function() {
     hideCommentModal();
   });
  
   // 清除按鈕的點擊事件
   var clearButton = document.getElementById('clearForm');
   clearButton.addEventListener('click', function() {
     clearCommentForm();
   });
  
   // 星星點擊事件
   var stars = document.querySelectorAll('.star-rating .star');
   stars.forEach(star => {
     star.addEventListener('click', function() {
       var rating = this.getAttribute('data-value');
       highlightStars(rating);
     });
   });
  
   // 表單的提交事件
   var commentForm = document.getElementById('commentForm');
   commentForm.addEventListener('submit', function(event) {
     event.preventDefault();
  
      // 獲取使用者輸入的評論內容
      var userName = document.getElementById('userName').value;
      var starRating = document.querySelectorAll('.star-rating .star.selected').length;
      var commentText = document.getElementById('commentText').value;
  
      // 處理使用者輸入的評論內容 將評論內容顯示在網頁上
      var newCommentHTML = `
      <div class="comment">
        <img src="img/usericon.png">
        <div class="commenttext">
          <h3>${userName} &emsp; ${'★'.repeat(starRating)}${'☆'.repeat(5 - starRating)}</h3>
          <p>${commentText}</p>
        </div>
      </div>
      `;
  
      var commentsContainer = document.getElementsByClassName('container2')[0];
      var comments = commentsContainer.getElementsByClassName('comment');
      var lastComment = comments[comments.length - 1];
      lastComment.insertAdjacentHTML('afterend', newCommentHTML);
  
      // 提交評論後，關閉彈跳視窗
      hideCommentModal();
    });
  }
  
  function highlightStars(rating) {
    var stars = document.querySelectorAll('.star-rating .star');
    stars.forEach(star => {
      star.classList.remove('selected');
    });
    for (var i = 0; i < rating; i++) {
      stars[i].classList.add('selected');
      stars[i].classList.replace('far', 'fas'); // 填滿星星
    }
    for (var i = rating; i < stars.length; i++) {
      stars[i].classList.replace('fas', 'far'); // 清空星星
    }
  }
  
  function hideCommentModal() {
    var modalOverlay = document.getElementsByClassName('modal-overlay')[0];
    modalOverlay.parentNode.removeChild(modalOverlay);
  }
  
  function clearCommentForm() {
    document.getElementById('userName').value = '';
    var stars = document.querySelectorAll('.star-rating .star');
    stars.forEach(star => {
      star.classList.remove('selected');
      star.classList.replace('fas', 'far'); // 清空星星
    });
    document.getElementById('commentText').value = '';
  }
