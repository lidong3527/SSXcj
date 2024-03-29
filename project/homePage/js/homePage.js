
//切换图片下标
var caseIndex = 0;
$(document).ready(function(){

    //初始化页面函数
    initPage();
    maqureeInit();

    //锚点添加动画
    $(".label").bind("click touch",function(){
        //根据a标签的href转换为id选择器，获取id元素所处的位置，并高度减50px（这里根据需要自由设置）
        $('html,body').animate({scrollTop: ($($(this).attr('href')).offset().top)},500);
    });

    $('.nav li').click(function(event){
        $('.nav li').removeClass('active');
        $(event.target.parentElement).addClass('active');
    });

    $('#searchOrder').click(function(){
        searchOrder($('#tel_input').val())
    });

    $('#tel_input').on("keyup",function(event){
        if(event.originalEvent.code === 'Enter'){
            searchOrder($('#tel_input').val())
        }
    });

});

//初始化  滚动事件   设置标签高度
function initPage(){
    getScrollTop();
    $(window).on('scroll',function(event){
        let scrollTop = event.currentTarget.pageYOffset;
        if(scrollTop >= 100){
            $('.span_li').addClass('span_li_hover');
            $('.nav').css({
                position:'fixed',
                top:'50px',
                right:'-12px',
                'justify-content': 'center',
                height:'300px',
                'line-height':'50px',
                background:'#333333',
                'flex-direction':'column',
                width:'110px',
                // transform:'translateY(-50%)'
            });
            $('.nav span a').css({color:'#CC9966'});
            $('.nav_end').css({margin:0});
            $('.dropdown_menu').css({top: '50px'});
        }
        if(scrollTop < 100){
            $('.span_li').removeClass('span_li_hover');
            $('.nav').css({
                'justify-content': 'flex-end',
                height:'100px','line-height':'100px',
                background:'transparent',
                'flex-direction':'row',
                width:'100%',
                transform:'translateY(0)',
                top:0,
                right:0
            })
            $('.nav span a').css({color:'rgb(180,180,180)'});
            $('.nav_end').css({'margin-right': '50px'});
            $('.dropdown_menu').css({top: '65px'});

        }
    });


    //赋值高度
    var height = getClientHeight();
    $('.introduce_body').css({height: height+'px'});
    $('.index').css({height:height+'px'});
    $('.case_box ').css({height: (height- 130)+'px'});
}


//防止滚动监听失效
function getScrollTop(){
    if($(window)[0].pageYOffset >= 100){
        $('.nav').css({
            position:'fixed',
            top:'50px',
            right:'-12px',
            'justify-content': 'center',
            height:'300px',
            'line-height':'50px',
            background:'#333333',
            'flex-direction':'column',
            width:'110px',
            // transform:'translateY(-50%)'
        });
        $('.nav span a').css({color:'#CC9966'});
        $('.nav_end').css({margin:0});
        $('.dropdown_menu').css({top: '50px'});
    }
    if($(window)[0].pageYOffset < 100){
        $('.nav').css({
            'justify-content': 'flex-end',
            height:'100px','line-height':'100px',
            background:'transparent',
            'flex-direction':'row',
            width:'100%',
            transform:'translateY(0)',
            top:0,
            right:0
        });
        $('.nav span a').css({color:'rgb(180,180,180)'});
        $('.nav_end').css({'margin-right': '50px'});
        $('.span_li').removeClass('span_li_hover');
        $('.dropdown_menu').css({top: '65px'});
    }
}


//为bootstrap导航栏添加鼠标移动事件
$(".dropdown").mouseover(function () {
    $(this).addClass("open");
});

$(".dropdown").mouseleave(function(){
    $(this).removeClass("open");
});

//跳转查询订单
function searchOrder(phone){
    if(phone == ''){
        layer.alert('手机号码不能为空', {
            skin: 'layui-layer-lan'
            ,closeBtn: 0
        });
    }else if(!(/^1[3456789]\d{9}$/.test(phone))){
        layer.alert('请输入正确的手机号码', {
            skin: 'layui-layer-lan'
            ,closeBtn: 0
        });
    }else{
        window.open('../order/order.html?tel='+$('#tel_input').val());
    }
}

// 跳转在线订购商品详情页
// $('.toOnlineOrder').click(function(event){
//     window.open('../onlineOrder/onlineOrder.html?id='+event.currentTarget.dataset.id);
// });

//提交加盟代理事件
$('.tel_submit').click(function(){
    var errTip = "";
    errTip = $('.tel_nameInput').val() == ''?'姓名不能为空:':'' || $('.tel_phoneInput').val() == ''?'电话不能为空:':'' || $('.tel_addressInput').val() == ''?'代理区域不能为空:':'';
    if(errTip == ''){
        errTip = isNotChineseChart($('.tel_phoneInput').val())?'提交成功':'手机号码不能为汉字';
    }
    layer.alert(errTip, {
        skin: 'layui-layer-lan'
        ,closeBtn: 0
    });
    //置空
    $('.tel_nameInput').val('');
    $('.tel_phoneInput').val('');
    $('.tel_addressInput').val('');
})


// 跑马灯
function maqureeInit(){
    // 手机号
    var caseArray = [
        {
            name:'李栋',
            address:'陕西省咸阳市',
            tel:'13201433317'
        },
        {
            name:'李栋',
            address:'陕西省咸阳市',
            tel:'13201433317'
        },
        {
            name:'李栋',
            address:'陕西省咸阳市',
            tel:'13201433317'
        },
        {
            name:'李栋',
            address:'陕西省咸阳市',
            tel:'13201433317'
        },
        {
            name:'李栋',
            address:'陕西省咸阳市',
            tel:'13201433317'
        },
        {
            name:'李栋',
            address:'陕西省咸阳市',
            tel:'13201433317'
        },
        {
            name:'李栋',
            address:'陕西省咸阳市',
            tel:'13201433317'
        },
        {
            name:'李栋',
            address:'陕西省咸阳市',
            tel:'13201433317'
        },
        {
            name:'李栋',
            address:'陕西省咸阳市',
            tel:'13201433317'
        },
        {
            name:'李栋',
            address:'陕西省咸阳市',
            tel:'13201433317'
        },
        {
            name:'李栋',
            address:'陕西省咸阳市',
            tel:'13201433317'
        },
        {
            name:'李栋',
            address:'陕西省咸阳市',
            tel:'13201433317'
        },
        {
            name:'李栋',
            address:'陕西省咸阳市',
            tel:'13201433317'
        },
        {
            name:'李栋',
            address:'陕西省咸阳市',
            tel:'13201433317'
        },
        {
            name:'李栋',
            address:'陕西省咸阳市',
            tel:'13201433317'
        },
        {
            name:'李栋',
            address:'陕西省咸阳市',
            tel:'13201433317'
        },
        {
            name:'李栋',
            address:'陕西省咸阳市',
            tel:'13201433317'
        },
    ];

    // 在线订购
    var str = '';
    for(var i = 0; i < caseArray.length;i++){
        str += '<li><span class="case_li">'+caseArray[i].address+'</span><span class="case_li">'+caseArray[i].name+'</span><span class="case_li">'+caseArray[i].tel+'</span></li>';
    }
    $('#container').append(str);
    $('#container').marquee();
    timePic = setInterval(function(){
        checkImage();
    },3000);
}

function checkImage(){
    if(caseIndex == 0){
        $('.case_first').fadeOut(500,function(){
            $('.second_container').fadeIn(500);
        });
        caseIndex++;
    }else if(caseIndex == 1){
        $('.second_container').fadeOut(500,function(){
            $('.third_container').fadeIn(500);
        });
        caseIndex++;
    }else{
        $('.third_container').fadeOut(500,function(){
            $('.case_first').fadeIn(500);
        });
        caseIndex = 0;
    }
}


//反转产品信息
$('.toReverse').click(function(event){
    // $(event.target).parent().css('transform','perspective(1500px) rotateY(180deg)')
    window.open('../detail/detail.html');
});

// 返回产品介绍
$('.toReverse_back').click(function(event){
    $(event.currentTarget).parent().parent().css('transform','perspective(1500px) rotateY(360deg)')
});
