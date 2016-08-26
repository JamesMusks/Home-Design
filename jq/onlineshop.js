/**
 * Created by JJ on 2016/7/18.
 */
$(function () {
    var number1= $(".banner").find(".num1").html();
    setInterval(function () {
    number1=Number(number1)+7;
        $(".banner").find(".num1").html(number1)
},300);


    var number2= $(".banner").find(".num2").html();
    setInterval(function () {
        number2=Number(number2)+13;
        $(".banner").find(".num2").html(number2)
    },500);


    var number3= $(".banner").find(".num3").html();
    setInterval(function () {
        number3=Number(number3)+1;
        $(".banner").find(".num3").html(number3)
    },500);


    var number4= $(".banner").find(".num4").html();
    setInterval(function () {
        number4=Number(number4)+1;
        $(".banner").find(".num4").html(number4)
    },500);
})