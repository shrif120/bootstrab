let About = $("#Wlcome").offset().top;
$(window).scroll(function() {
    let position = $(window).scrollTop();
    if (position >= About) {
        $("#navBar").removeClass("bg-transparent");
        $("#navBar").addClass("bg-white");
        $("#Brand").addClass("text-black");
        $("#Brand").removeClass("text-white");
        $(".nav-link").addClass("text-black");
        $(".nav-link").removeClass("text-white");
        $(".nav-link").css("color", "black");
        $(".arrowUp").css("display", "block");
    } else {
        $("#navBar").removeClass("bg-white");
        $("#navBar").addClass("bg-transparent");
        $(".nav-link").removeClass("text-black");
        $(".nav-link").addClass("text-white");
        $(".arrowUp").css("display", "none");
        $("#Brand").removeClass("text-black");
        $("#Brand").addClass("text-white");
        $("#navBar").css("backgroundColor", "transparent");
    }

});

$(".arrowUp").click(function() {
    $("html,body").animate({
        scrollTop: '0'
    }, 2000);
});
$("._nav-link").click(function() {
    let href = $(this).attr("href");
    let hrefOffset = $(href).offset().top;
    $("html,body").animate({
        scrollTop: hrefOffset
    }, 1200);
})