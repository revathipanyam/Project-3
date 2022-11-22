function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: { lat: 14.675796515578558, lng: 77.59489702704062},
    gestureHandling: "none",
    zoomControl: true,
    scaleControl: true,
  });
  
  var marker = new google.maps.Marker({
    position: { lat: 14.675796515578558, lng: 77.59489702704062 },
    map: map,
  });
  
  var infowindow = new google.maps.InfoWindow({
    content:"My Hometown"
  });
  infowindow.open(map, marker);
}
window.initMap = initMap;
