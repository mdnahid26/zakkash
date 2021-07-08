$(function(){
    'use stirct';
    $(window).on("scroll",function(){
        if($(window).scrollTop()>0){
            $('.navbar').addClass('stickyNav')
        }else{
            $('.navbar').removeClass('stickyNav')
        }
    })
    $('#slider').slick({
        prevArrow:'<i class="slider_arrow slider_arrow_left fas fa-long-arrow-alt-left"></i>',
        nextArrow:'<i class="slider_arrow slider_arrow_right fas fa-long-arrow-alt-right"></i>',
        fade:true,
        autoplay:true,
        autoplaySpeed:3000,
        dots:true,
        dotsClass:'slick_dots',
    })
    $(".venobox").venobox({
        spinner:'rotating-plane',
        spinColor:'black'

    })
    $('.video').venobox({

    })

    //$('.filtr_container').filterizr()

    $('.team_menber_container').slick({
        slidesToShow:5,
        autoplay:true,
        centerMode:true,
        centerPadding:'0',
        prevArrow:'<i class="team_arrow team_arrow_left fas fa-long-arrow-alt-left"></i>',
        nextArrow:'<i class="team_arrow team_arrow_right fas fa-long-arrow-alt-right"></i>',
        asNavFor: '.team_member_detail',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
              }
            }
        ]
    })

    $('.team_member_detail').slick({
        slidesToShow:1,
        arrows:false,
        fade:true,
        asNavFor: '.team_menber_container',
    })

    $('.comment_slick').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:3000,
    })

    $('.blog_slick').slick({
        slidesToShow:3,
        prevArrow:'<i class="blog_arrow blog_arrow_left fas fa-long-arrow-alt-left"></i>',
        nextArrow:'<i class="blog_arrow blog_arrow_right fas fa-long-arrow-alt-right"></i>',
    })
    $('.clint_slick').slick({
        slidesToShow:6,
        arrows:false,
        autoplay:true,
    })
})