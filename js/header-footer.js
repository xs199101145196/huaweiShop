/**
 * Created by inmol on 2017/7/16.
 */
$(function () {
    $("#h-top-close").click(function () {
        $(".h-top")[0].remove();
        return false;
    });
    showxiala("h-nav-gengduo");
    showxiala("h-nav-ruanjian");
    showxiala("h-nav-phoneApp");
    $("#h-seach-box>input:first").focus(function () {
        $("#h-seach-box-placeholder").hide();
    }).blur(function () {
        $("#h-seach-box-placeholder").show();
    });
    $("#h-seach-shopCar").mouseover(function () {
        $("#shopCar").show();
    }).mouseout(function () {
        $("#shopCar").hide();
    });

    $("#allGoodBox-left").on("mouseover","li", function () {
        $("#allGoodBox").css("width", "891px");
        $(".allGoodBox-right").remove();

        var shuju = nav[$(this).attr("index")];
        var $html = $($("#allGoodBox-right-plain").html());
        $html.find("#allGoodBox-right-top h2").html(shuju.title);
        var Aarr =  shuju.product.split(",");
        console.log(Aarr[i]);
        var ahtml = [];
        for(var i = 0;i<Aarr.length;i++){
            ahtml.push("<a href='"+Aarr[i].substring(Aarr[i].indexOf(":")+1,Aarr[i].length)+"'>"+Aarr[i].substr(0,Aarr[i].indexOf(":"))+"</a>")
        }
        $html.find("#allGoodBox-right-main").html(ahtml.join(" "));
        $("#allGoodBox").append($html);
    });
    $("#allGoodBox").mouseleave(function(){
        $(".allGoodBox-right").remove();
        $("#allGoodBox").css("width", "240px");
    });
});
//鼠标移入显示下拉框方法
function showxiala(id) {
    $("#" + id).mouseenter(function () {
        $("#" + id + "-xiala").show();
    }).mouseleave(function () {
        $("#" + id + "-xiala").hide();
    });
}


var nav = [{
        title: "浏览手机频道",
        product: "荣耀:#,HUAWEI&nbspP系列:#,畅玩:#"
    },
    {
        title: "浏览笔记本 & 平板频道",
        product: "平板电脑:#,笔记本电脑:#,笔记本配件:#"
    },
    {
        title: "浏览穿戴频道",
        product: "手环:#,手边:#"
    },
    {
        title: "浏览智能家居频道",
        product: "字母路由:#,电视盒子:#,路由器:#,电力猫:#,家庭WIFI:#,HUAWEI HiLink生态产品:#"
    },
    {
        title: "浏览通用配件频道",
        product:"移动电源:#,耳机:#,音箱:#,自拍杆/支架:#,充电器/线材:#,排插:#"
    },
    {
        title: "浏览专属配件频道",
        product:"保护壳:#,保护套:#,贴膜:#,盒子专属配件:#,表带:#"
    }
];
