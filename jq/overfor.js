/* 
* @Author: anchen
* @Date:   2016-01-11 00:07:07
* @Last Modified by:   Marte
* @Last Modified time: 2016-07-19 20:39:10
*/

$(document).ready(function(){
    var juli=document.querySelector(".littlepic").offsetTop;
    // console.log(juli+"¸ß¶È");
    $(window).scroll(function(event) {
        // console.log($(window).scrollTop());
        if($(window).scrollTop()>=1700){
            $('.littlepic').css({
                'position':'fixed',
                'top':-280,
                'right':($(window).width()-1026)/2
            });
        }
        else{
            if($(window).scrollTop()>juli){
                $('.littlepic').css({
                    'position':'fixed',
                    'top':0,
                    'right':($(window).width()-1026)/2
                });
            }
            else{
                $('.littlepic').css('position','static');
            }
        }

    });

});
