$(document).ready(function() {
    
    // smooth scroll
    $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
    });
    
    
    
    //button color change
    $('.g-bar1').click(function() {
        $('.g-bar1').addClass('bar-selected');
        $('.g-bar2').removeClass('bar-selected');
        $('.g-bar3').removeClass('bar-selected');  
    });
    
        $('.g-bar2').click(function() {
        $('.g-bar2').addClass('bar-selected');
        $('.g-bar1').removeClass('bar-selected');
        $('.g-bar3').removeClass('bar-selected');  
    });
    
        $('.g-bar3').click(function() {
        $('.g-bar3').addClass('bar-selected');
        $('.g-bar1').removeClass('bar-selected');
        $('.g-bar2').removeClass('bar-selected');  
    });
    
    
    
    $('.d-bar1').click(function() {
        $('.d-bar1').addClass('bar-selected');
        $('.d-bar2').removeClass('bar-selected');
        $('.d-bar3').removeClass('bar-selected');  
    });
    
    $('.d-bar2').click(function() {
        $('.d-bar2').addClass('bar-selected');
        $('.d-bar1').removeClass('bar-selected');
        $('.d-bar3').removeClass('bar-selected');  
    });
    
    $('.d-bar3').click(function() {
        $('.d-bar3').addClass('bar-selected');
        $('.d-bar1').removeClass('bar-selected');
        $('.d-bar2').removeClass('bar-selected');  
    });
    
    
    
    $('.drum-bar1').click(function() {
        $('.drum-bar1').addClass('bar-selected');
        $('.drum-bar2').removeClass('bar-selected');
        $('.drum-bar3').removeClass('bar-selected');  
    });
    
    $('.drum-bar2').click(function() {
        $('.drum-bar2').addClass('bar-selected');
        $('.drum-bar1').removeClass('bar-selected');
        $('.drum-bar3').removeClass('bar-selected');  
    });
    
    $('.drum-bar3').click(function() {
        $('.drum-bar3').addClass('bar-selected');
        $('.drum-bar1').removeClass('bar-selected');
        $('.drum-bar2').removeClass('bar-selected');  
    });
    
});

// mobile nav
function navClick() {
    var content = document.querySelector('.dropdown-content');
    content.classList.toggle('show');
};

