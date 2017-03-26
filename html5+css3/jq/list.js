/* 
* @Author: anchen
* @Date:   2016-01-11 00:07:07
* @Last Modified by:   anchen
* @Last Modified time: 2016-01-12 14:34:08
*/

$(document).ready(function(){
    var juli=$('.litpic').offset().top+132;
    $(window).scroll(function(event) {
        if($(window).scrollTop()>juli)
        {   
            $('.litpic').css({'position':'fixed','top':0,'right':($(window).width()-1026)/2});
            $('.littlepic').css('margin-top',0);  
        }
        else{
            $('.litpic').css('position','static');
            $('.littlepic').css('margin-top',132);    
        }

    });
});
