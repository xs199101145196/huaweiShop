/**
 * Created by Administrator on 2016/10/25.
 */
/**
 * 获得标签对象属性值的函数
 * @param obj
 * @param attr
 * @returns {*}
 */
function animate(obj,json) {
  clearInterval(obj.timerId);
  obj.timerId = setInterval(function () {
    var flag = true;
    for(var key in json) {
      if(key == "opacity") {
        var current = getStyle(obj,key)*100;
        var step = (json[key]*100-current)/5
        step = step>0?Math.ceil(step):Math.floor(step);
        current += step;
        obj.style[key] = current/100;
        if(current/100 != json[key]) {
          flag = false;
        }
      }else if(key == "zIndex"){
        var current = +getStyle(obj,key);
        obj.style[key] = json[key];
        if(current != json[key]) {
          flag = false;
        }
      }else{
        var current = parseInt(getStyle(obj,key));
        var step = (json[key]- current)/10;
        step = step > 0 ? Math.ceil(step): Math.floor(step);
        current += step;
        obj.style[key] = current + "px";
        if(current != json[key]) {
          flag  = false;
        }
      }
    }
    if(flag == true) {
      clearInterval(obj.timerId);
    }
  },50)
}
function getStyle(ele,att) {
  if(ele.currentStyle) {
    return ele.currentStyle[att];
  }else{
    return window.getComputedStyle(ele,null)[att];
  }
}