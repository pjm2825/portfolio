$(".article1 .slide-group").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    dots: true, // 동그라미버튼
    speed: 600, // 바뀌는시간(생략가능)
    slidesToShow: 1, // 보여질슬라이드수(생략가능)
    slidesToScroll: 1, // 이동슬라이드수(생략가능)
    pauseOnHover: true, // 마우스오버시 멈춤여부(생략가능)
    pauseOnDotsHover: true, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    cssEase: 'linear', // 속도함수(생략가능)
    draggable: true, // 마우스드래그시 슬라이드 교체가능여부(생략가능)
    fade: true, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
    arrows: true, // 좌우화살표 사용여부(생략가능)
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
    responsive:[{
        breakpoint:1025,
        settings:{
            arrows: false
        }
    }]
})





// 로딩인트로2
$(window).on('load', function(){
    setTimeout(function(){
        $('.introBox').fadeOut(500)
    }, 1000)
})
$('.introBox').on('click', function(){
    $(this).fadeOut(100)
})



var aboutNear = $('#about').offset().top
$('.scroll-down').on('click', function(e){
    e.preventDefault()
    $(this)
    .addClass('on')
    .siblings().removeClass('on')
    var num = $(this).index()
    if (num===0) {
        $('html').animate({ scrollTop:0 }, 1000) 
    } else if (num===1) {
        $('html').animate({ scrollTop:aboutNear-200 }, 1000) 
    }
})



$(window).on('scroll', function(){
    var sct = $(this).scrollTop()
    if ( sct>=50 && !$('#header').hasClass('on') ) {
        $('#header').addClass('on')
        $('.gotop').addClass('on')
    } else if ( sct<50 && $('#header').hasClass('on') ) {
        $('#header').removeClass('on')
        $('.gotop').removeClass('on') 
    }
    if ( sct>=10 && !$('.article2').hasClass('on') ) {
        $('.article2').addClass('on')
    } else if ( sct===0 ) {
        $('.article2').removeClass('on')
    }
})

 


// 맨위로 버튼 클릭시 부드럽게 스크롤시키기
$('.gotop').on('click',function(e){
    e.preventDefault()
    $('html').animate({
        scrollTop:0
    }, 600)
})
