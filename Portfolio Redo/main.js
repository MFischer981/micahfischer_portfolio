$.fn.moveIt = function(){
    var $window = $(window);
    var instances = [];
    
    $(this).each(function(){
      instances.push(new moveItItem($(this)));
    });
    
    window.addEventListener('scroll', function(){
      var scrollTop = $window.scrollTop();
      instances.forEach(function(inst){
        inst.update(scrollTop);
      });
    }, {passive: true});
  }
  
  var moveItItem = function(el){
    this.el = $(el);
    this.speed = parseInt(this.el.attr('data-scroll-speed'));
  };
  
  moveItItem.prototype.update = function(scrollTop){
    this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
  };
  
  // Initialization
  $(function(){
    $('[data-scroll-speed]').moveIt();
  });

// HTML
$(window).scroll(function () {
    if ($(this).scrollTop() > 3800) {
        $('#html').css({
            'height': '800px',
            'opacity': '1',
        });
    }
});

$(window).scroll(function () {
    if ($(this).scrollTop() < 3800) {
        $('#html').css({
            'height': '0px',
            'opacity': '0',
        });
    }
});
// CSS
$(window).scroll(function () {
    if ($(this).scrollTop() > 3800) {
        $('#css').css({
            'height': '600px',
            'opacity': '1',
        });
    }
});

$(window).scroll(function () {
    if ($(this).scrollTop() < 3800) {
        $('#css').css({
            'height': '0px',
            'opacity': '0',
        });
    }
});
// JS
$(window).scroll(function () {
    if ($(this).scrollTop() > 3800) {
        $('#js').css({
            'height': '400px',
            'opacity': '1',
        });
    }
});

$(window).scroll(function () {
    if ($(this).scrollTop() < 3800) {
        $('#js').css({
            'height': '0px',
            'opacity': '0',
        });
    }
});
// jQuery
$(window).scroll(function () {
    if ($(this).scrollTop() > 3800) {
        $('#jquery').css({
            'height': '500px',
            'opacity': '1',
        });
    }
});

$(window).scroll(function () {
    if ($(this).scrollTop() < 3800) {
        $('#jquery').css({
            'height': '0px',
            'opacity': '0',
        });
    }
});
// PHP
$(window).scroll(function () {
    if ($(this).scrollTop() > 3800) {
        $('#php').css({
            'height': '400px',
            'opacity': '1',
        });
    }
});

$(window).scroll(function () {
    if ($(this).scrollTop() < 3800) {
        $('#php').css({
            'height': '0px',
            'opacity': '0',
        });
    }
});
// Bootstrap
$(window).scroll(function () {
    if ($(this).scrollTop() > 3800) {
        $('#bstrap').css({
            'height': '600px',
            'opacity': '1',
        });
    }
});

$(window).scroll(function () {
    if ($(this).scrollTop() < 3800) {
        $('#bstrap').css({
            'height': '0px',
            'opacity': '0',
        });
    }
});





