module.exports = {

    'Wrong password': (browser) => {
        let login = browser.page.login()

        login
            .with('zumbi@dospalmares.com', '123abc')
            .waitForElementVisible('@alertDanger', 3000)
            .assert.containsText('@alertDanger', 'Usuário e/ou senha inválidos')
    },

    'Wrong e-mail': (browser) => {
        let login = browser.page.login()

        login
            .with('zumbi@zumbi.com', '123abc')
            .waitForElementVisible('@alertDanger', 3000)
            .assert.containsText('@alertDanger', 'Usuário e/ou senha inválidos')

    },

    'E-mail blank': (browser) => {
        let login = browser.page.login()

        login
            .with('', '123abc')
            .waitForElementVisible('@alertInfo', 3000)
            .assert.containsText('@alertInfo', 'Opps. Cadê o email?')
    },

    'Password blank': (browser) => {
        let login = browser.page.login()

        login
            .with('zumbi@dospalmares.com', '')
            .waitForElementVisible('@alertInfo', 3000)
            .assert.containsText('@alertInfo', 'Opps. Cadê a senha?')
    }
}