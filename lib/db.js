const Pool = require('pg').Pool;

const user = 'postgres'
const pass = 'qaninja'
const host = 'localhost:5432'
const db = 'zombieplus'

const connectionString = `postgresql://${user}:${pass}@${host}/${db}`
const pgqsl = new Pool({ connectionString: connectionString })

module.exports = {
    removeByTitle: (title) => {
        return new Promise((resolve, reject) => {
            pgqsl
                .query(`DELETE FROM public.movies WHERE title = '${title}';`)
                .then(res => {
                    resolve(res)
                })
                .catch(e => reject(e.stack))
        })
    },

    insertMovie: (movie) => {
        let query = ` INSERT INTO public.movies(
                       title, status,  year, release_date, "cast", overview, cover, created_at, updated_at)
                       VALUES ('${movie.title}', '${movie.status}', '${movie.year}', '${movie.releaseDate}', 
                       '{${movie.cast}}', '${movie.plot}', '${movie.cover}', current_timestamp,
                       current_timestamp);`

        console.log('Minha query', query)

        return new Promise((resolve, reject) => {
            pgqsl
                .query(query)
                .then(res => {
                    resolve(res)
                })
                .catch(e => reject(e.stack))
        })
    }
}