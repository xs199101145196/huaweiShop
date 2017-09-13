//1.给输入框设置失去焦点事件
$('#phoneinp').blur(function () {
    //2.失去焦点时，获取输入框的value值
    var num = $(this).val();
    //3.用正则表达式做判断，如果不符合需求，就弹出提示框
    if (num != "") {
        if (/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(num) == false) {
            $('#testphone').css('display', 'inline-block');
            // console.log('手机号不正确')
        } else {
            $('#testphone').css('display', 'none');
        }
    } else {
        $('#testphone').css('display', 'none');
    }
})

//1.给输入框设置失去焦点事件
$('#emailadress').blur(function () {
    //2.失去焦点时，获取输入框的value值
    var num = $(this).val();
    //3.用正则表达式做判断，如果不符合需求，就弹出提示框
    if (num != "") {
        if (/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(num) == false) {
            $('#testmail').css('display', 'inline-block');
            // console.log('手机号不正确')
        } else {
            $('#testmail').css('display', 'none');
        }
    } else {
        $('#testmail').css('display', 'none');
    }
})
