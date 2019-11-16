var postgre = require('../../lib/db')

let movieData = {}

module.exports = {

    before: function(browser) {
        movieData = {
            title: 'Meu Namorado é um Zumbi',
            status: 'Disponível',
            year: 2013,
            releaseDate: '01/05/2013',
            cast: [
                'Nicholas Hoult',
                'Teresa Palmer',
                'Analign Tipton',
                'Rob Corddry'
            ],
            cover: 'meu-namo-zumbi.jpg',
            plot: 'A zombie was inlove with a human.',
        }

        postgre.removeByTitle(movieData.title).then(function() {
            postgre.insertMovie(movieData)
        })

        let login = browser.page.login()

        let sidebar = browser.page.sidebar()

        login
            .with('zumbi@dospalmares.com', 'pwd123')

        sidebar
            .expectLoggedUser('Quilombo')

    },

    'When I search for a movie by title': function(browser) {
        let movie = browser.page.movie()

        movie
            .setValue('@searchInput', movieData.title)
            .click('@searchIcon')

    },

    'Then, I must to see the movie at the list': function(browser) {
        let movie = browser.page.movie()

        movie
            .waitForElementPresent('@tr', 10000)
            //check if the movie exists and is equal one and not return browser/movie context
            .expect.elements('@tr').count.to.equal(1)
        movie.assert.containsText('@tr', movieData.title)

    }
}