//THIS FUNCTION IS NOT NEEDED, WE CAN CREATED A NESTED FUNCTION WITH THE SAME EFFECT
/*function debugCallback(response){
	document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData))
};*/

function debugAjax(){
	
	var myData;
	
	fetch("data/MegaCities.geojson")
		.then(function(response){
			//this debugCallback is not created, so we can use a different form
			//debugCallback(response);
			return response.json();
		})
		.then(function(response){
			myData = response

			document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:</br>' + JSON.stringify(myData))
		})
	//THIS LINE IS MOVED INTO THE CONVERTED CALLBACK FUNCTION ABOVE
	//document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:</br>' + JSON.stringify(myData))
};

//THIS LINE IS NOT NEEDED AS THE MYDATA HERE IS UNDEFINED
//document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData))
