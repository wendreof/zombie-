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
    }
}