// fullpage 코드 작성한다
// new fullpage('#fullpage',
// 약간 이런 형식으로 작성함
// https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#fullpagejs
// 여기 참고하기

// 여기서는 조금 변경해서 제이쿼리 형식으로함
// 그러면 나는 js 형식으로 바꿔봐도 괜찮을듯

// 1. 풀페이지 스크롤
$(function (){
    $('#fullpage').fullpage({   // 아이디가 fullpage에게 fullpage 플러그인 호출
        fingersonly: true,      // 핸드폰 드래그 가능하게
        anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage'],
        menu:'.rightNav'
    });
});

// 2. GNB
$(function () {
    setGnb();
    function setGnb(){
        $('.innerHeader .gnb > li > a').on('mouseenter focus', function (){
            $('.innerHeader').addClass('on');
            $('.innerHeader .gnb > li > .inner ').addClass('on');
            $('header').css({'border':'none'});
        });
        $('header').on('mouseleave', function () {
            $('.innerHeader').removeClass('on');
            $('.innerHeader .gnb > li > .inner ').removeClass('on');
            $('header').css({'border':'1px solid rgba(255,255,255,0.1)'});
        });
    }
});
// 위에 코드 자바스크립트로 만들어봤는데 작동은 안함
// setGnb();
// function setGnb(){
//     document.querySelector(".innerHeader .gnb > li > a").addEventListener("mouseenter focus", function () {
//         document.querySelector(".innerHeader").classList.add("on");
//         document.querySelector(".innerHeader .gnb > li > .inner").classList.add('on');
//         document.querySelector("header").style.border = "none";
//     });
//     document.querySelector("header").addEventListener("mouseleave", function () {
//         document.querySelector(".innerHeader").classList.remove("on");
//         document.querySelector(".innerHeader .gnb > li > .inner").classList.remove('on');
//         document.querySelector("header").style.border = "1px solid rgba(255,255,255,0.1)";
//     });
// }


// 3. 이미지 슬라이드
$(function (){
    $('.visual').slick({
        arrow: false,       // 사용할 때는 true 사용하지 않으면 false
        dots: true,         // 아래 선택지
        fade: true,         // 부드럽게
        autoplay: true,     // 자동 재생
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplaySpeed: 2800, // 자동재생 시간 2.8초
        //커스텀 페이징은 옵션 보면 설명 있는데
        customPaging: function (slider, i) {
            let tit = $(slider.$slides[i]).find('.dot').html();
            // html문서 안에 있는 dot클래스를 찾아서 타이틀 변수에 대입한다.
            // slides매개 변수i 즉 리스트에 있는 dot클래스를 찾아서 tit에 대입한다.
            return '<div class="pager-tit" class=" + i + ">' + tit + '</div>';
            // 변수 tit가 html에 dot클래스의 슬라이드 리스트에 있는 dot내용을 가지고 있다. 그러니까 첫번째 리스트를 선택하면 첫번째 리스트에 dot가 대입되는거고 두번째는 두번째가 대입되는건데
            // 그 내용이 tit의 내용을 paper-tit라는 클래스에 반환해라 이런 내용이다.
        }
    });
});

// 여기까지 하면 이미지가 잘 보이지 않는다 왜냐하면 bg로 넣어놨기 때문
// 그래서 그걸 확보해주는게 4번
// 4. 이미지슬라이드 - 넓이 높이 스크립트

$(function () {
    let winW = $(window).width();
    let winH = $(window).height();
        list = $('.visual .list');
    list.css({width: winW + 'px', height:winH + 'px'});
});

