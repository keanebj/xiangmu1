// JavaScript Document
$(function(){
		;(function(){
			//内容页左侧栏js动画
		    $('.banner .baise .baise_l .li01').click(function(){
			$(this).siblings().stop().slideToggle(200);
			if($(this).siblings().html() != ''){
				$(this).toggleClass('li02');
				$(this).parent().siblings().children('.secondmenu').slideUp(200);
				$(this).parent().siblings().children().removeClass('li02');
			}else{
				$(this).addClass('current').parent().siblings().children('.li01').removeClass('current');
			   
				}	
		})
			})();
			
			
			;(function(){
					//首页banner轮播图
         				var myindex = 0;
			$('.banner ol li').click(function(){
				
				if(!$(this).hasClass('current')){
					myindex++;
					$(this).addClass('current').siblings().removeClass('current');
					$('.banner ul li').eq($(this).index()).css({'left':'1440px','z-index':myindex}).stop().animate({'left':0},500)
					num = $(this).index();
				}	
			})
			
			var timer;
			var num = 7;
			function autoPlay(){
					num++;
					myindex++;
					if(num>7){
						num=0;
						}
					$('.banner ul li').eq(num).css({'left':'1440px','z-index':myindex}).animate({'left':0},1000)
					$('.banner ol li').eq(num).addClass('current').siblings().removeClass('current');
					
				}
			timer = setInterval(autoPlay,3000)
			
			//banner鼠标移上与移出事件
			$('.banner').mouseenter(function(){
					clearInterval(timer);
				}).mouseleave(function(){
					timer = setInterval(autoPlay,3500);
					})
				})();
				
				
				
			;(function(){
				
				//banner下面的小轮播图
					var timer02;
					var num02 = 0;
					function autoPaly02(){
						num02-=5;
						if(num02<-1085){
							num02=0;
							}
							$('.product ul').css('left',num02)
						}
						timer02 = setInterval(autoPaly02,50)
						
					
			//鼠标移上每一个li,使他停止
		        	$('.product ul li').mouseenter(function(){
					clearInterval(timer02);
					$(this).siblings().stop().fadeTo(200,0.5);
				}).mouseleave(function(){
					timer02 = setInterval(autoPaly02,30);	
					$(this).siblings().stop().fadeTo(200,1);	
			})
				$('.rightpic').click(function(){
						autoPaly02();
					})
				
					})();
			
			;(function(){
							
					//列表页轮播图
					var listindex = 0;
					$('.listbanner ol li').click(function(){
							if(!$(this).hasClass('current')){
							listindex++;
							$(this).addClass('current').siblings().removeClass('current');
							$('.listbanner ul li').eq($(this).index()).css({'left':1440,'z-index':listindex}).stop().animate({'left':0},300);
							num03 = $(this).index();
						}
					})
					
					var timer03;
					var num03 = 0;
					function listplay(){
							num03++;
							listindex++;
							if(num03>3){
								num03=0;
								}
								$('.listbanner ol li').eq(num03).addClass('current').siblings().removeClass('current');
								$('.listbanner ul li').eq(num03).css({'left':1440,'z-index':listindex}).animate({'left':0},1000)
						}
					timer03 = setInterval(listplay,3000)
					
					//listbanner鼠标移上与移出
					$('.listbanner').mouseenter(function(){
							clearInterval(timer03);	
						}).mouseleave(function(){
							timer03 = setInterval(listplay,3000);
							})
						})();
					//鼠标移上导航动画 index导航
					;(function(){
						$('.header .nav .navinul .ulinli').mouseenter(function(){
							$(this).children('.downlist').stop().slideDown(300);
						}).mouseleave(function(){
							$(this).children('.downlist').stop().slideUp(300);
							})
					
						})();
					
					
					 //搜索按钮清空文本框index 导航搜索框
					 ;(function(){
						  $('span').click(function(){
						 	$(this).siblings('input').val('');
						 })
						 })();
						 
						 //news上下轮播；
						;(function(){
							var timer;//定时容器
							var num = 0;//变量
				
							function autoPlay(){
								num++;
								if(num>1){
									num=0;
								}
								$('.ullist').stop().animate({'top':-105*num}, 600)//定时切换图片
								
							};
							timer = setInterval(autoPlay,2000)
				
							//鼠标移上还有移出事件
							$('.ullist').mouseenter(function(event) {
								clearInterval(timer);
							}).mouseleave(function(event) {
								timer = setInterval(autoPlay,1500)
							});
							})();
							
							//产品图放大
							var myZindex=0;
							$('.all ul li img').mouseenter(function(){
								myZindex++;
								 $(this).css('z-index',myZindex).stop().animate({'width':435,'height':220,'margin-left':-36,'margin-top':-18}, 300)
    }).mouseleave(function(event) {
        $(this).stop().animate({'width':362,'height':184,'margin-left':0,'margin-top':0}, 300)
								})
					
					//404
					$('.top .tips ul li:eq(2),.top .tips ul li:eq(4)').click(function(){
							$('.dark').fadeTo(400,0.4);
							$('.golble,.golble span').fadeIn(400);
						})
						$('.golble span').click(function(){
							$('.dark').fadeOut(400);
							$('.golble').fadeOut(400);
							})
						
	});
