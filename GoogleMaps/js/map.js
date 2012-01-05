
(function(){
window.onload = function() {

	var mapDiv = document.getElementById('map');
	// var latlng = new google.maps.LatLng(51.48878, -0.178099);	// London
	var latlng = new google.maps.LatLng(41.904321,-87.636566);		// Chicago
	
	var toggleState = 1;	// to keep track of state of toggle switch

	// Creating a MapOptions object with the required properties
	var options = {
		center: latlng,
		zoom: 7,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	// Creating the map
	var ourMap = new google.maps.Map(mapDiv, options);
	
	// setting KML URL and options for the layer
	var kmlUrl = 'http://gmaps-samples.googlecode.com/svn/trunk/ggeoxml/cta.kml';
	var kmlOptions = {
		map: ourMap,
		preserveViewport: true
	};

	// Create the KML layer on our map
	var kmlLayer = new google.maps.KmlLayer(kmlUrl, kmlOptions);


	
	// Function to toggle the KML button
	document.getElementById('test').onclick = function() {
	
		if (toggleState == 1) {
			// remove KML layer from the map
			kmlLayer.setMap(null);
			toggleState = 0;
		
			alert('KML layer now turned off');
		
		
		} else {
			// add KML layer to our map
			kmlLayer.setMap(ourMap);
			toggleState = 1;
		
			alert('KML layer now turned ON!');
		}
	}
}

})();