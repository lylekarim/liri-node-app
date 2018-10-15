# liri-node-app


## About LIRI

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

- - -

## What it does

LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

- - -

### Prerequisites
[ node.js ](https://nodejs.org/en/)

### How it works

Enter one of the following in the Command line:

   1.  `node liri.js concert-this <artist/band name here>`

     * LIRI returns: 
	     * Name of the venue
         * Venue location
    	 * Date of the Event (use moment to format this as "MM/DD/YYYY")

    * Search results are logged to `log.txt`.


   2. `node liri.js spotify-this-song '<song name here>'`

      * LIRI returns: 
	     * Artist(s)
         * The song's name
	     * A preview link of the song from Spotify
		 * The album that the song is from
	  * If no song is provided then your program will default to "The Sign" by Ace of Base.

     * Search results are logged to `log.txt`.


   3. `node liri.js movie-this '<movie name here>'`
     
      * LIRI returns: 
      	 * Title of the movie.
       	 * Year the movie came out.
       	 * IMDB Rating of the movie.
       	 * Rotten Tomatoes Rating of the movie.
      	 * Country where the movie was produced.
      	 * Language of the movie.
      	 * Plot of the movie.
      	 * Actors in the movie.
  
      * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

      * Search results are logged to `log.txt`.


     - [ ] _101418 incomplete :_ 4. `node liri.js do-what-it-says`
	 
	* LIRI reads the text inside random.txt and uses it to call one of LIRI's commands.

        * `random.txt` contains the text : `spotify-this-song` for "I Want it That Way," 

        * this should run a Spotify search for the song title and return the data set from #1.

- - -



