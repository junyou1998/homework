var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    grabCursor: true,
    // Optional parameters
    direction: 'vertical',
    loop: true,
    mousewheel: true,

})



$('.add_btn').click(function(){
    $('.add_panel').toggleClass('extend')
    $('.add_btn').toggleClass('rotate')
    $('.mask').toggleClass('active')
})

$('.cancel_btn').click(function(){
    var btn_index = $('.cancel_btn').index(this)

    
    
    if ($(`.todo:nth-child(${btn_index + 1}) .slide_area`).hasClass('slide_control')){
        
        $(`.todo:nth-child(${btn_index + 1}) .slide_area`).toggleClass('slide_control')
        $(`.todo:nth-child(${btn_index + 1}) .cancel_btn`).toggleClass('rotate')
    }
    else{
        $('.slide_area').removeClass('slide_control')
        $('.cancel_btn').removeClass('rotate')
        console.log(btn_index)
        $(`.todo:nth-child(${btn_index + 1}) .slide_area`).toggleClass('slide_control')
        $(`.todo:nth-child(${btn_index + 1}) .cancel_btn`).toggleClass('rotate')
    }
    
        
})
$('.mask').click(function(){
    console.log('dfdf')
    $('.add_panel').toggleClass('extend')
        $('.mask').toggleClass('active')
    $('.add_btn').toggleClass('rotate')
})