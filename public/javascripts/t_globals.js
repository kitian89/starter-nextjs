// MOBILE
$(window).on('resize', function() {
    console.log('resize')
    isMobileFunc()
})

$(document).on('ready', function(){
    isMobileFunc()

    if($('#homeVideo').length){
        setTimeout(function(){
            $('#homeVideo')[0].play()
        }, 2000)
    }

    // MENU
    $(document).on('click', 'body.mobile .mobile-menu', function(){
        // var menu = $('.mobile-menu').next('.menu')
        var menu = $('.mobile-menu').parent().next('.menu')

        $('.mobile-menu, .menu-overlay').addClass('open')
        menu.addClass('open')

        var top = $(window).scrollTop(),
            height = screen.height


        menu.css({'top': top, 'height': height});
    })

    $(document).on('click', 'body.mobile .close-menu', function(){
        // var menu = $('.mobile-menu').next('.menu')
        var menu = $('.mobile-menu').parent().next('.menu')

        $('.mobile-menu, .menu-overlay').removeClass('open')
        menu.removeClass('open')
    })


    if($('body').hasClass('mobile')){
        $('body.mobile header.v1 .sponsors > img').hide()
        $('body.mobile header.v1 .sponsors > img').eq(0).show()
        
        setInterval(function(){
            $('body.mobile header.v1 .sponsors > img').toggle()
        }, 5000);
    }
    
    if(document.getElementsByClassName("mySlides").length){
        showSlides(slideIndex);
    }
    
    //setInterval(function(){
    //    plusSlides(1)
    //}, 5000)

})

isMobileFunc = function(){
    console.log('resize')
    if(isMobile.any() || (window.innerWidth <= 800 && window.innerHeight <= 600)){
        $('body').addClass('mobile');
        $('.slideshow-container.desktop').remove()
        console.log('mobile')
    }else{
        $('body').removeClass('mobile');
        $('.slideshow-container.mobile').remove()
        console.log('desktop')
    }
}

var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; 
    if(dots.length){
        dots[slideIndex-1].className += " active";
    }

    setTimeout(function(){
        var elHeight = $('.mySlides:visible')[0].offsetHeight
        if(elHeight >= $('.slideshow-container')[0].offsetHeight){
            $('.slideshow-container').css({'height':elHeight})
        }
    }, 250)
}


var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    platform_iOS: function() {
        return navigator.platform.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.platform_iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
