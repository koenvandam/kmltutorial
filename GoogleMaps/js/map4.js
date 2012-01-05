window.onload = function() {
	var mapDiv = document.getElementById('map');
	var latlng = new google.maps.LatLng(37.09, -95.71);

	// Creating a MapOptions object with the required properties
	var options = {
		center: latlng,
		zoom: 4,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	// Creating the map
	var map = new google.maps.Map(mapDiv, options);

	// Attaching click events to the buttons

	// Getting values
	document.getElementById('getValues').onclick = function() {
		alert('Current zoom level is ' + map.getZoom());
		alert('Current center is ' + map.getCenter());
		alert('The current map type is ' + map.getMapTypeId());
	}

	// Changing values
	document.getElementById('changeValues').onclick = function() {
		map.setOptions({
			center: new google.maps.LatLng(40.6891, -74.0445),
			zoom: 17,
			mapTypeId: google.maps.MapTypeId.SATELLITE
		});
	}
}
