
// full page
// $(document).ready(function() {
// 	$('#fullpage').fullpage({
// 		//options here
// 		autoScrolling:true,
// 		scrollHorizontally: true
// 	});
//
// 	//methods
// 	$.fn.fullpage.setAllowScrolling(false);
// });
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






/*현수형 부분*/
$(() => {


    let navItemState = [true, true, true, true, true, true, true];

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



    $('.dropdown-link').click(function () {
        // .nav-link 클릭시 이전의 active 값 해제 후,
        $(".dropdown-item").css("border-left", "1px solid rgb(120, 120, 120)");

        $('.dropdown-link').removeClass('active');

        // 클릭한 위치 active 적용
        $(this).addClass('active');
        $(".dropdown-item > .active").parent().css("border-left", "2px solid red");


    });

    $(function () {
        $("#confirm").click(function () {

            if ($(".body-inputbox li:first-child input").val().length < 1
                || $(".body-inputbox li:nth-child(2) input").val().length < 1
                || $(".body-inputbox li:last-child input").val().length < 1) {
                alert("경고", "제대로 입력해주세요.")
            } else {
                modalClose();
                //컨펌 이벤트 처리
                $(".news-section2").css("display", "block");
                $(".modal-btn-box").css("display", "none");
                $(".news-section2").css("transition", "all 2s");
            }
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

});


        // if ($(this).hasClass("hidden") === true) {
        //     $(".hidden").addClass('appear');
        //     $(".hidden").removeClass('disappear');
        //     // $(".dropdown-menu").css("display", "grid");
        // } else {
        //     if ($(".hidden").hasClass("appear") === true) {
        //         $(".hidden").addClass('disappear');
        //         $(".hidden").removeClass('appear');
        //     }
        //     //  $(".dropdown-menu").css("display", "none");
        // }



/*-----------------------------------*/

/*민호형 부분*/

/*-----------------------------------*/