// Shrink top logo on scroll below top of page.
$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $('div.logo img').css({
            'transform': "scale(.8) translateX(-20px)",
        });
    }
});
// Grow top logo on scroll to top of page.
$(window).scroll(function () {
    if ($(this).scrollTop() < 450) {
        $('div.logo img').css({
            'transform': "scale(1)",
        });
    }
});



// Grow top logo on scroll to top of page.
$(window).scroll(function () {
    if ($(this).scrollTop() < 100) {
        $('header').css({
            'background-position' : 'center top',
        });
    }
});
// Shrink top logo on scroll below top of page.
$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $('header').css({
            'background-position' : 'center bottom',
        });
    }
});


