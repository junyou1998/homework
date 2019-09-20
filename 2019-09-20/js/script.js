$('.tab_btn').click(function(){
    var btn_index = $('.tab_btn').index(this)

    console.log(btn_index)


    $('.tab_btn').removeClass('active')
    $('.tab_content').removeClass('active')

    $(`.tab_btn:nth-child(${btn_index+1})`).addClass('active')
    $(`.tab_content:nth-child(${btn_index+1})`).addClass('active')
})