var floatTop;
var floatObject;
var ab;
var aa;
var b;
window.onload=function(){
	floatObject=$('.b')[0];
   floatTop=200;
}
$(function(){
	aa=$('.b1')[0];
    b=$('.b2')[0];
	ab=200;
	aa.onmouseover=function(){
	   b.style.display="block";
	   aa.style.left=60+"px";
	}
	b.onmouseout=function(){
		b.style.display="none";
		 aa.style.left=0+"px";
	}
	})

window.onscroll=function(){
	floatObject.style.top=floatTop+a()+"px";
	aa.style.top=ab+a()+"px";
	b.style.top=ab+a()+"px";
}
function a(){
	var y;
	if(window.pageYOffset){
		y=window.pageYOffset;
	}else if(document.body){
		y=document.body.scrollTop;
	}
	return y;
}