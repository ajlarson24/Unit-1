// Add all scripts to the JS folder
//Example 3.5...
function jsAjax(){
    //define a variable to hold the data
    var myData;

    //basic fetch
    fetch('data/MegaCities.geojson')
        .then(function(response){
            return response.json();
        }) 
        .then(function(response){
            myData = response;

            //check the data, data is usable here
            console.log(myData)
            //document.querySelector("#myDiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:</br>' + JSON.stringify(myData))
        }) 

    //check the data, data is undefined here
    //console.log(myData)
};

document.addEventListener('DOMContentLoaded',jsAjax)