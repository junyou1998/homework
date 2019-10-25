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
    $('.mask').toggleClass('active')
})
$('.cancel_btn').click(function(){
    var btn_index = $('.cancel_btn').index(this)

    $('.slide_area').removeClass('slide_control')

    console.log(btn_index)
    $(`.todo:nth-child(${btn_index + 1}) .slide_area`).toggleClass('slide_control')
})
$('.mask').click(function(){
    console.log('dfdf');
})