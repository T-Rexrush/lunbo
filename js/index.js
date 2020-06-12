$(function(){
    var index=0;
    $(".next").click(function(){
        index++;
        if(index>4){
            index=0;
        }
        change(index);
    })
    $(".prev").click(function(){
        index--;
        if(index<0){
            index=4;
        }
        change(index);
    })
    $(".buttons span").click(function(){
        index=$(this).index();
        change(index);
    })
    function change(index){
        $(".box img").eq(index).fadeIn(300).siblings().fadeOut(300);
        $(".buttons span").eq(index).addClass("selected").siblings().removeClass("selected");
    }
})