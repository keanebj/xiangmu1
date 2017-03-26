/* 
* @Author: anchen
* @Date:   2016-01-10 10:21:57
* @Last Modified by:   anchen
* @Last Modified time: 2016-01-12 18:36:46
*/

$(document).ready(function(){

/*****************************图标下标滑出效果**********************************************/
    ;(function(){
    $('.pic01 ul li,.pic02 ul li').mouseenter(function(event) {
        var self=$(this);
        $(this).children('p.xiabiao').stop().animate({'bottom':0}, 600).children('i.slidtit').delay(500).stop().animate({'left':20}, 600);
    }).mouseleave(function(event) {
         $(this).children('p.xiabiao').stop().animate({'bottom':-100}, 600).children('i.slidtit').delay(500).animate({'left':-250}, 600);;
    });  
})();

/*******************************************banner下角效果********************************/
   ;(function(){
        var num=1;
        $('.banner ol li').click(function(event) {
            num++;
            $(this).addClass('current').siblings().removeClass('current');
            $('.banner ul li').eq($(this).index()).css('z-index',num).hide().fadeIn(600);
        });
   })();

/*******************************************banner轮播效果********************************/
;(function(){
    var num=1;
    var timer;
    var liindex=0;
    function autoPlay(){
             num++;
             liindex++;
             if(liindex>1){
                liindex=0;
             }
             $('.banner ul li').eq(liindex).animate({'z-index':num}, 200).hide().fadeIn(600);
             $('.banner ol li').eq(liindex).addClass('current').siblings().removeClass('current');
    }
    timer=setInterval(autoPlay, 2000);
    $('.banner').mouseenter(function(event) {
        clearInterval(timer);
        $('.banner .jiantouleft,.banner .jiantouright').css('display','block').hide().fadeIn(600);
    }).mouseleave(function(event) {
        timer=setInterval(autoPlay, 2000);
        $('.banner .jiantouleft,.banner .jiantouright').css('display','none').show().fadeOut(600);
    });
    $('.banner .jiantouleft,.banner .jiantouright').click(function(event) {
        autoPlay();
    });
})();



/*******************************************主题一效果********************************/
  

        
    ;(function(){
                 var i=0;
                var j=1;
                var k=2;
                var z=3;
                var num=0;
                var timer;
            //轮播
            function autoPlay(){
             i++;j++;k++;z++;
             num++;
             if(num>3){num=0}
             if(i>3){i=0};
             if(j>3){j=0};
             if(k>3){k=0};
             if(z>3){z=0};
            $('.tit-banner01 ul li').eq(z).animate({'left':0,'top':23,'height': 224,'width':530,'z-index':3}, 500).children().css({'width': 530,'height':224,});
            $('.tit-banner01 ul li').eq(j).animate({'left':496,'top':23,'height':224,'width':530,'z-index':3}, 500).children().css({'width': 530,'height':224,});
            $('.tit-banner01 ul li').eq(i).css('z-index','4').animate({'left':193,'top':0,'height': 270,'width': 640}, 500).children().css({'width': 640,'height':270,});
            $('.tit-banner01 ul li').eq(k).animate({'left':-25,'top':90,'height':100,'width': 440,'z-index':2}, 500).children().css({'width': 440,'height':100,});
            $('.tit-banner01 ol li').eq(num).addClass('current').siblings().removeClass('current');
            }
            timer=setInterval(autoPlay, 1000);
            //鼠标移上事件
            $('.tit-banner01').mouseenter(function(event) {
                clearInterval(timer);
            }).mouseleave(function(event) {
                timer=setInterval(autoPlay, 1000);
            });                     
    })();  
    ;(function(){
                var i=0;
                var j=1;
                var k=2;
                var z=3;
                var num=0;
                var timer;
           function autoPlay(){
             i++;j++;k++;z++;
             num++;
             if(num>3){num=0}
             if(i>3){i=0};
             if(j>3){j=0};
             if(k>3){k=0};
             if(z>3){z=0};
            $('.tit-banner02 ul li').eq(z).animate({'left':0,'top':23,'height': 224,'width':530,'z-index':3}, 500).children().css({'width': 530,'height':224,});
            $('.tit-banner02 ul li').eq(j).animate({'left':496,'top':23,'height':224,'width':530,'z-index':3}, 500).children().css({'width': 530,'height':224,});
            $('.tit-banner02 ul li').eq(i).css('z-index','4').animate({'left':193,'top':0,'height': 270,'width': 640}, 500).children().css({'width': 640,'height':270,});
            $('.tit-banner02 ul li').eq(k).animate({'left':-25,'top':90,'height':100,'width': 440,'z-index':2}, 500).children().css({'width': 440,'height':100,});
            $('.tit-banner02 ol li').eq(num).addClass('current').siblings().removeClass('current');
            }
            timer=setInterval(autoPlay, 1000);
            //鼠标移上事件
            $('.tit-banner02').mouseenter(function(event) {
                clearInterval(timer);
            }).mouseleave(function(event) {
                timer=setInterval(autoPlay, 1000);
            });                     
    })();

    //图片放大效果
    ;(function(){
        $('.big').mouseenter(function(event) {
            $(this).stop().animate({'width':504,'height':727,'margin-left':-84,'margin-top':-121}, 3000)
        }).mouseleave(function(event) {
            $(this).stop().animate({'width':336,'height':485,'margin-left':0,'margin-top':0}, 3000)
        });
        $('.small').mouseenter(function(event) {
            $(this).stop().animate({'width':504,'height':357,'margin-left':-84,'margin-top':-59}, 3000)
        }).mouseleave(function(event) {
            $(this).stop().animate({'width':336,'height':238,'margin-left':0,'margin-top':0}, 3000)
        });
    })()


});