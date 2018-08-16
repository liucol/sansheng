$(function() {
    //轮播
    var slides = new Swiper('.slides', {
        direction: 'horizontal',
        pagination: '.slides-pagination',
        paginationClickable: true,
        spaceBetween: 0,
        loop: true,
        autoplay: 2000,
        observer: true,
        observeParents: true
    });
    //tab切换
    $('.tabset1').pwstabs({
        effect: 'slideright',
        defaultTab: 1,
        containerWidth: '100%'
    });
    //角色展示
    $(".role-content").carousel({
        carousel: ".role-carousel", //轮播图容器
        indexContainer: ".role-index", //下标容器
        prev: ".role-carousel-prev",
        next: ".role-carousel-next",
        timing: 3000, //自动播放间隔
        animateTime: 800, //动画时间
        auto: true //是否自动播放
    });
    //游戏特色
    var features = new Swiper('.features', {
        direction: 'horizontal',
        pagination: '.features-pagination',
        paginationClickable: true,
        nextButton: '.features-button-next',
        prevButton: '.features-button-prev',
        loop: true,
        autoplay: 3000,
        observer: true,
        observeParents: true
    });
    //视频
    $(".btn-video").click(function() {
        $("#video").fadeIn();
        $('#myFrame').attr('src', $('#myFrame').attr('url'));
    });
    //关闭视频
    $(".close,#video").click(function() {
        $("#video").fadeOut();
        $('#myFrame').attr('src', '');
    });
    //导航栏
    $(".menu nav a").on("click", function() {
        $(this).addClass("active").siblings().removeClass("active");
    });
    $(window).scroll(function() {
        //console.log($(window).scrollTop());
        if ($(window).scrollTop() < 200) {
            $(".menu nav a").removeClass("active");
            $(".menu nav a:first-child").addClass("active");
        } else if ($(window).scrollTop() >= 700 && $(window).scrollTop() < 900) {
            $(".menu nav a").removeClass("active");
            $(".menu nav a:nth-child(2)").addClass("active");
        } else if ($(window).scrollTop() >= 1900 && $(window).scrollTop() < 2200) {
            $(".menu nav a").removeClass("active");
            $(".menu nav a:nth-child(3)").addClass("active");
        } else if ($(window).scrollTop() >= 3200) {
            $(".menu nav a").removeClass("active");
            $(".menu nav a:nth-child(4)").addClass("active");
        }
    });
    //    //描点
    //    $(".btn-lottery").click(function () {
    //        $("html,body").animate({
    //            scrollTop:"1150px"
    //        },500);
    //    });
});