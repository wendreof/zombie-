let movieData = {}

module.exports = {

    before: function(browser) {

        movieData = {
            title: 'Resident Evil',
            status: 'Available',
            year: 2002,
            releaseDate: '01/05/2002',
            cast: [
                'Milla Jovovich',
                'Ali Larter',
                'Ian Glen',
                'Shawn Roberts'
            ],
            cover: 'resisent-evil-2002.jpg',
            plot: 'The Alice and squad mission is to turn down the Red Queen and colect datas',
        }

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
            .click('@addButton')
            .waitForElementVisible('@movieForm', 3000)
            .setValue('@titleInput', movieData.title)
            .pause(5000)
    }
}