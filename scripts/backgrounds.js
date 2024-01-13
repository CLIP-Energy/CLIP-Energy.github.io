$(window).scroll(function() {
    // selectors
    var $window = $(window),
        $body = $('body'),
        $panel = $('.panel');
        $aboutCLIP = $('.about-CLIP');
    
    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + 2*($window.height() / 3);
   
    $panel.each(function () {
      var $this = $(this);
      
      // if position is within range of this panel.
      // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
      // Remember we set the scroll to 33% earlier in scroll var.
      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
        console.log('test')
            
        // Remove all classes on body with color-
        $body.removeClass(function (index, css) {
            console.log('test2')
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });
         
        // Add class of currently active div
        $body.addClass('color-' + $(this).data('color'));
      }
    });   
  }).scroll();

  window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const aboutCLIP = document.querySelector('.about-CLIP');
    const renderBackground = document.querySelector('.render-background');
    const aboutCLIPOffsetTop = aboutCLIP.offsetTop;
    const opacity = (scrollPosition - aboutCLIPOffsetTop +(window.innerHeight/2)) / (window.innerHeight/2);
    console.log(opacity);
    if (opacity > 1) {
        const amountAboveOne = opacity - 1;
        renderBackground.style.opacity = 1 - amountAboveOne + 0.8;
    }
    else {
        renderBackground.style.opacity = opacity > 0 ? opacity : 0;
    }

});