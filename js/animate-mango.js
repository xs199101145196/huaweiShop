//获取页面的scrollTop和页面的scrollLeft 兼容函数
function getScroll(){
    return {
        scrollLeft : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
        scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    };
}


//获取页面的clientWidth和页面的clientHeight 兼容函数
function getClient(){
    return {
        clientWidth : window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth|| 0,
        clientHeight : window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight|| 0
    }
}

//封装一个函数做兼容，获取pageX和pageY的值
function getPage(e){
    e = e || window.event;
    return {
        //如果你的浏览器支持e.pageX，直接获取就好了。
        //如果你的浏览器不支持e.pageX，那就计算出这个值（当前可视区的距离加上滚出去的距离。）
        pageX: e.pageX || e.clientX + document.documentElement.scrollLeft,
        pageY: e.pageY || e.clientY + document.documentElement.scrollTop
    };
}

//根据Id获取元素
function id(id){
    return document.getElementById(id);
}