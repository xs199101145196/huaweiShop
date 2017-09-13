 //获取元素
var mainBanner = document.getElementById("main-Banner");
var ulPic = mainBanner.children[0];
var ulPicLis = ulPic.children;
var ulRound = mainBanner.children[1];
var sideBanner = document.getElementById("sideBanner");
var ulSideBanner = sideBanner.children[0];
var ulSideBannerLis = ulSideBanner.children;
var aLeft = document.getElementById("a-left");
var aRight = document.getElementById("a-right");
var recommendGoods= document.getElementById("recommend-goods");
var ulRecomendGoods = document.getElementById("rg");
var ulRecommendGoodsLis = ulRecomendGoods.getElementsByTagName("li");

var subBannerPic = document.getElementById("subBanner-pic");
var ulsubBannerPic = subBannerPic.children[0];
var ulsubBannerPicLis = ulsubBannerPic.children;
var ulsubBannerRound = subBannerPic.children[1];

var goTop = document.getElementById("goTop");

//创建小圆点的li标签
//for(var i = 0 ; i < ulPicLis.length; i++){
//    var li = document.createElement("li");
//    ulRound.appendChild(li);
//    li.setAttribute("index",i);
//    //ulPicLis[i].setAttribute("picIndex",i);
//}

//把第一个小圆点变白
$("#round").children().eq(0).addClass("color");
//var ulRoundLis = ulRound.children;
//ulRoundLis[0].setAttribute("class","color");

//给每个小圆点注册鼠标移入事件
$("#round").children().mouseover(function () {
    $("#round").children().removeClass("color");
    $(this).addClass("color");
    var $disappear = $("#pic").children().children()
    $($disappear).animate({
        "opacity":0
    },100)
    var $appear = $("#pic").children("li").eq($(this).index()).children();
    $($appear).animate({
        "opacity":1
    },800)
    indexPic = $(this).index();
})

//JS 有缺陷
//for(var i = 0 ; i < ulRoundLis.length; i++){
//    ulRoundLis[i].onmouseover = function () {
//        for(var j = 0 ; j < ulRoundLis.length; j++){
//            ulRoundLis[j].removeAttribute("class");
//            ulPicLis[j].children[0].style.opacity = 0;
//        }
//        this.setAttribute("class","color");
//        animate(ulPicLis[this.getAttribute("index")].children[0],{
//            "opacity":1
//        });
//        indexPic = this.getAttribute("index");
//    }
//}

var indexPic = 0;
function nextImg(){
    if(indexPic == $("#pic").children().length-1){
        indexPic = -1;
    }
    indexPic++;
    $($("#pic").children().children()).animate({
        "opacity":0
    },100);
    $($("#pic").children().eq(indexPic).children()).animate({
        "opacity":1
    },800)
    $("#round").children().removeClass("color");
    $("#round").children().eq(indexPic).addClass("color");
}

//var indexPic = 0;
//function nextImg() {
//    if(indexPic == ulPicLis.length-1) {
//        indexPic = -1;
//    }
//    indexPic++;
//    for(var i = 0 ; i < ulPicLis.length; i++){
//        ulPicLis[i].children[0].style.opacity = 0;
//    }
//    animate(ulPicLis[indexPic].children[0],{
//        "opacity":1
//    });
//    for(var i = 0 ; i < ulRoundLis.length; i++){
//        ulRoundLis[i].removeAttribute("class");
//    }
//    ulRoundLis[indexPic].setAttribute("class","color");
//}
////设置定时器自动滚动
var timerId = null;
timerId = setInterval(nextImg,3000);

mainBanner.onmouseover = function () {
    clearInterval(timerId);
}
mainBanner.onmouseout = function () {
    timerId = setInterval(nextImg,3000);
}

//克隆最后一条广告
var lastSideBanner = ulSideBannerLis[0].cloneNode(true);
ulSideBanner.appendChild(lastSideBanner);

var indexNotice = 0;
function nextNotice() {
    if(indexNotice == ulSideBannerLis.length-1){
        indexNotice = 0;
        ulSideBanner.style.top = 0+"px";
    }
    //console.log(ulSideBanner.style.top);

    indexNotice++;
    var target = -ulSideBannerLis[0].offsetHeight*indexNotice;
    animate(ulSideBanner,{
        "top":target
    });
}

//定时器自动滚动广告
var timerId1 = null;
timerId1 = setInterval(nextNotice,3000);

sideBanner.onmouseover = function () {
    clearInterval(timerId1);
}
sideBanner.onmouseout = function () {
    timerId1 = setInterval(nextNotice,3000);
}

//精品推荐滚动轮播
var rgIndex = 0;
aRight.onclick = function () {
    if(rgIndex == 1){
        animate(ulRecomendGoods,{
            "margin-left":-(ulRecomendGoods.offsetWidth-recommendGoods.offsetWidth)+2
        })
    }else {
        rgIndex++;
        animate(ulRecomendGoods,{
            "margin-left":-ulRecommendGoodsLis[0].offsetWidth*5
        })
    }
}
aLeft.onclick = function () {
    if(rgIndex == 0){
        animate(ulRecomendGoods,{
            "margin-left":0
        })
    }else{
        rgIndex--;
        animate(ulRecomendGoods,{
            "margin-left":-(ulRecommendGoodsLis[0].offsetWidth)
        })
    }
}

//中部轮播图特效
//for(var i = 0 ; i < ulsubBannerPicLis.length; i++){
//    var li = document.createElement("li");
//    ulsubBannerRound.appendChild(li);
//    li.setAttribute("index",i);
//    //ulPicLis[i].setAttribute("picIndex",i);
//}
//把第一个小圆点变白
$("#subRound").children().eq(0).addClass("color");
//var ulsubBannerRoundLis = ulsubBannerRound.children;
//ulsubBannerRoundLis[0].setAttribute("class","color");

//给每个小圆点注册鼠标移入事件
$("#subRound").children().mouseover(function () {
    $("#subRound").children().removeClass("color");
    $(this).addClass("color");
    var $disappear = $("#subPic").children().children()
    $($disappear).animate({
        "opacity":0
    },100)
    var $appear = $("#subPic").children("li").eq($(this).index()).children();
    $($appear).animate({
        "opacity":1
    },800)
    //indexPic = $(this).index();
})
//for(var i = 0 ; i < ulsubBannerRoundLis.length; i++){
//    ulsubBannerRoundLis[i].onmouseover = function () {
//        for(var j = 0 ; j < ulsubBannerRoundLis.length; j++){
//            ulsubBannerRoundLis[j].removeAttribute("class");
//            ulsubBannerPicLis[j].children[0].style.opacity = 0;
//        }
//        this.setAttribute("class","color");
//        animate(ulsubBannerPicLis[this.getAttribute("index")].children[0],{
//            "opacity":1
//        });
//        indexPicSub = this.getAttribute("index");
//    }
//}
var indexPicSub = 0;
function nextImgSub(){
    if(indexPicSub == $("#subPic").children().length-1){
        indexPicSub = -1;
    }
    indexPicSub++;
    $($("#subPic").children().children()).animate({
        "opacity":0
    },100);
    $($("#subPic").children().eq(indexPicSub).children()).animate({
        "opacity":1
    },800)
    $("#subRound").children().removeClass("color");
    $("#subRound").children().eq(indexPicSub).addClass("color");
}
//var indexPicSub = 0;
//function nextImgSub() {
//    if(indexPicSub == ulsubBannerPicLis.length-1) {
//        indexPicSub = -1;
//    }
//    indexPicSub++;
//    for(var i = 0 ; i < ulsubBannerPicLis.length; i++){
//        ulsubBannerPicLis[i].children[0].style.opacity = 0;
//    }
//    animate(ulsubBannerPicLis[indexPicSub].children[0],{
//        "opacity":1
//    });
//    for(var i = 0 ; i < ulsubBannerRoundLis.length; i++){
//        ulsubBannerRoundLis[i].removeAttribute("class");
//    }
//    ulsubBannerRoundLis[indexPicSub].setAttribute("class","color");
//}
//设置定时器自动滚动
var timerId1 = null;
timerId1 = setInterval(nextImgSub,3000);

subBannerPic.onmouseover = function () {
    clearInterval(timerId1);
}
subBannerPic.onmouseout = function () {
    timerId1 = setInterval(nextImgSub,3000);
}

//回到顶部动画
var timer = null; //定时器
var target =0;
var leader = 0;

window.onscroll = function () {
    getScroll().scrollTop>1000 ? show(goTop):hide(goTop);
    leader = getScroll().scrollTop;
}
goTop.onclick = function () {
    target = 0;
    clearInterval(timer);
    timer = setInterval(function(){

        leader = leader  + (target - leader) /10;
        window.scrollTo(0,leader);
        if(leader == target) {
            clearInterval(timer);
            goTop.style.display = 'none';
        }
    },10);
    // window.scrollTo(0,0); 去往页面的坐标 x ,y
}
function show(ele) {
    ele.style.display = "block"
}
function hide(ele){
    ele.style.display = "none"
}
function getScroll(){
    return {
        scrollLeft : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
        scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    };
}


