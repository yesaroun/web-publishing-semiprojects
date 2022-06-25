$(document).ready(function(){
	$("nav li").click(function(){
        //alert("click event");
        $("nav li").removeClass("on");
        $(this).addClass("on");
    });
});

