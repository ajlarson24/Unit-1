/*This is where the JS file starts
We first start with a function that we will call at the end of the script to make the text appear
We do this to let the webpage load the script first, then activate it*/
function initialize(){
    cities();
};

/*This function block is the making of the table, 
we start with an array with the cities and their population*/
function cities(){
	var cityPop = [
	{ 
		city: 'Madison',
		population: 233209
	},
	{
		city: 'Milwaukee',
		population: 594833
	},
	{
		city: 'Green Bay',
		population: 104057
	},
	{
		city: 'Superior',
		population: 27244
	}]

    //creates the table element
    var table = document.createElement("table");

    //creates a header row
    var headerRow = document.createElement("tr");

    //adds the "City" and "Population" columns to the header row
    headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")

    //adds the row to the table
    table.appendChild(headerRow);

    //loop from the example to add a new row for each city
    for(var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        table.insertAdjacentHTML('beforeend',rowHtml);
    }
	//after the loop goes through, this will add it all to the table, and stop the editing
    document.querySelector("#myDiv").appendChild(table);
	//this calls the two functions we will make below
	addColumns(cityPop)
	addEvents(cityPop)
}
//this is where addColumns function starts
function addColumns(cityPop){
    
    document.querySelectorAll("tr").forEach(function(row, i){

    	if (i == 0){
			//here we create the new column that we will populate below
    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
    	} else {
			//here we create the new var citySize
    		var citySize;
			/*this starts the conditions to pass. it takes the population from each object
			in the cityPop array at the beginning
			if the population is under 100000, it will be a small city*/
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';
			//if the pop is between 100000 and 500000, it will be medium
    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';
			//if the pop is over 500000 it will be large
    		} else {
    			citySize = 'Large';
    		};
			//this inserts the var citySize into the table into the new column
			row.insertAdjacentHTML('beforeend','<tr><td>' + citySize + '</td></tr>');
    	};
    });
};
//this starts the addEvents function, which will have two nested functions
function addEvents(){
	//here we add the event listener to trigger the following function
	document.querySelector("table").addEventListener("mouseover", function(){
		//here we create the color variable
		var color = "rgb(";
		/*here we set the for loop parameters, i will equal 0, then the variable will go until i<3,
		then if its not <3, 1 is added to i*/
		for (var i=0; i<3; i++){
			//this gives us the syntax for getting random numbers
			var random = Math.round(Math.random() * 255);
			//this is the first color code added to the rgb var
			color += random;
			//this adds the 2nd and 3rd number
			if (i<2){
				color += ", ";
			//this adds the end of the rgb code (#,#,#)
			} else {
				color += ")";
		};
		//here we add the style to the table
		document.querySelector("table").style.color = color;
	};
	//this starts the clickme function
	function clickme(){
		//this is the text that will pop up when clicked
		alert('Hey, you clicked me!');
	};
	//this adds the eventlistener to trigger the 'clickme' function, a click in this case
	document.querySelector("table").addEventListener("click", clickme)
});

};

/*As mentioned at the beginning, this will load the script ahead of time to make the loading
of the webpage not as cumbersome*/
document.addEventListener('DOMContentLoaded',initialize)