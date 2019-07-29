$(document).ready(function(){

    getScrollTop();
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
        })
        $('.nav span a').css({color:'rgb(180,180,180)'});
        $('.nav_end').css({'margin-right': '50px'});
    }
    $(window).on('scroll',function(event){
       console.log(event.currentTarget.pageYOffset);
       let scrollTop = event.currentTarget.pageYOffset;
       if(scrollTop >= 100){

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
       }
       if(scrollTop < 100){
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

       }
    });

    var height = getClientHeight();
    $('.introduce_body').css({height: height+'px'});
    // $('.index').css({height:height+'px'});
    // console.log(height,'height');
    //切换图片下标
    var caseIndex = 0;
    var timePic = null;
    var mySwiper = new Swiper ('.swiper-container', {
        // direction: 'vertical', // 垂直切换选项
        direction: 'horizontal', // 水平切换选项
        loop: true, // 循环模式选项

        // 分页器
        pagination: {
            el: '.swiper-pagination',
        },

        // 前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: true,
        delay: 3000,
        speed: 800,

        // 如果需要滚动条
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    });
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
    console.log(123);
    timePic = setInterval(function(){
        $(".case_right").click();
        console.log(123);
    },2000);


    //点击图片切换
    $(".case_right").click(function(){
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
    });

    //锚点添加动画
    $(".label").bind("click touch",function(){
        //根据a标签的href转换为id选择器，获取id元素所处的位置，并高度减50px（这里根据需要自由设置）
        $('html,body').animate({scrollTop: ($($(this).attr('href')).offset().top -50 )},500);
    });

    $('.nav li').click(function(event){
        $('.nav li').removeClass('active');
        $(event.target.parentElement).addClass('active');
        console.log(123);
    });

    $('#searchOrder').click(function(){
        let phone = $('#tel_input').val();
        if(phone == ''){
            alert('手机号码不能为空!');
        }else if(!(/^1[3456789]\d{9}$/.test(phone))){
            alert('请输入正确的手机号码');
        }else{
            window.open('../order/order.html?tel='+$('#tel_input').val());
        }
    })

    $('.toOnlineOrder').click(function(event){

        console.log(event.currentTarget.dataset.id,'123123');
        window.open('../onlineOrder/onlineOrder.html?id='+event.currentTarget.dataset.id);
    });

    //为bootstrap导航栏添加鼠标移动事件
    $(".dropdown").mouseover(function () {
        $(this).addClass("open");
    });

    $(".dropdown").mouseleave(function(){
        $(this).removeClass("open");
    })

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
        }
    }

});
