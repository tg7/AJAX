$(document).ready(function() {

// On Click Function for Buttons

	$('button').on('click', function() {

// Variable for button clicked using data described in html
		var sportsTeam = $(this).data('team');

// Uses Giphy API and adds variable data to know what to research

		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + sportsTeam + "&api_key=dc6zaTOxFJmzC&limit=5";

		console.log(this);

// AJAX get request using Giphy API

		$.ajax ({
			url: queryURL,
			method: "GET"

		})

// Ends request and generates response using function  

		.done(function(response) {

			console.log(response);

// Created variable to display the response data
			var results = response.data

			console.log('results', results);

// Created For Loop to go through all of the pulled API images 
		for (var i = 0; i < results.length; i++) {
			console.log(results[i]);

// Created variables for a new div and text desribing the rating for each pulled gif
		var sportsDiv = $('<div>');
		var p = $('<p>');
		p.text(results[i].rating);
		console.log(results[i].rating);

// Created new images and lists the source and results for that specific gif		
		var sportsImage = $('<img>');
		sportsImage.attr('src', results[i].images.fixed_height.url);

// Appends the rating to the div
		sportsDiv.append(p);

// Appends the image to the div
		sportsDiv.append(sportsImage);

// Puts the new images first in the images div section 
		$('#images').prepend(sportsDiv);


		}

	});

	});

});