// testWebP
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});
// Burger
$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .header-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
// ibg
function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}
ibg();
function map(n) {
   google.maps.Map.prototype.setCenterWithOffset = function (latlng, offsetX, offsetY) {
      var map = this;
      var ov = new google.maps.OverlayView();
      ov.onAdd = function () {
         var proj = this.getProjection();
         var aPoint = proj.fromLatLngToContainerPixel(latlng);
         aPoint.x = aPoint.x + offsetX;
         aPoint.y = aPoint.y + offsetY;
         map.panTo(proj.fromContainerPixelToLatLng(aPoint));
      }
      ov.draw = function () {};
      ov.setMap(this);
   };
   var markers = new Array();
   var infowindow = new google.maps.InfoWindow({

   });
   var locations = [
      [new google.maps.LatLng(53.819055,27.8813694)]
   ]
   var options = {
      zoom: 10,
      panControl: false,
      mapTypeControl: false,
      center: locations[0][0],
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
   };
   var map = new google.maps.Map(document.getElementById('map'), options);
   var icon = {
      url:'img/icons/map.svg',
      scaledSize = new google.maps.Size(18, 20),
      anchor = new google.maps.Point(9, 10)
   }
   for (var i = 0; i < locations.length; i++) {
      var marker = new google.maps.Marker({
         position: locations[i][0],
         map: map,
      });
      markers.push(marker);
   }
}
if($("#map").length>0){
   map();
}