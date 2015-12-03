$(function(){
  
  $('container').imagesLoaded(function(){
    $('#container').masonry({
      // options
      itemSelector : '.item', 
      columnWidth : 240 //列寬度(最小)
    })
  });

  $('#mainNav').affix({
    offset: {
    top: 100
    }
  });


  $('body').scrollspy({
    target: ".navbar"
  });


    
  $('ul a , a').click(function() {
      var $anchor = $(this);
      
      $('html, body').animate({
      scrollTop: $($anchor.attr('href')).offset().top-55
      }, 2000);
      return false;
      helpers : {
      }
  });


});

// Initialize WOW.js Scrolling Animations
new WOW().init();

