module.exports = {
    'Success login': (browser) => {

        let login = browser.page.login()
        let sidebar = browser.page.sidebar()

        login
            .with('zumbi@dospalmares.com', 'pwd123')

        sidebar
            .waitForElementVisible('@userInfo', 3000)
            .assert.containsText('@userInfo', 'Quilombo')
            .end();
    }
}