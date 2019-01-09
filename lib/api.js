const request = require('request');

class MoviesApi {

    /**
     * Get the movie details
     *
     * @param name
     */
    static getMovies(name) {
        console.log(`Fetching "${name}" movie details from api`);

        let api = `http://www.omdbapi.com/?t=${name}&apikey=67c2f696`;

        return new Promise((resolve, reject) => {
                return request(api, function (error, response, body) {
                    if (error) return reject(error);

                    resolve(JSON.parse(body));
                });
            });
    }
}

module.exports = { MoviesApi };