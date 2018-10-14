
var Command= require("./command.js");

// Create a new Command object
var command = new Command();


// Grab search command line argument
var search = process.argv[2];
// Joining the remaining arguments since an actor or tv concert-this name may contain spaces
var term = process.argv.slice(3).join(" ");

console.log ("term : " + term);

// By default, if no search type is provided, search for a concert-this
if (!search) {
    search = "concert-this";
  }
  
  // By default, if no search term is provided, search for "chainsmokers" because they have lots of concert dates
  if ((search === "concert-this") && (!term)){
    term = "Chainsmokers";
    console.log ("term : " + term);
  }

  if ((search === "spotify-this-song") && (!term)){
      term = "The Sign";
      console.log ("term : " + term);
  }
  
  if ((search === "movie-this") && (!term)){
    term = "Mr. Nobody";
    console.log ("term : " + term);
}

  // Print whether searching for a concert-this or spotify-this-song or movie-this or do-what-it-says, print the term as well
  if (search === "concert-this") {
    console.log("Searching for next concert");
    command.findConcert(term);

  } else if (search === "spotify-this-song") {
    console.log("Searching for Song");
    command.findSong(term);

  } else if (search === "movie-this") {
    console.log("Searching for Movie");
    command.findMovie(term);
    
  } else if (search === "do-what-it-says") {
    console.log("Following Orders");
    command.findAnOrder(term);
  }