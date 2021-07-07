/*---------------
Hamburger Menu
----------------*/

function openMenu() {
    document.getElementById('navbar').style.width ="100%";
}

function closeMenu() {
    document.getElementById('navbar').style.width ="0%";
}

/*---------------
Smooth Scroll
----------------*/

$('.menu-items a, .scroll-button a ').on('click', function(){
    $('html, body').animate({
        scrollTop:$($.attr(this, 'href')).offset().top
    }, 1000);
    return false
});

/*---------------
WOW JS
----------------*/
new WOW().init();


/*---------------
MIX IT UP
var mixer = mixitup('.container');
----------------*/
var mixer = mixitup('.portfolio-grid');