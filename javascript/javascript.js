$(document).ready(function() { 

	var userInput;
	var queryurl = "api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=dc6zaTOxFJmzC";
	queryurl = queryurl.replace(" ", "+");

	var animals = ["dog", "cat", "rabbit", "hamster", "skunk", "goldfish"];

	console.log(animals);
});