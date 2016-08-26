/* 
 * @Author: anchen
 * @Date:   2016-01-10 10:21:57
 * @Last Modified by:   Marte
 * @Last Modified time: 2016-07-19 19:16:32
 */
$(document).ready(function() {
    /*****************************图标下标滑出效果**********************************************/
    (function() {
        $('.pic01 ul li,.pic02 ul li').mouseenter(function(event) {
            var self = $(this);
            $(this).children('p.xiabiao').stop().animate({
                'bottom': 0
            }, 600).children('i.slidtit').delay(500).stop().animate({
                'left': 20
            }, 600);
        }).mouseleave(function(event) {
            $(this).children('p.xiabiao').stop().animate({
                'bottom': -100
            }, 600).children('i.slidtit').delay(500).animate({
                'left': -250
            }, 600);;
        });
    })();
    //点击下滑
    $(".col").click(function() {
        $(".slideDown").toggle(600);
    });
    /*******************************************banner下角效果********************************/
    (function() {
        var num = 1;
        $('.banner ol li').click(function(event) {
            num++;
            $(this).addClass('current').siblings().removeClass('current');
            $('.banner ul li').eq($(this).index()).css('z-index', num).hide().fadeIn(600);
        });
    })();
    /*******************************************banner轮播效果********************************/
    ;
    (function() {
        var num = 1;
        var timer;
        var liindex = 0;

        function autoPlay() {
            num++;
            liindex++;
            if (liindex > 1) {
                liindex = 0;
            }
            $('.banner ul li').eq(liindex).animate({
                'z-index': num
            }, 200).hide().fadeIn(600);
            $('.banner ol li').eq(liindex).addClass('current').siblings().removeClass('current');
        }
        timer = setInterval(autoPlay(), 2000);
        $('.banner').mouseenter(function(event) {
            clearInterval(timer);
            $(".jiantouleft").fadeIn(600);
            $(".jiantouright").fadeIn(600);
        });
        $('.banner').mouseleave(function(event) {
            timer = setInterval(autoPlay, 2000);
            $(".jiantouleft").fadeOut(1000);
            $(".jiantouright").fadeOut(1000);
        });
        $('.banner .jiantouleft,.banner .jiantouright').click(function(event) {
            autoPlay();
        });
    })();
    /*******************************************主题一效果********************************/
    (function() {
        var num = 0;
        var config = [{
            "width": 640,
            "height": 270,
            "left": 193,
            "opacity": 1,
            "zIndex": 3,
            "top": 0
        }, {
            "width": 530,
            "height": 224,
            "left": 0,
            "opacity": 1,
            "zIndex": 2,
            'top': 23
        }, {
            "width": 300,
            "height": 100,
            "left": -530,
            "opacity": 0,
            "zIndex": 0,
            "top": 85
        }, {
            "width": 530,
            "height": 224,
            "left": 496,
            "opacity": 1,
            "zIndex": 2,
            "top": 23
        }, ]
        var lis = $(".tit-banner01 ul>li");

        function assign() {
            for (var i = 0; i < lis.length; i++) {
                animate(lis[i], config[i]);
            }
        }
        assign();
        //开启定时器
        var myTimer=setInterval(function(){
            config.unshift(config.pop());
            if(num<=0){
                num=4;
                $('.tit-banner01 ol li').eq(num).addClass('current').siblings().removeClass('current');
            }
            num--;
            console.log(num);
            assign();
            $('.tit-banner01 ol li').eq(num).addClass('current').siblings().removeClass('current');
        },2000);


        //鼠标右击
        $(".jianight").click(function() {
            if (num >= 3) {
                num = -1;
                $('.tit-banner01 ol li').eq(num).addClass('current').siblings().removeClass('current');
            }
            num++;
            console.log(num);
            $('.tit-banner01 ol li').eq(num).addClass('current').siblings().removeClass('current');
            config.push(config.shift());
            assign();
        });
        //左按钮点击事件
        $(".jianleft").click(function() {
                if (num < 0) {
                    num = 4;
                    $('.tit-banner01 ol li').eq(num).addClass('current').siblings().removeClass('current');
                }
                num--;
                $('.tit-banner01 ol li').eq(num).addClass('current').siblings().removeClass('current');
                config.unshift(config.pop());
                assign();
            });


            //粒子点击事件
        var olLis = $('.tit-banner01 ol li');
        console.log(olLis);
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].onclick = function() {
                var index = $(this).index();
                $('.tit-banner01 ol li').eq(index).addClass('current').siblings().removeClass('current');
                for (var j = 0; j < olLis.length; j++) {
                    animate(lis[j], config[j]);
                }
                animate(lis[0], config[index]);
                animate(lis[index], config[0]);
            }
        }
        //动画函数开始
        function animate(obj, json, fn) {
                clearInterval(obj.timerId);
                obj.timerId = setInterval(function() {
                    //            var leader = obj.offsetLeft;//先要获得原来的对象的位置
                    var flag = true; // 假设所有的属性都达到了目标值
                    for (var key in json) {
                        if (key == "opacity") { // 判断透明度的
                            // key就是相当于是obj的attr  json[key]就相当于之前的target
                            var leader = parseInt(getStyle(obj, key) * 100) || 0; // 先要获得原来对象的原属性的值
                            // 将当前取到的透明度的值扩大100倍，方便我们的运算  0.2   0.3   0.25
                            var target = json[key] * 100; // 将目标值也要扩大100倍
                            var step = (target - leader) / 10;
                            step = step > 0 ? Math.ceil(step) : Math.floor(step);
                            // 原因：
                            // 1.offsetLeft只会获得整数，不会获得小数，所以设置步长 的时候，让步长 也变成 整数
                            // 2. 步长有正数，也有负数，这个时候取一个中间点进行判断，是向上取整，还是向下取整数
                            //            console.log(step);
                            leader = leader + step;
                            obj.style[key] = leader / 100; // 改成对应的属性
                        } else if (key == "zIndex") {
                            var leader = parseInt(getStyle(obj, key)) || 0;
                            var target = json[key]; // 将目标值也要扩大100倍
                            var step = (target - leader) / 10;
                            step = step > 0 ? Math.ceil(step) : Math.floor(step);
                            obj.style[key] = target; // 改成对应的属性
                        } else {
                            // key就是相当于是obj的attr  json[key]就相当于之前的target
                            var leader = parseInt(getStyle(obj, key)) || 0; // 先要获得原来对象的原属性的值
                            var target = json[key];
                            var step = (target - leader) / 10;
                            step = step > 0 ? Math.ceil(step) : Math.floor(step);
                            // 原因：
                            // 1.offsetLeft只会获得整数，不会获得小数，所以设置步长 的时候，让步长 也变成 整数
                            // 2. 步长有正数，也有负数，这个时候取一个中间点进行判断，是向上取整，还是向下取整数
                            //            console.log(step);
                            leader = leader + step;
                            obj.style[key] = leader + 'px'; // 改成对应的属性
                        }
                        if (leader != target) { //所有的属性都到达了指定的目标值的时候，才能清除定时器
                            flag = false; //有一个不满足条件，就让当前的标识变为false
                        }
                    }
                    if (flag) { //所有的都满足条件的情况下，才清除定时器
                        clearInterval(obj.timerId);
                        if (fn) { // 判断参数中是否有回调函数，如果有，则执行
                            fn();
                        }
                    }
                }, 15)
            }
            //获取样式
        function getStyle(obj, attr) {
            // 能力检测
            if (obj && obj.currentStyle) { // 当前传进来的是一个真实的对象，而且此对象支持currentStyle
                return obj.currentStyle[attr];
            } else {
                return getComputedStyle(obj, null)[attr];
            }
        };
        //鼠标移上事件
        $('.tit-banner01').mouseenter(function(event) {
            $(".jianleft").show(600);
            $(".jianight").show(600);
            clearInterval(myTimer);
        })
        //鼠标一开事件
        $('.tit-banner01').mouseleave(function(event) {
            $(".jianleft").fadeOut(600);
            $(".jianight").fadeOut(600);
        myTimer=setInterval(function(){
                config.push(config.shift());
                if(num<=0){
                    num=4;
                    $('.tit-banner01 ol li').eq(num).addClass('current').siblings().removeClass('current');
                }
                num--;
                console.log(num);
                assign();
                $('.tit-banner01 ol li').eq(num).addClass('current').siblings().removeClass('current');
            },2000);
        });
    })();


    (function() {
        var i = 0;
        var j = 1;
        var k = 2;
        var z = 3;
        var num = 0;
        var timer;

        function autoPlay() {
            i++;
            j++;
            k++;
            z++;
            num++;
            if (num > 3) {
                num = 0
            }
            if (i > 3) {
                i = 0
            };
            if (j > 3) {
                j = 0
            };
            if (k > 3) {
                k = 0
            };
            if (z > 3) {
                z = 0
            };
            $('.tit-banner02 ul li').eq(z).animate({
                'left': 0,
                'top': 23,
                'height': 224,
                'width': 530,
                'zIndex': 3
            }, 500).children().css({
                'width': 530,
                'height': 224,
            });
            $('.tit-banner02 ul li').eq(j).animate({
                'left': 496,
                'top': 23,
                'height': 224,
                'width': 530,
                'zIndex': 3
            }, 500).children().css({
                'width': 530,
                'height': 224,
            });
            $('.tit-banner02 ul li').eq(i).css('zIndex', '40').animate({
                'left': 193,
                'top': 0,
                'height': 270,
                'width': 640
            }, 500).children().css({
                'width': 640,
                'height': 270,
            });
            $('.tit-banner02 ul li').eq(k).animate({
                'left': -25,
                'top': 90,
                'height': 100,
                'width': 440,
                'zIndex': 2
            }, 500).children().css({
                'width': 440,
                'height': 100,
            });
            $('.tit-banner02 ol li').eq(num).addClass('current').siblings().removeClass('current');
        }
        timer = setInterval(autoPlay, 1000);
        //鼠标移上事件
        $('.tit-banner02').mouseenter(function(event) {
            clearInterval(timer);
        })
        $('.tit-banner02').mouseleave(function(event) {
            timer = setInterval(autoPlay, 1000);
        });
    })();
    var timerId = null;
    var step = 1;
    timerId = setInterval(function() {
        var leader = document.querySelector(".friendLink").offsetLeft;
        leader = step--;
        if (document.querySelector(".friendLink").offsetLeft < -1200) {
            $(".friendLink").css("left", "0px");
            step = .2;
        }
        $(".friendLink").css("left", leader + "px");
    }, 15);
    $(".friendLink").mouseenter(function() {
        clearInterval(timerId);
    });
    $(".friendLink").mouseleave(function() {
        timerId = setInterval(function() {
            var leader = document.querySelector(".friendLink").offsetLeft;
            leader = step--;
            if (document.querySelector(".friendLink").offsetLeft < -1200) {
                $(".friendLink").css("left", "0px");
                step = .2;
            }
            $(".friendLink").css("left", leader + "px");
        }, 15);
    })
});