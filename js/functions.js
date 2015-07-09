//function initialize() {
//    var mapCanvas = document.getElementById('map-canvas');
//    var mapOptions = {
//      center: new google.maps.LatLng(27.193474, -80.252714),
//      zoom: 8,
//      mapTypeId: google.maps.MapTypeId.ROADMAP
//    }
//    var map = new google.maps.Map(mapCanvas, mapOptions);
//  }
  //google.maps.event.addDomListener(window, 'load', initialize);

function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4";
  fjs.parentNode.insertBefore(js, fjs);
}