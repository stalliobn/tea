(function($) {
'use strict';

  var overlay = $('#overlay');
  var open_modal = $('.open_modal');
  var close = $('.modal_close, #overlay');
  var modal = $('.modal_div');
  open_modal.click( function(event){
   event.preventDefault();
   var div = $(this).attr('data-href');
   overlay.fadeIn(400,
     function(){
       $(div)
       .css('display', 'table').css('z-index', '1000')
       .animate({opacity: 1, top: '30px'}, 200);
     });
 });
  close.click( function(){
    modal
    .animate({opacity: 0, top: '45%'}, 200,
     function(){
       $(this).css('display', 'none').css('z-index', '0');
       overlay.fadeOut(400);
     }
     );
  });

  $('.trigger').on('click', function() {
    $('.head-menu').find('ul').slideToggle();
  });
  var windowWidth = $(window).width();
  $(window).resize(function () {
    if (windowWidth > (560)) {
      $('.head-menu').find('ul').removeAttr('style');
    }
  })
  
  function initialize() {
    var mapOptions = {
      center: { lat: 47.265236, lng: 39.683036},
      zoom: 16,
      scrollwheel: false,
      disableDefaultUI: true
    };
    var image = 'images/marker.png';
    var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
    var marker = new google.maps.Marker({
      position: { lat: 47.265236, lng: 39.683036},
      map: map,
      icon: image,
      title:"Go sexy"
    });
  }
  google.maps.event.addDomListener(window, 'load', initialize);

})(jQuery);
