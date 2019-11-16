module.exports = {

    '@tags': ['404'],

    before: function(browser) {
        let login = browser.page.login()

        let sidebar = browser.page.sidebar()

        login
            .with('zumbi@dospalmares.com', 'pwd123')

        sidebar
            .expectLoggedUser('Quilombo')
    },

    'When I search for a movie not registered': function(browser) {
        let movie = browser.page.movie()

        movie
            .setValue('@searchInput', 'Some movie')
            .click('@searchIcon')
    },

    'Then, I must to see an alert menssage': function(browser) {
        let movie = browser.page.movie()

        movie
            .waitForElementVisible('@alertDanger', 10000)
            .assert.containsText('@alertDanger', 'Puxa! não encontramos nada aqui :(')
    }
}