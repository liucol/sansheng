/**
 * Created by User on 2018/7/23.
 */
var $tabitem = $(".content-main-tab-item"),  //tab-title
    $tablist = $(".content-main-list");  //tab-list

$tabitem.on("click",function(){
    var index = $(this).index();

    $tabitem.eq(index).siblings().removeClass("active");
    $tabitem.eq(index).addClass("active");

    $tablist.eq(index).siblings().removeClass("active");
    $tablist.eq(index).addClass("active");
})