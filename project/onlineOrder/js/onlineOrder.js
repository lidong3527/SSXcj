$(document).ready(function () {
    console.log(123);
    $('#submitOrder').click(function () {
        console.log(123123123123);
        let str = '';
        if ($('.userName').val() == '' || $('.userName').val().trim() == '') {
            str = '收获人姓名不能为空';
        } else if ($('.phone').val() == '' || $('.phone').val().trim() == '') {
            str = '收获人电话不能为空';
        } else if ($('.input').val() == '' || $('.input').val().trim() == '') {
            str = '收获人地址不能为空';
        } else if ($('.address').val() == '' || $('.address').val().trim() == '') {
            str = '收获人详细地址不能为空';
        } else if ($('.num-input').val() == '' || $('.num-input').val().trim() == '') {
            str = '购买数量不能为空';
        }
        console.log($('.userName').val(), 'userName');
        console.log($('.phone').val(), 'phone');
        console.log($('.input').val(), 'input');
        console.log($('.address').val(), 'address');
        console.log($('.num-input').val(), 'num-input');
        if (str !== '') {
            layer.alert(str);
        }else{
            layer.alert('购买成功');
        }
    })
})