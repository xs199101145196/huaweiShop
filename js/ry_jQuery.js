/**
 * Created by Administrator on 2017/7/19.
 */
$(function(){

    //导航鼠标移入
    $('.topNav_right>ul>li').mouseover(function(){
        $(this).css('backgroundColor','#00a3cb');
        //鼠标移入导航栏下拉框出现
        $('.xiala').stop().slideDown();
    })
    $('.topNav_right>ul>li').mouseout(function(){
        $(this).css('backgroundColor','#00b5e2');
        //$('.xiala').css('display','none');
    })
    //鼠标移出下拉，下拉才可以消失
    $('.xiala').mouseover(function(){
        $('.xiala').stop().slideDown();
    })
    $('.xiala').mouseout(function(){
        $('.xiala').stop().slideUp();
    })
    //鼠标移入下拉的li标签li变色
    $('.xiala_top li').mouseover(function(){
        $(this).children().css('color','#00b5e2');
    })
    $('.xiala_top li').mouseout(function(){
        $(this).children().css('color','black');
    })
     //鼠标移入下拉底部的li标签.bc变色
    $('.xiala_bottom li').mouseenter(function(){
        $(this).children().children(".bc")[0].style.color = "#00b5e2";
    })
    $('.xiala_bottom li').mouseleave(function(){
        $(this).children().children(".bc")[0].style.color = "#000";
    })





    //鼠标移入下拉框出现

    //导航鼠标移入




    //轮播图


    $('.screen_index>span').mouseover(function(){
        $('.screen_index>span').removeClass('current');
        $(this).addClass('current');
        //console.log('haha');
        var offsetX=-($(this).index()*$('.screen').width());
        //console.log($(this).index()*$('.screen').width());
        $('.screen_pic').animate({
            'left':offsetX
        },500)
    })
//轮播图结束
})