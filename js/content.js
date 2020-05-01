$(document).ready(function(){
    //#projectLayer -> display block일 때 스크롤 방지

    $("#project .item-list li").click(function(){
        var li_index = $("#project .item-list li").index(this) + 1;
        
        $("#project .item-list li").removeClass('active');
        $("#project .item-list li:nth-child("+li_index+")").addClass('active');

        $("#project .item-box .item-info > div").css('display', 'none');
        $("#project .item-box .item-info > div:nth-child("+li_index+")").css('display', 'block');

        $("#project .item-box .item-info").scrollTop(0);

    })

    // $(window).resize(projectFieldResize);
    // projectFieldResize();
    // function projectFieldResize(){
    //     var windowWidth = $(window).width();
        

    //     if(windowWidth > 991){
    //         var boxHeight = $('.item-list').height();
    //         // $(".item-box").css('height',boxHeight);
    //     }

    //     if(windowWidth <= 991){
    //         var sumMargin = 16+3;
    //         var fstLine = $(".item-list li:nth-child(3)").height()+sumMargin;
    //         var sndLine =  $(".item-list li:nth-child(4)").height()+sumMargin;
    //         var trdLine =  $(".item-list li:nth-child(5)").height()+sumMargin;
    
    //         var allHeight = $(".item-list").height()+$(".item-info").height()+20;   ///+padding
            
    //         $(".item-list li:nth-child(-n+3)").css('height',fstLine);   //li 1~3
    //         $(".item-list li:nth-child(n+4):nth-child(-n+6)").css('height',sndLine); // li 4~6
    //         $(".item-list li:nth-child(n+7)").css('height',trdLine);    //li 7~9

    //         // $("#project .item-box").css('height', allHeight);
    //     }
    // }


})