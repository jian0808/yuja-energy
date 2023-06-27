
// main visual slide
var swiper = new Swiper(".main-slide", {
    slidesPerView: 1,
    loop: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// top button
$(function() { // 보이기 | 숨기기
    $(window).scroll(function() {
    if ($(this).scrollTop() > 200) { //200 넘으면 버튼이 보여짐. 
        $('.btn-top').fadeIn();
    } else {
        $('.btn-top').fadeOut();
    }
    });     
    
    $(".btn-top").click(function() {  // 버튼 클릭시 
    $('html, body').animate({ scrollTop : 0 // 0 까지 animation 이동. 
    }, 400); // 속도 400 
        return false; 
    }); 
});

// tab
$(document).ready(function(){    
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })
})

// mo-menu
$(document).ready(function(){    
    $('.btn-menu').click(function(){
        $('.mo-menu').fadeIn();
    })
    $('.close').click(function(){
        $('.mo-menu').fadeOut();
    })
})

