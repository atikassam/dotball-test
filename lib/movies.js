const {movies}  = require("./db");
const {MoviesApi}  = require("./api");

class MovieDetails {

    /**
     * Get the movie details
     *
     * @param name
     */
    getMovies(name) {
        return movies.findOne({ Title: new RegExp(name, 'i')})
            .then((movie) => {
                if (movie) return movie;

                // Add the fallback if movie is not found in the
                // database it should find it from the api
                return MoviesApi.getMovies(name)
                    .then(this.addMovie.bind(this));
            })
    }


    /**
     * Filter the movies with any attribute avail able in movies
     *
     * @param filter it is a pure json object
     * @return {*}
     */
    filterMovie(filter) {
        let query = {};

        for (let field in filter)
            query[field] = new RegExp('.*'+ filter[field] +'.*', 'i');

        console.log(query);
        return movies.find(query);
    }

    /**
     * Store movie in database
     */
    addMovie(movie) {
        return new Promise((resolve, reject) => {
            if (!movie) return { message: 'NO_MOVIES_FOUND' };

            new movies(movie)
                .save((err, doc) => {
                    if ( err ) return reject(err);

                    else resolve(doc);
                })
        })
    }
}

module.exports = new MovieDetails();