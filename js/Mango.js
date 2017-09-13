/**
 * Created by Administrator on 2017/7/18.
 */
//主图的放大镜效果
//获取元素
window.onload = function () {
    var src1 = [
        "./img/huaweipics/king/428_428_1488119863052mp.jpg",
        "./img/huaweipics/black/428_428_1480993471754.jpg",
        "./img/huaweipics/roseking/428_428_1488120427264mp.jpg",
        "./img/huaweipics/blue/428_428_1488120495681mp.jpg",
        "./img/huaweipics/bai/428_428_1488120541185mp.jpg",
        "./img/huaweipics/green/428_428_1488120594283mp.jpg"
    ];

    var src2 = [
        ["./img/huaweipics/king/55_55_1488119851640.jpg",
            "./img/huaweipics/king/55_55_1488119850857.jpg",
            "./img/huaweipics/king/55_55_1488119852394.jpg",
            "./img/huaweipics/king/55_55_1488119853139.jpg",//第一个
            "./img/huaweipics/king/55_55_1488119854599.jpg"],

        ["./img/huaweipics/black/55_55_1488119937007mp.jpg",
            "./img/huaweipics/black/55_55_1488119925729.jpg",
            "./img/huaweipics/black/55_55_1488119926530.jpg",//第二个
            "./img/huaweipics/black/55_55_1488119927562.jpg",
        "./img/huaweipics/black/55_55_1488119928414.jpg"],

        ["./img/huaweipics/roseking/55_55_1488120427264mp.jpg",
            "./img/huaweipics/roseking/55_55_1488120396569.jpg",
        "./img/huaweipics/roseking/55_55_1488120397536.jpg",//第三个
        "./img/huaweipics/roseking/55_55_1488120398308.jpg",
        "./img/huaweipics/roseking/55_55_1488120399484.jpg"],

        ["./img/huaweipics/blue/55_55_1488120495681mp.jpg",
        "./img/huaweipics/blue/55_55_1488120462924.jpg",
            "./img/huaweipics/blue/55_55_1488120464811.jpg",//第四个
            "./img/huaweipics/blue/55_55_1488120465688.jpg",
            "./img/huaweipics/blue/55_55_1488120464069.jpg"
        ],

        ["./img/huaweipics/bai/55_55_1488120541185mp.jpg",
        "./img/huaweipics/bai/55_55_1488120528094.jpg",
        "./img/huaweipics/bai/55_55_1488120529125.jpg",//第五个
        "./img/huaweipics/bai/55_55_1488120530167.jpg",
        "./img/huaweipics/bai/55_55_1488120530913.jpg"],

        ["./img/huaweipics/green/55_55_1488120594283mp.jpg",
        "./img/huaweipics/green/55_55_1488120582254.jpg",
        "./img/huaweipics/green/55_55_1488120583123.jpg",
        "./img/huaweipics/green/55_55_1488120584000.jpg",
        "./img/huaweipics/green/55_55_1488120585079.jpg"]
    ];

    //长长的图的路径
    var src3 = [
        "./img/huaweipics/201707121430113509412.jpg",
        "./img/huaweipics/201702220950493791839.jpg",
        "./img/huaweipics/201706281046285112766.jpg",
        "./img/huaweipics/201706281046286747020.jpg",
        "./img/huaweipics/201706281046284954006.jpg",
        "./img/huaweipics/201706281046295558948.jpg",
        "./img/huaweipics/201706281046297602476.jpg",
        "./img/huaweipics/201706281046297180378.jpg",
        "./img/huaweipics/201706281046305630725.jpg",
        "./img/huaweipics/201706281046307587677.jpg",
        "./img/huaweipics/201706281046308655240.jpg",
        "./img/huaweipics/201706281046313325014.jpg",
        "./img/huaweipics/201706281046317247144.jpg",
        "./img/huaweipics/201706281046315001240.jpg",
        "./img/huaweipics/201706281046321170012.jpg",
        "./img/huaweipics/20170628104632003745.jpg",
        "./img/huaweipics/201706281046325570897.jpg",
        "./img/huaweipics/201706281046329382313.jpg",
        "./img/huaweipics/201706281046329945773.jpg",
        "./img/huaweipics/20170609181621835295.jpg",
        "./img/huaweipics/201706200933291787161.jpg"

    ]
    var produceintorLeft = id("produceintorLeft")
    var smallPic = id("leftPic");
    var mask = id("mask");
    var bigBox = id("bigBox");
    var Bigimg = bigBox.children[0];
    var showNow = id("showNow");

    //给鼠标一个一如小图的事件
    smallPic.onmousemove = function (e) {
        e = e || window.event;
        mask.style.display = "block";
        bigBox.style.display = "block";
        var x = getPage(e).pageX - smallPic.offsetLeft - produceintorLeft.offsetLeft - mask.offsetWidth / 2;
        var y = getPage(e).pageY - smallPic.offsetTop - produceintorLeft.offsetTop - mask.offsetHeight / 2;
        x = x > 0 ? x : 0;
        x = x < 250 ? x : 250;

        y = y > 0 ? y : 0;
        y = y < 263 ? y : 263;

        //console.log(x);
        mask.style.left = x + "px";
        mask.style.top = y + "px";

        var X = -Bigimg.offsetWidth / smallPic.offsetWidth * x;
        var Y = -Bigimg.offsetHeight / smallPic.offsetHeight * y;
        Bigimg.style.left = X + "px";
        Bigimg.style.top = Y + "px";
    }

    // 鼠标一出事件
    smallPic.onmouseout = function () {
        mask.style.display = "none";
        bigBox.style.display = "none";
    }


    //给小图片一个移入事件
    //获取元素
    var smallNow=id("smallNow")
    var ullissmallpic = id("produceintor");
    var lissmallpic = ullissmallpic.children;
    for (var i = 0; i < lissmallpic.length; i++) {
        lissmallpic[i].index = i;
        lissmallpic[i].onclick = function () {
            showNow.src = src1[this.index];
            smallNow.src = src1[this.index];
        }
    }
    //手机颜色召唤大图显示开始
    var colorPic=id("colorPic");
    var colorLis=colorPic.children;//右边小图
    var produceintor=id("produceintor");//左边小图
    var leftImg=[];//声明一个变量装左边小图的img，为了后面便利路径
    var liss=produceintor.children;
    for(var i=0;i<produceintor.children.length;i++){
        leftImg[leftImg.length]=liss[i].children[0].children[0];
    }
   for(var i=0;i<colorLis.length;i++){
        colorLis[i].index=i;//给小图一个参数
        colorLis[i].onclick=function(){
            showNow.src = src1[this.index];//展示的主图
            for(var i=0;i<liss.length;i++){
                leftImg[i].src= src2[this.index][i];//改变左下角的小图
            }
        }
    }
    //手机颜色召唤大图显示结束
    //二维码显示
    //获取元素
    var code=id("code");
    var codePic=code.children[1];
    code.onmouseover=function(){
        codePic.style.display="block";
        codePic.style.position="absolute";
        codePic.style.top="15px"
        codePic.style.right="15px"

    };
    code.onmouseout=function(){
        codePic.style.display="none"
    };
    //召唤出优惠信息栏开始
    //获取变量
    var cheaperintor=id("cheaperintor");
    var moneyCheaper=document.getElementsByClassName("money-cheaper");
    for(var i=0;i<moneyCheaper.length;i++){
        moneyCheaper[i].onclick=function(){
            console.log("jjgg");
            chearintor.style.display="block";
        }
    }
    //召唤出优惠信息栏结束

    //关闭优惠信息栏开始
    //获取元素
    var chearintor=id("chearintor");
    var redbtn=id("red");
    var graybtn=id("gray");
    //console.log(redbtn);
    var grayInput=id("gray");
    redbtn.onclick=function(){
        chearintor.style.display="none";
        //alert("逗你玩")
    }
    graybtn.onclick=function(){
        chearintor.style.display="none";
    }
    //关闭优惠信息栏结束

    //选择信息总结开始
    var toall=id("toall");
    var oneTxt=id("oneTxt");
    var volume1=id("volume1");
    var volume2=id("volume2");
    var biaopei=id("biaopei");
    oneTxt.style.borderColor="red";
    biaopei.style.borderColor="red";
    volume1.style.borderColor="red";
    volume1.onclick=function(){
        volume1.style.borderColor="red";
        volume2.style.borderColor="gray";
        toall.innerHTML=oneTxt.innerHTML+"/"+volume1.innerHTML+"/"+biaopei.innerHTML;
    }
    volume2.onclick=function(){
        volume1.style.borderColor="gray"
        volume2.style.borderColor="red";
        toall.innerHTML=oneTxt.innerHTML+"/"+volume2.innerHTML+"/"+biaopei.innerHTML;
    }

    //选择信息总结结束

    //服务下拉框开始
    $(function(){
        $('#yanchang').mouseover(function(){
            $('#yanchang1').stop().slideDown();
            console.log($('#yg1').html());
        })
        $('#yanchang').mouseout(function(){
            $('#yanchang1').stop().slideUp();
        });
        $('#yanchang1>li>a').click(function(){

            $('#yanchang').html($(this).html());
        })
    })
    //服务下拉框结束

    //手机数量增加开始
    var phonenember=id("phonenember");
    var minus=id("minus");
    var add=id('add');
    var phonenember1=parseInt(phonenember.innerHTML);
    console.log(phonenember1);
    add.onclick=function(){
        phonenember1 +=1 ;
        phonenember.innerHTML=phonenember1
    }
    minus.onclick=function(){
        phonenember1 -=1 ;
        if(phonenember1>1){
            phonenember.innerHTML=phonenember1
        }else{
            phonenember.innerHTML=1;
        }
    }
    //手机数量增加结束
    //购物车加下单开始








    //购物车加下单结束


    //回顶部
    var ding=id('cup');
    var qietu1=id('qietu1')
    window.onscroll=function(e){
        e =e || window.event;
        console.log(document.body.scrollTop);
        if(document.body.scrollTop >"1200"){
            qietu1.style.display="block";
        }else{
            qietu1.style.display="none";
        }
    }
    qietu1.onclick=function(){
        document.body.scrollTop="0px";
    }


    //tab栏的定位
    //var tablan=id("tablan");
    //window.onscroll=function(e){
    //    e =e || window.event;
    //    console.log(document.body.scrollTop);
    //    if(document.body.scrollTop >"1400"){
    //        tablan.style.position="fixed"
    //    }else{
    //        tablan.style.position="absolute"
    //
    //    }
    //}

    //tab栏切换
    var current=id("current")//详情
    var guigecanshu=id("guigecanshu");//参数
    var qingdan=id("qingdan");//清单
    var pingjia=id("pingjia")//评价
    var shouhou=id("shouhou")//售后
    var changtu=document.getElementsByClassName("produceOne")[0];//长途
    var producebaozhuang=id("producebaozhuang")//包装列表
    var produceCanshu=id('produceCanshu')//参数列表
    var produceTwo=id('produceTwo')//评价列表
    var produceshouhou=id('produceshouhou')//售后列表
   //商品详情
    current.onclick=function(){
        changtu.style.display="block";
        producebaozhuang.style.display="none";
        produceCanshu.style.display="none";
        produceshouhou.style.display="none";
        guigecanshu.style.borderTop="none";
        current.style.borderTop="2px red solid";
        qingdan.style.borderTop="none";
        pingjia.style.borderTop="none";
        shouhou.style.borderTop="none";

    }

    //参数
    guigecanshu.onclick=function(){
        changtu.style.display="none";
        produceCanshu.style.display="block";
        producebaozhuang.style.display="none";
        produceCanshu.style.display="block";
        produceshouhou.style.display="none";
        guigecanshu.style.borderTop="2px red solid";
        qingdan.style.borderTop="none";
        pingjia.style.borderTop="none";
        shouhou.style.borderTop="none";
        current.style.borderTop="none";

    }
    //清单
    qingdan.onclick=function(){
        changtu.style.display="none";
        produceCanshu.style.display="none";
        producebaozhuang.style.display="block";
        qingdan.style.borderTop="2px red solid";
        produceshouhou.style.display="none";
        guigecanshu.style.borderTop="none";
        pingjia.style.borderTop="none";
        shouhou.style.borderTop="none";
        current.style.borderTop="none";

    }
    //用户评价
    pingjia.onclick=function(){
        changtu.style.display="none";
        producebaozhuang.style.display="none";
        produceCanshu.style.display="none";
        produceshouhou.style.display="none";
        guigecanshu.style.borderTop="none";
        qingdan.style.borderTop="none";
        shouhou.style.borderTop="none";
        pingjia.style.borderTop="2px red solid";
        current.style.borderTop="none";

    }
    //售后
    shouhou.onclick=function(){
        changtu.style.display="none";
        producebaozhuang.style.display="none";
        produceCanshu.style.display="none";
        produceshouhou.style.display="block";
        guigecanshu.style.borderTop="none";
        qingdan.style.borderTop="none";
        pingjia.style.borderTop="none"
        shouhou.style.borderTop="2px red solid";
        current.style.borderTop="none";

    }






    //插入长长的图片
    $(function(){
        for(var i=0;i< src3.length;i++){
            var $pic=$('#longpic1').clone(true);
            $pic.children().eq(0).attr('src',src3[i])
            $('#longpic').append($pic);
        }
    })

}


//jQuary样式
//$(function(){
//
//})

