$(function(){
$("#img>div:odd").css('backgroundColor','#112');
$("#img>div:even").css('backgroundColor','#EEE');
$('#img>div').mouseover(function(){
	this.css("-webkit-filter",'opacity(50%)');
})
})