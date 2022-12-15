

// 이미지 슬라이드
$(function () {
    $('.visual').slick({
        prevArrow: false,
        nextArrow: false,
        arrow: false,
        dots: true,
        fade: true,
        autoplay: true,
        draggable: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplaySpeed: 5000,
        speed: 4000, /* 이건 넘어가는 시간 */
        customPaging: function (slider, i) {
            let tit = $(slider.$slides[i]).find('.dot').html();

            return '<div class="pager-tit" class=" + i + ">' + tit + '</div>';
        }
    });
});


// 이미지 너비, 높이 스크립트
$(function () {
    let winW = $(window).width();
    let winH = $(window).height();
    list = $('.visual .list');
    list.css({width: winW + 'px', height:winH + 'px'});
});