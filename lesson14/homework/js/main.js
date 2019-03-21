$(function() {

    $('.main_btna, .main_btn, a[href="#sheldure"]').on('click', function(){
        $('.overlay').fadeIn(1000);
        $('.modal').css("top", "-100%").animate({opacity: 'toggle', top: '5%'}, 1000);
    })
    $('.close').on('click', function(){
        $('.overlay').fadeOut(1000);
        $('.modal').animate({opacity: 'toggle', top: '-100%'}, 1000);
    })
    $('.back').on('click', function(){
        $('.thanks').fadeOut(300);
        $('.overlay').fadeOut(1000);
        $('.modal').animate({opacity: 'toggle', top: '-100%'}, 1000);
    })
    $('.form-inline').submit(function(e){
        e.preventDefault();
        let formData=$(this).serialize();
        $.ajax({
            method: "POST",
            url: "server.php",
            data: formData,
            success: function(result){
                $('.form-inline').find("input, textarea").val('');
                $('.thanks').fadeIn(300);
            }
        });
    });

});