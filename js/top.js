// 當用戶滾動到特定位置時，顯示或隱藏按鈕
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}

// 當用戶點擊按鈕時，滾動到頂部
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}