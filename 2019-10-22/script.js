var data = [
    {
        job_name: '做作業',
        start_time: '15:52',
        end_time: '15:52',
        job_label: '普通',
        job_status: 1    
    },{
        job_name: '蕭純言',
        start_time: '15:52',
        end_time: '15:52',
        job_label: '緊急',
        job_status: 0    
    },{
        job_name: '拉拉拉',
        start_time: '15:52',
        end_time: '15:52',
        job_label: '暫緩',
        job_status: 0    
    },{
        job_name: '哈哈哈阿',
        start_time: '15:52',
        end_time: '15:52',
        job_label: '緊急',
        job_status: 1    
    },{
        job_name: 'ㄚㄚㄚㄚㄚ',
        start_time: '15:52',
        end_time: '15:52',
        job_label: '暫緩',
        job_status: 1    
    }
]



data.forEach(function(job) {
    console.log(job);

    var job_status = job.job_status
    var job_label = job.job_label


    if(job_label=='普通'){
        job_label = 'normal'
    }else if(job_label=='緊急'){
        job_label = ''
    }else if(job_label=='暫緩'){
        job_label = 'pending'
    }
    console.log(job_label)
    if(job_status == 0){
        job_status = ''
    }else if(job_status == 1){
        job_status = ' checked="checked"'
        console.log(7897897)
    }


    $('.todos').append(`<li class="todo d-flex">
    <div class="col-9 d-flex align-items-center"><label class="checkbox">
            <input type="checkbox" ${job_status}>
            <span class="checkmark"></span>
        </label>
        <div class="todo_time">
            <div class="start_time">${job.start_time}</div>
            <i class="fas fa-sort-down"></i>
            <div class="end_time">${job.end_time}</div>
        </div>
        <div class="todo_title">${job.job_name}</div>
    </div>
    <div class="col-3 d-flex p-0 align-items-center justify-content-between">
        <div class="label_area">
            <div class="label d-flex ${job_label}">${job.job_label}</div>
        </div>
        <div class="cancel">
            <div class="cancel_btn">
                <i class="fas fa-chevron-left"></i>
            </div>
        </div>
    </div>
    <div class="slide_area">
        <div class="delete">刪除</div>
        <div class="edit">編輯</div>
    </div>
    
    </li>`)


  });

for (let month = 1; month <= 12; month++) {
    if (month < 10) {
        month = '0' + month
    }
    $('.datepicker.month .swiper-wrapper').append(
        `
    <div class="swiper-slide">
        <h1>${month}</h1 >
    </div >
    `
    )
}
for (let day = 1; day <= 31; day++) {
    if (day < 10) {
        day = '0' + day
    }
    $('.datepicker.day .swiper-wrapper').append(
        `
    <div class="swiper-slide">
        <h1>${day}</h1 >
    </div >
    `
    )
}
for (let hour = 1; hour <= 12; hour++) {
    if(hour<10){
        hour = '0'+hour
    }
    $('.datepicker.hour .swiper-wrapper').append(
        `
    <div class="swiper-slide">
        <h1>${hour}</h1 >
    </div >
    `
    )
}
for (let min = 0; min < 60; min++) {
    if (min < 10) {
        min = '0' + min
    }
    $('.datepicker.minute .swiper-wrapper').append(
        `
    <div class="swiper-slide">
        <h1>${min}</h1 >
    </div >
    `
    )
}


console.log($('.datepicker.hour .swiper-slide'))






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

