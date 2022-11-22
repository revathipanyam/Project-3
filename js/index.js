function initMap() {
	const myLatLng = { lat:14.70767788305069, lng:77.60588335498916};
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 15,
		center: myLatLng,
	});

	new google.maps.Marker({
    	position: myLatLng,
    	map: map,
 	 });
	new google.maps.Marker({
        position: new google.maps.LatLng(14.70767788305069, 77.60588335498916),
        map,
        content: "my Hometown"
        animation: google.maps.Animation.DROP
	});
}
window.initMap = initMap;
