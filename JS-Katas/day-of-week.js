let day = 12;
let month = 8; 
let year = 1993;

var dayOfTheWeek = function(day, month, year) {
    let date = new Date(year, month - 1, day, 0, 0, 0, 0)
                    .toDateString()
                    .split(" ") //Example: Thu Aug 12 1993 - Split on the spaces in this string.
                    .shift(); //Remove the first item from the array and return it. (In this case it would return 'Thu')
	
	//Create an object than we can use to map the day to the full name variant. 
    let dayMap = {
        "Mon":"Monday",
        "Tue":"Tuesday",
        "Wed":"Wednesday",
        "Thu":"Thursday",
        "Fri":"Friday",
        "Sat":"Saturday",
        "Sun":"Sunday",
    }
	
	//Return the lookup for our day. 
    return dayMap[date];
};


console.log(dayOfTheWeek(day, month, year)); //Thursday
