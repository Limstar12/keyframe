$(document).ready(function(){
    // setTimeout(()=>{
    //     $('.aniWrap').addClass('aniShow');
    // }, 3000);
    $('.bt').click(function(){
        // var aniWrapNm = $('.aniWrap').attr('class');
        // 클래스명을 모두 저장해라
        // aniWrapNm에서 aniWrap을 제외한 나머지 단어를 색출해라
        // 공백이 있다면 공백도 없애줘
        // 순수한 배경애니메이션 해당 클래스만 속출해서 다시 담아라

        $('.aniWrap').removeClass("bgblack bgyellow bggreen").addClass($(this).data('class'));
    });
})

