const commender  = require('commander');
const movies  = require('./movies');
const {connectToDb, connection} = require("./db");

const program = commender.version('0.0.1');

function main() {
    program
        .command('search <movie>')
        .action((movie) => {
            console.log('Searching for a movie');

            movies.getMovies(movie)
                .then((movie) => {
                    console.log(JSON.stringify(movie, null, '\t'));
                })
        });

    program.command('filter <key> <value>')
        .action((key, value) => {
            console.log('Filter for a movie');

            movies.filterMovie({ [key]: value })
                .then((movies) => {
                    console.log(JSON.stringify(movies, null, '\t'));
                })
        });

    program.parse(process.argv);

}

connectToDb()
    .then(main)
    //.then(() => connection.close());

