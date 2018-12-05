

$(window).scroll(function () {
    if ($(this).scrollTop() < 180) {
        $('div.logo img').css({
            'height' : "80px",
        });
    }
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('div.logo img').css({
            'height' : "60px",
        });
    }
});

