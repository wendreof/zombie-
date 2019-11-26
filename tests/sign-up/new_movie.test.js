var postgre = require('../../lib/db')

let movieData = {}

module.exports = {

    before: function(browser) {

        movieData = {
            title: 'Resident Evil',
            status: 'Disponível',
            year: 2002,
            releaseDate: '01/05/2002',
            cast: [
                'Milla Jovovich',
                'Ali Larter',
                'Ian Glen',
                'Shawn Roberts'
            ],
            cover: 'resident-evil-2002.jpg',
            plot: 'The Alice and squad mission is to turn down the Red Queen and colect datas',
        }

        postgre.removeByTitle(movieData.title);

        let login = browser.page.login()

        let sidebar = browser.page.sidebar()

        login
            .with('zumbi@dospalmares.com', 'pwd123')

        sidebar
            .expectLoggedUser('Quilombo')
    },

    'When I try to register a movie': function(browser) {
        let movie = browser.page.movie()

        movie
            .createForm()
            .setValue('@titleInput', movieData.title)
            .selectStatus(movieData.status)
            .setValue('@yearInput', movieData.year)
            .setValue('@dateInput', movieData.releaseDate)
            .insertCast(movieData.cast)
            .setValue('@plotInput', movieData.plot)
            .uploadCover(movieData.cover)
            .pause(5000)
            .click('@createButton')
    },

    'Then I want to take a look at movie': function(browser) {
        let movie = browser.page.movie()

        movie
            .waitForElementPresent('@list', 10000)
            .assert.containsText('@list', movieData.title)
    }
}