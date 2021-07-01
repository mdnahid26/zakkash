$(function(){
    'use stirct';
    $(window).on("scroll",function(){
        if($(window).scrollTop()>0){
            $('.navbar').addClass('stickyNav')
        }else{
            $('.navbar').removeClass('stickyNav')
        }
    })
})