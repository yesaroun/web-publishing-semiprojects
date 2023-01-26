
// firebase 참조
const firebaseConfig = {
    apiKey: "AIzaSyBrSmL5l7B5jZOrd4PEXfXuBY7ZrnXQr9c",
    authDomain: "randing-page.firebaseapp.com",
    databaseURL: "https://randing-page-default-rtdb.firebaseio.com/",
    projectId: "randing-page",
    storageBucket: "randing-page.appspot.com",
    messagingSenderId: "494897134256",
    appId: "1:494897134256:web:d8a5f9f62e428f03f49975"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.database();

// 고유 id 만들기
function guid() {
    function s4() {
        return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

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
    list.css({ width: winW + 'px', height: winH + 'px' });
});

// 버튼 움직임 위치
$(window).on('scroll resize', function () {
    var scrollPos = 0;
    scrollPos = $(document).scrollTop();
    fix();

    function fix() {
        if (scrollPos > 5900) {
            $('.fix .text').addClass('on');
        } else {
            $('.fix .text').removeClass('on');
        }
        if (scrollPos > 6400) {
            $('.fix .text').removeClass('on');
        }
    }
});


// nav
$(() => {
    let navItemState = [true, true, true, true, true, true, true];

    // 네비게이션 아이템을 드랍다운 메뉴 아이템으로 전환(클래스를 이용해서)
    function navToDropdown() {
        console.log("nav-item => dropdown-item");

        $(".nav-item:nth-last-child(2)").prependTo(".dropdown-menu");
        $(".dropdown-menu li:first").attr("class", "dropdown-item");
        $(".dropdown-menu li:first a").removeClass("nav-link");
        $(".dropdown-menu li:first a").addClass("dropdown-link");

        $(".dropdown-link:first-child").parent().css("border-left", "1px solid rgb(120, 120, 120)")

        if ($(".dropdown-link:first-child").hasClass("active")) {
            console.log($(".dropdown-link:first-child").attr("class"));
            $(".dropdown-link.active").css("background-color", "transparent");
            $(".dropdown-link.active").parent().css("border-left", "2px solid red");
            //            console.log($(".dropdown-link:first-child").css("border-left"));
            console.log($(".dropdown-link.active").css("border-left"));
        }
        //if ($().hasClass("nav-link") === true)
    }

    // 드랍다운메뉴 아이템을 네비게이션 메뉴 아이템으로 전환
    function dropdownToNav() {
        console.log("dropdown-item => nav-item");

        $(".navbar-nav li:last-child").before($(".dropdown-menu li:first"));
        $(".navbar-nav li:nth-last-child(2)").attr("class", "nav-item");
        $(".navbar-nav li:nth-last-child(2) a").addClass("nav-link");
        $(".navbar-nav li:nth-last-child(2) a").removeClass("dropdown-link");

        $(".nav-link").parent().css("border-left", "0")

        if ($(".navbar-nav li:nth-last-child(2) a").hasClass("active")) {
            console.log($(".navbar-nav li:nth-last-child(2) a").attr("class"));

            $(".nav-item > .active").css("background-color", "rgb(228, 228, 228)");
            $(".nav-link.active").parent().css("border-left", "0");
        }
    }

    const nav_length_default = $(".nav-item").length - 1;
    const navItemWidth = $(".nav-item:first-child").width();

    // 윈도우 가로길이가 변할때마다 조건에 맞춰 앞서 말한 navToDropdown 과 dropdownToNav 적용
    // 1조건 : 가로길이가 navItem의 모든 아이템 길이보다 적어지려할 때
    // 2조건 : 가로길이가 주어진 navItem 개수보다 넓어질때
    $(window).resize(function () {
        const width_size = window.innerWidth;
        const nav_length = $(".nav-item").length - 1;
        const navMenu_length = navItemWidth * $(".nav-item").length;
        const nav_width = navMenu_length + $(".navbar-logo").width();

        if (width_size <= nav_width && navItemState[nav_length - 1]) {

            navToDropdown();
            navItemState[nav_length - 1] = false;
            // dropdown-item => nav-item
        } else if (width_size > nav_width + navItemWidth && !navItemState[nav_length] && nav_length < nav_length_default) {

            dropdownToNav();
            navItemState[nav_length] = true;

        }
    })

    // 햄버거버튼 이벤트 , dropdown 메뉴 펼치기, 닫기
    $(".burger-btn").on("click", () => {
        const displayVal = $(".dropdown-menu").css("display");

        if (displayVal === "flex") {
            $(".dropdown-menu").css("display", "none");
            $(".burger-btn").removeClass("active");
        } else {
            $(".dropdown-menu").css("display", "flex");
            $(".burger-btn").addClass("active");
        }

    });

    // 해당 link 클릭 시 active 적용 후 다른 link active 해제
    $('.nav-link').click(function () {
        // .nav-link 클릭시 이전의 active 값 해제 후,
        $(".nav-item > .active").css("background-color", "transparent");
        $(".dropdown-item").css("border-left", "1px solid rgb(120, 120, 120)");

        $('.nav-link').removeClass('active');

        $('.nav-item.dropdown').css("width", "53px");


        // 클릭한 위치 active 적용
        $(this).addClass('active');
        $(".nav-item > .active").css("background-color", "rgb(208, 208, 208)");

        console.log(this);
        console.log($(".nav-item > .active"));

        $(".dropdown-item > .active").parent().css("border-left", "2px solid red");
        if ($(this).hasClass("dropdown") === true) {
            $(".dropdown-menu").css("display", "flex");
            // more 클릭했을때는 기존의 active 초기화
        } else if ($(this).hasClass("nav-link") === true) {
            $('.dropdown-link').removeClass('active');
            $(".dropdown-menu").css("display", "none");
            $(".dropdown-link.active").attr("")
            // more 클릭 안했을때 그대로 왔다 갔다
        } else if ($(this).hasClass("dropdown-link") === true) {

            $(".dropdown-item").css("border-left", "1px solid rgb(120, 120, 120)");
            $('.dropdown-link').removeClass('active');

            $(this).addClass('active');
            $(".dropdown-item > .active").parent().css("border-left", "2px solid red");
        }

    });

    // 해당 link 클릭 시 active 적용 후 다른 link active 해제
    $('.dropdown-link').click(function () {
        $(".dropdown-item").css("border-left", "1px solid rgb(120, 120, 120)");

        $('.dropdown-link').removeClass('active');

        // 클릭한 위치 active 적용
        $(this).addClass('active');
        $(".dropdown-item > .active").parent().css("border-left", "2px solid red");


    });

    // 모달 이벤트 확인 눌렀을때
    // 파이어베이스로 값 저장
    $("#confirm").click(function () {
        var uuid = guid();
        var name = $(".body-inputbox li:nth-child(1) input").val();
        var tel = $(".body-inputbox li:nth-child(2) input").val();
        var email = $(".body-inputbox li:nth-child(3) input").val();

        if (name.length < 1 || tel.length < 1 || email.length < 1) {
            alert("경고", "제대로 입력해주세요.")
        }
        else {
            modalClose();
            //컨펌 이벤트 처리

            db.ref('name/' + uuid).set({
                test: name
            });

            db.ref('tel/' + uuid).set({
                test: tel
            });

            db.ref('email/' + uuid).set({
                test: email
            });
        }

        console.log(name + " " + tel + " " + email);

        $(".body-inputbox li:nth-child(1) input").val("");
        $(".body-inputbox li:nth-child(2) input").val("");
        $(".body-inputbox li:nth-child(3) input").val("");
    });
    $("#modal-open").click(function () {
        $("#popup").css('display', 'flex').hide().fadeIn(800);
    });
    $("#close").click(function () {
        modalClose();
    });
    function modalClose() {
        $("#popup").fadeOut(300);
    }
});

