/* 
 * @Author: anchen
 * @Date:   2016-01-11 00:07:07
 * @Last Modified by:   Marte
 * @Last Modified time: 2016-07-19 20:44:12
 */
$(document).ready(function() {
    var juli = $('.litpic').offset().top + 132;
    $(window).scroll(function(event) {
        // console.log($(window).scrollTop());
        if ($(window).scrollTop() > 8500) {
            $('.littlepic').css({
                'position': 'fixed',
                'top': -280,
                'right': ($(window).width() - 1026) / 2
            });
        } else {
            if ($(window).scrollTop() > juli) {
                $('.litpic').css({
                    'position': 'fixed',
                    'top': 0,
                    'right': ($(window).width() - 1026) / 2
                });
                $('.littlepic').css('margin-top', 0);
            } else {
                $('.litpic').css('position', 'static');
                
                $('.littlepic').css('margin-top', 132);
            }
        }
    });
});