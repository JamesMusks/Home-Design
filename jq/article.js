/* 
 * @Author: anchen
 * @Date:   2016-01-11 19:47:49
 * @Last Modified by:   Marte
 * @Last Modified time: 2016-07-19 17:28:22
 */
$(document).ready(function() {
    var check = false;
    $('.articlebigpic').mouseenter(function(event) {
        check = true;
    }).mouseleave(function(event) {
        check = false;
    });
    $(window).mousemove(function(event) {
        if (check == true) {
            $('.zhuti span').show(400);
            var span_left = event.pageX - $('.zhuti').offset().left;
            var span_top = event.pageY - $('.zhuti').offset().top;
            if (span_left > $('.zhuti').width() - 100) {
                span_left = $('.zhuti').width() - 100;
            }
            if (span_top > $('.zhuti').height() - 100) {
                span_top = $('.zhuti').height() - 100;
            }
            $('.zhuti span').css({
                'left': span_left,
                'top': span_top
            })
        }
    });
});