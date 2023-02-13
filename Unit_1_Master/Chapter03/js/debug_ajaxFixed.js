function initialize(){
    debugAjax();
};

function debugAjax(){
	
	var myData;
	
	fetch("data/MegaCities.geojson")
		.then(function(response){
			return response.json();
		})
        .then(function(response){
            myData = response

            document.querySelector("#myDiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:</br>' + JSON.stringify(myData))
        })
};

document.addEventListener('DOMContentLoaded',initialize)