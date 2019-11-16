module.exports = {

    '@tags': ['smoke'],

    'Success login': (browser) => {

        let login = browser.page.login()
        let sidebar = browser.page.sidebar()

        login
            .with('zumbi@dospalmares.com', 'pwd123')

        sidebar
            .expectLoggedUser('Quilombo')
    }
}