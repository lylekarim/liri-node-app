var request = require("request");
var fs = require("fs");
var moment = require('moment');
require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');

// Create the Command constructor
var Command = function () {
    // divider will be used as a spacer between the tv data we print in log.txt
    var divider = "\n------------------------------------------------------------\n\n";

    // findConcert takes in the name of an artist and searches the bands in town API

    this.findConcert = function (artist) {
        var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";


        request(URL, function (err, response, body) {

            // Parse the response body (string) to a JSON object

            var result = JSON.parse(body)[0];
            console.log("Venue name " + result.venue.name);
            console.log("Venue location " + result.venue.city);
            console.log("Date of Event " + moment(result.datetime).format("MM/DD/YYYY"));


            // concertData ends up being the string containing the concert data we will print to the console
            var concertData = [
                "Venue Name: " + result.venue.name,
                "Location: " + result.venue.city,
                "Concert Date: " + moment(result.datetime).format("MM/DD/YYYY")
                // "other thing: " + genres.join(", "),

            ].join("\n\n");

            // Append concertData and the divider to log.txt, print concertData to the console
            fs.appendFile("log.txt", concertData + divider, function (err) {
                if (err) throw err;

            });
        });
    };


    // Create the Spotify call

    this.findSong = function (song) {

        //Create a new Spotify object
        var spotify = new Spotify(keys.spotify);
        spotify.search({ type: 'track', query: song }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }


            var result = data.tracks.items[0];
            console.log(result);
            //data.tracks.items[0].artists[0].name

            // songData ends up being the string containing the song data we will print to the console


            console.log("Artist name " + result.artists[0].name);
            console.log("Song Name: " + result.name);
            console.log("Preview Link: " + result.preview_url);
            console.log("Album: " + result.album.name);

            var songData = [
                "Song Name: " + result.name,
                "Artist name " + result.artists[0].name,
                "Album: " + result.album.name,
                "Preview Link: " + result.preview_url,

            ].join("\n\n");

            // Append  songData and the divider to log.txt, print songData to the console
            fs.appendFile("log.txt", songData + divider, function (err) {
                if (err) throw err;

            });

        });

    }

    //create movie search

    this.findMovie = function (movie) {

        // Then run a request to the OMDB API with the movie specified
        var URL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

        request(URL, function (error, response, body) {

            // If the request is successful (i.e. if the response status code is 200)
            if (!error && response.statusCode === 200) {

                // Parse the body of the site and print details to command line
                var result = JSON.parse(body);
                console.log(result);

                console.log("Movie title: " + result.Title);
                console.log("Year Released: " + result.Year);
                console.log("IMDB Rating: " + result.imdbRating);
                console.log("Rotten Tomatoes Rating: " + result.Ratings[1].Value);
                console.log("Country where produced: " + result.Country);
                console.log("Language: " + result.Language);
                console.log("Plot: " + result.Plot);
                // console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
               
               
                // movieData ends up being the string containing the movie data we will print to the console
                var movieData = [
                    "Movie title: " + result.Title,
                    "Year Released: " + result.Year,
                    "IMDB Rating: " + result.imdbRating,
                    "Rotten Tomatoes Rating: " + result.Ratings[1].Value,
                    "Country where produced: " + result.Country,
                    "Language: " + result.Language,
                    "Plot: " + result.Plot,

                ].join("\n\n");

                // Append movieData and the divider to log.txt, print movieData to the console
                fs.appendFile("log.txt", movieData + divider, function (err) {
                    if (err) throw err;

                });

            }
        });


    }

}
module.exports = Command;



