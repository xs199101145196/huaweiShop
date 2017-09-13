
window.onload=function(){

    var xiala=document.getElementsByClassName("xiala");
    var topNav_right=document.getElementsByClassName("topNav_right");
    var lis=topNav_right.children[0].children;
    var box=  document.getElementById("box");
    var screen=box.children[0];
    var ul=screen.children[0];
    var ol=screen.children[1];

    //给topNav_right鼠标移入事件
    lis.onmouseover=function(){
        xiala.style.display="block";
    }
    //根据ul孩子数创建li,给ol添加li,给li添加index属性并赋予属性值
    for(var i=0;i<lis.length;i++){
        var li=document.createElement("li");
        li.setAttribute("index",i);
        ol.appendChild(li);
     }
    //给第一个li设置默认样式
    var olLis=ol.children;
    olLis[0].setAttribute("class","current");
    //给ol中的li注册鼠标移入事件
    for(var i=0;i<olLis.length;i++){
    olLis[i].onmouseover=function(){
    //    遍历所有li移除样式
        for(var j=0;j<olLis.length;j++){
        olLis[j].removeAttribute("class","current");
         }
        //只给当前li设置样式
        this.setAttribute("class","current");

    }
     }


    function setText(obj, text) {
        if (obj.innerText === undefined) {
            obj.textContent = text;
        } else {
            obj.innerText = text;
        }
    }

    function animate(obj, target) {
        clearInterval(obj.timerId);
        obj.timerId = setInterval(function () {
            var leader = obj.offsetLeft;
            var step = (target - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            obj.style.left = leader + "px";
            if (leader == target) {
                clearInterval(obj.timerId);
            }
        }, 20);
    }
}