var a,b;
$(function(){
		$('li.dropdown').mouseover(function() {   

		     $(this).addClass('open');    }).mouseout(function() {        $(this).removeClass('open'); 
		     
		                                     });
		$('.carousel').carousel({
			interval : 3000
		})
		$('.a3_1').height('100px');
		$('.a5-1').parent().mouseover(function(){
			$(this).children(".a5-1").show();
		})
		$('.a5-1').parent().mouseout(function(){
			$(this).children(".a5-1").hide();
		})
		a=$('.dingwei')[0];
		b=350;
	})
	window.onscroll=function(){
	a.style.top=b+e()+'px';
	if(a.style.top=="350px"){
		$('.dingwei').hide();
	}else{
		$('.dingwei').show();
	}
}
function e(){
		var y;
		if(window.pageYOffset){
			y=window.pageYOffset;
		}else if(document.body){
			y=document.body.scrollTop;
		}
		return y;

}
