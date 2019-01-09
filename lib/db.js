const { model, connect, Schema, connection }  = require('mongoose');

// mongoose.connect('mongodb://localhost/dotball');


const movies = model('dotball', new Schema({ Title: String,
    Year: String,
    Rated: String,
    Released: String,
    Runtime: String,
    Genre: String,
    Director: String,
    Writer: String,
    Actors: String,
    Plot: String,
    Language: String,
    Country: String,
    Awards: String,
    Poster: String,
    Ratings: String,
    Metascore: String,
    imdbRating: String,
    imdbVotes: String,
    imdbID: String,
    Type: String,
    DVD: String,
    BoxOffice: String,
    Production: String,
    Website: String,
    Response: String
}));


function connectToDb() {
    return connect( 'mongodb://localhost/dot')
}

module.exports = { movies, connectToDb, connection };