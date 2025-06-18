// MOBILE
$(window).on('resize', function() {
    console.log('resize')
    isMobileFunc()
})

$(document).on('ready', function(){
    isMobileFunc()
    
    
    $(document).on('submit', 'form', function(e){
        e.preventDefault()
        console.log('submit')
        
        $('.loading').show()
        
        var form = $(e.currentTarget),
            inputList = form.find('input:not([type="submit"]), select'),
            url = document.location.href,
            data = ''
            
        for(var i = 0; i < inputList.length; i++){
            if(inputList[i].getAttribute('type') != 'radio' || (inputList[i].getAttribute('type') == 'radio' && inputList[i].checked)){
                data += (inputList[i].getAttribute('name') + '=' + inputList[i].value +'&')
            }
        }
        $.ajax({
            method: "POST",
            url: url,
            data: data,
            dataType: "html",
            success: function(response){
                $('body').html(response)
            }
        });
        
    })
    
    $(document).on('click', '.showHideButton', function(e){
        $(e.currentTarget).next().toggle()
    })
    
    
    $(document).on('click', '.partita_finita .edit_match', function(e){
        $(e.currentTarget).parent().parent().next('.match_ended').toggle()
    })

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


/* 
var status = form.find('input[name="status"][checked]').val()
if(status == 'completed'){
    var teamGirone = form.find('select[name="teamGirone"]').val(),
        partitaId = form.find('input[name="partita-id"]').val(),
        databaseID = form.find('input[name="databaseID"]').val(),
    
    
        squadraCasa = form.find('input[name="squadra_casa"]').val(),
        nomeCasa = form.find('input[name="nome_casa"]').val(),
        golCasa = form.find('input[name="gol_casa"]').val(),
        puntiCasa = form.find('input[name="punti_casa"]').val(),
        
        squadraOspite = form.find('input[name="squadra_ospite"]').val(),
        nomeOspite = form.find('input[name="nome_ospite"]').val(),
        golOspite = form.find('input[name="gol_ospite"]').val(),
        puntiOspite = form.find('input[name="punti_ospite"]').val()
        
    if(golCasa == golOspite){
        
    }else {
        var dataUpdatePoints = ''
        // win casa
        console
        if(golCasa > golOspite){
            dataUpdatePoints = 'form-submitted=updateTeamTourney&databaseID=' + databaseID + '&squadra-id=' + squadraCasa  + '&teamName=' + nomeCasa + '&teamGirone=' + teamGirone + '&teamPunti=' + (parseInt(puntiCasa) + 3)
        }
        // win ospite
        else if(golCasa < golOspite) {
            dataUpdatePoints = 'form-submitted=updateTeamTourney&databaseID=' + databaseID + '&squadra-id=' + squadraOspite  + '&teamName=' + nomeOspite + '&teamGirone=' + teamGirone + '&teamPunti=' + (parseInt(puntiOspite) + 3)
        }

        console.log('dataUpdatePoints: '+ dataUpdatePoints)
        $.ajax({
            method: "POST",
            url: url,
            data: dataUpdatePoints,
            dataType: "html",
            success: function(response){
                console.log('success')
            }
        });
    }
}
 */
