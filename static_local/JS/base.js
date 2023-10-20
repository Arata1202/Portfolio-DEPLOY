'use strict'

//途中までスクロール
function ScrollWindow(elem) {
    var element = document.getElementById(elem);
    var rect = element.getBoundingClientRect();
    var elemtop = rect.top + window.pageYOffset;
    document.documentElement.scrollTop = elemtop;
}

//一番上までスクロール
function scrollToTop() {
    scrollTo(0, 0);
}
