$('#header .open').addClass('on')
$('#header .open').on('click', function(){
    $(this).next().css({opacity:1}).animate({right:0}, 500)
    $(this).removeClass('on')
    $(this).next().next().addClass('on')
})
$('#header .close').on('click', function(){
    $(this).prev().animate({right:'-250px'}, 500, function(){
        $(this).css({opacity:0})
    })
    $(this).removeClass('on')
    $(this).prev().prev().addClass('on')
    $('.depth1 > li').removeClass('on')
})


$('#header .depth1 > li').on('click', function(e){
    if ( $('html').hasClass('mobile')) {
        /* e.preventDefault() */
        $(this).toggleClass('on')
        if ( $(this).hasClass('on') ) {
            $(this).find('i').removeClass('fa-chevron-down').addClass('fa-chevron-up')
        } else { 
            $(this).find('i').removeClass('fa-chevron-up').addClass('fa-chevron-down')
        }
    }
})         
$(".depth1 > li").hover(
    function(){
        if ($('html').hasClass('pc')) {
            $(this).addClass('on')
        }
    },
    function(){
        if ($('html').hasClass('pc')) {
            $(this).removeClass('on')
        }
    }
)

// 여기서부터 resize 이벤트 발생시 스크롤바 유무에 따른 상태제어 프로그램
var deviceSize = 992;    

function scrollOX(status) {
    $('html').css({
        overflowY:status
    })
    var htmlWidth = $('html').width()
    return htmlWidth
}
var swh = scrollOX('hidden')
var sws = scrollOX('scroll')
var swd = swh - sws
if (swd>0) {
    deviceSize = deviceSize - swd
}

function init(){
    var ww = $(window).width()
    if (ww>deviceSize && !$('html').hasClass('pc') ) {
        $('html').addClass('pc').removeClass('mobile')
        $('.depth1 > li').removeClass('on')
        $('#header .nav').css({opacity:1, right:'0px'})
    } else if ( ww<=deviceSize && !$('html').hasClass('mobile') ) {
        $('html').addClass('mobile').removeClass('pc')
        $('#header .close').removeClass('on')
        $('#header .nav').css({opacity:0, right:'-250px'})
        $('#header .open').addClass('on')
    }
}

init()

$(window).on('resize', function(){
    
    init()
})

// 여기까지 resize 이벤트 발생시 스크롤바 유무에 따른 상태제어 프로그램