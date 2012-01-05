window.onload = function() {
	var mapDiv = document.getElementById('map');
	var latlng = new google.maps.LatLng(51.48878, -0.178099);

	// Creating a MapOptions object with the required properties
	var options = {
		center: latlng,
		zoom: 7,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	// Creating the map
	var map = new google.maps.Map(mapDiv, options);

	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(51.49978, -0.178099),
		map: map
	});

}
