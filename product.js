// 當頁面加載完畢時，執行以下函數
window.addEventListener('load', function() {
    // 獲取所有頁籤的連結
    var tabs = document.querySelectorAll('#tab > ul > li > a');

    // 為每個頁籤連結添加點擊事件
    tabs.forEach(function(tab) {
        tab.addEventListener('click', function(event) {
            // 阻止連結的默認行為，也就是不讓頁面跳轉
            event.preventDefault();
            // 獲取被點擊的頁籤連結的 href 屬性值，即指向的內容區塊的 ID
            var targetId = this.getAttribute('href');
            // 更新瀏覽器的地址欄中的 hash 值
            window.location.hash = targetId;
        });
    });
    // 檢查頁面加載時 URL 中是否有 hash 值，如果沒有則手動設置為 #tab-1
    if (!window.location.hash) {
        window.location.hash = '#tab-1';
    } 
});
const itemObj0 = {
    0: {name: 'Dinotaeng 聯名款安全帽', price: '1499', img: 'img/p1-8.jpg', url: 'korean1-8.html'},
    1: {name: 'Dinotaeng 小夜燈', price: '850', img: 'img/p1-9.jpg', url: 'korean1-9.html'},
    2: {name: 'Dinotaeng 卡夾 零錢包', price: '650', img: 'img/p1-1.jpg', url: 'korean1-1.html'},
    3: {name: 'Dinotaeng 棉花糖平板包', price: '1200', img: 'img/p1-2.jpg', url: 'korean1-2.html'},
    4: {name: 'Dinotaeng 手機支架', price: '460', img: 'img/p1-3.jpg', url: '#'},
    5: {name: 'Second Morning 手機殼', price: '599', img: 'img/p1-4.jpg', url: '#'},
    6: {name: 'Second Morning 耳機殼 ', price: '550', img: 'img/p1-5.jpg', url: '#'},
    7: {name: 'Second Morning 平板 / 筆電包', price: '1200', img: 'img/p1-6.jpg', url: '#'},
    8: {name: 'Second Morning 吊飾耳機殼', price: '790', img: 'img/p1-7.jpg', url: '#'},
    9: {name: 'EPT COURT 經典黑白 板鞋', price: '3950', img: 'img/p2-1.jpg', url: '#'},
    10: {name: 'EPT COURT 灰白拼接 板鞋', price: '3950', img: 'img/p2-2.jpg', url: '#'},
    11: {name: 'NERDY 23SS Poach 經典板鞋', price: '1880', img: 'img/p2-3.jpg', url: '#'},
    12: {name: 'LEE 帆布袋', price: '1280', img: 'img/p3-1.jpg', url: '#'},
    13: {name: 'NEIKIDNIS Mesh String後背包', price: '1650', img: 'img/p3-2.jpg', url: '#'},
    14: {name: 'WOOALONG 經典刺繡老帽', price: '880', img: 'img/p4-1.jpg', url: '#'},
    15: {name: 'LEE 24SS老帽', price: '950', img: 'img/p4-2.jpg', url: '#'},
    16: {name: 'Marithe 24SS老帽', price: '1180', img: 'img/p4-3.jpg', url: '#'},
    17: {name: 'Marithe 襪子三入組', price: '680', img: 'img/p4-4.jpg', url: '#'},
    18: {name: 'LEE 刺繡小標襪子 ', price: '199', img: 'img/p4-5.jpg', url: '#'},
    19: {name: 'RECLOW RC B26韓國眼鏡', price: '980', img: 'img/p4-6.jpg', url: '#'},
    20: {name: 'RECLOW RC B019黑框眼鏡', price: '1280', img: 'img/p4-7.jpg', url: '#'}

};
const itemObj1 = {
    0: {name: 'Dinotaeng 聯名款安全帽', price: '1499', img: 'img/p1-8.jpg', url: 'korean1-8.html'},
    1: {name: 'Dinotaeng 小夜燈', price: '850', img: 'img/p1-9.jpg', url: 'korean1-9.html'},
    2: {name: 'Dinotaeng 卡夾 零錢包', price: '650', img: 'img/p1-1.jpg', url: 'korean1-1.html'},
    3: {name: 'Dinotaeng 棉花糖平板包', price: '1200', img: 'img/p1-2.jpg', url: 'korean1-2.html'},
    4: {name: 'Dinotaeng 手機支架', price: '460', img: 'img/p1-3.jpg', url: '#'},
    5: {name: 'Second Morning 手機殼', price: '599', img: 'img/p1-4.jpg', url: '#'},
    6: {name: 'Second Morning 耳機殼 ', price: '550', img: 'img/p1-5.jpg', url: '#'},
    7: {name: 'Second Morning 平板 / 筆電包', price: '1200', img: 'img/p1-6.jpg', url: '#'},
    8: {name: 'Second Morning 吊飾耳機殼', price: '790', img: 'img/p1-7.jpg', url: '#'}
   
};

const itemObj2 = {
    0: {name: 'EPT COURT 經典黑白 板鞋', price: '3950', img: 'img/p2-1.jpg', url: '#'},
    1: {name: 'EPT COURT 灰白拼接 板鞋', price: '3950', img: 'img/p2-2.jpg', url: '#'},
    2: {name: 'NERDY 23SS Poach 經典板鞋', price: '1880', img: 'img/p2-3.jpg', url: '#'}
};
const itemObj3 = {
    0: {name: 'LEE 帆布袋', price: '1280', img: 'img/p3-1.jpg', url: '#'},
    1: {name: 'NEIKIDNIS 後背包', price: '1650', img: 'img/p3-2.jpg', url: '#'}
};
const itemObj4 = {
    0: {name: 'WOOALONG 經典刺繡老帽', price: '880', img: 'img/p4-1.jpg', url: '#'},
    1: {name: 'LEE 24SS老帽', price: '950', img: 'img/p4-2.jpg', url: '#'},
    2: {name: 'Marithe 24SS老帽', price: '1180', img: 'img/p4-3.jpg', url: '#'},
    3: {name: 'Marithe 襪子三入組', price: '680', img: 'img/p4-4.jpg', url: '#'},
    4: {name: 'LEE 刺繡小標襪子 ', price: '199', img: 'img/p4-5.jpg', url: '#'},
    5: {name: 'RECLOW RC B26韓國眼鏡', price: '980', img: 'img/p4-6.jpg', url: '#'},
    6: {name: 'RECLOW RC B019黑框眼鏡', price: '1280', img: 'img/p4-7.jpg', url: '#'},

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
    generateItems(itemObj0, 'allContentDetail');
    generateItems(itemObj1, 'contentDetail'); 
    generateItems(itemObj2, 'shoesContentDetail'); 
    generateItems(itemObj3, 'bagContentDetail');
    generateItems(itemObj4, 'accessoriesContentDetail');
};


