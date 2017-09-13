/**
 * Created by Aiden on 2017-07-18 .
 */
//var config = [
//    {
//        "opacity" : 1,
//        "zIndex" : 20
//    },
//    {
//        "opacity" : 0,
//        "zIndex" : 10
//    },
//    {
//        "opacity" : 0,
//        "zIndex" : 8
//    },
//    {
//        "opacity" : 0,
//        "zIndex" : 6
//    },
//    {
//        "opacity" : 0,
//        "zIndex" : 4
//    },
//    {
//        "opacity" : 0,
//        "zIndex" : 2
//    },
//]
//获取元素
var mainBanner = document.getElementById("main-Banner");
var ulPic = mainBanner.children[0];
var ulPicLis = ulPic.children;
var ulRound = mainBanner.children[1];

for(var i = 0 ; i < ulPicLis.length; i++){
    ulPicLis[i].setAttribute("index",i);
    var li = document.createElement("li");
    ulRound.appendChild(li);
    li.setAttribute("index",i);
}

//把第一个原点变成白色
var ulRoundLis = ulRound.children;
ulRoundLis[0].setAttribute("class","color");

for(var i = 0 ; i < ulRoundLis.length; i++){
    ulRoundLis[i].onmouseover = function () {
        for(var j = 0 ; j < ulRoundLis.length; j++){
            ulRoundLis[j].removeAttribute("class");
            ulPicLis[j].style.opacity = 0;
            ulPicLis[j].style.zIndex = 0;
            console.log(j);
        }
        this.setAttribute("class","color");
        console.log(ulPicLis[this.getAttribute("index")]);

        animate(ulPicLis[this.getAttribute("index")], {
            "opacity" : 1,
            "zIndex" : 1
        })
        //ulPicLis[this.getAttribute("index")].style.display = "block";
    }
}

