function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 14.727355574823836, lng: 77.59688877403104},
    zoom: 15,
	zoomControl: false,
    scaleControl: true,
	mapTypeId: 'hybrid'
  });
  
  var marker = new google.maps.Marker({
    position: { lat: 14.727355574823836, lng: 77.59688877403104},
    map: map,
  });
  
  var infowindow = new google.maps.InfoWindow({
    content:"My Hometown"
  });
  infowindow.open(map, marker);
}
window.initMap = initMap;
