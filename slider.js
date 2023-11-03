$(document).ready(function(){
    $('#next').on('click',function(){
        var img = $('.image');
        var nxtimg = img.next();

        if(nxtimg.length){
            img.removeClass('image').css('z-index',-10);
            nxtimg.addClass('image').css('z-index',10);
        }
    });

    $('#prev').on('click',function(){
        var img = $('.image');
        var prvimg = img.prev();

        if(prvimg.length){
            img.removeClass('image').css('z-index',-10);
            prvimg.addClass('image').css('z-index',10);
        }
    });
})