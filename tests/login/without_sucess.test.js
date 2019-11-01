module.exports = {

    // before: (browser) => {
    //     browser
    //     //.resizeWindow(1366, 768)
    // },

    after: (browser) => {
        browser
            .end();
    },

    'Wrong password': (browser) => {
        let login = browser.page.login()

        login
            .navigate()
            .waitForElementVisible('@form', 3000)
            .setValue('@emailInput', 'zumbi@dospalmares.com')
            .setValue('@passInput', '123abc')
            .click('@loginButton')
            .waitForElementVisible('@alertDanger', 3000)
            .assert.containsText('@alertDanger', 'Usuário e/ou senha inválidos')
    },

    'Wrong e-mail': (browser) => {
        let login = browser.page.login()

        login
            .navigate()
            .waitForElementVisible('@form', 3000)
            .setValue('@emailInput', 'zumbi@zumbi.com')
            .setValue('@passInput', '123abc')
            .click('@loginButton')
            .waitForElementVisible('@alertDanger', 3000)
            .assert.containsText('@alertDanger', 'Usuário e/ou senha inválidos')

    },

    'E-mail blank': (browser) => {
        let login = browser.page.login()

        login
            .navigate()
            .waitForElementVisible('@form', 3000)
            .setValue('@emailInput', '')
            .setValue('@passInput', '123abc')
            .click('@loginButton')
            .waitForElementVisible('@alertInfo', 3000)
            .assert.containsText('@alertInfo', 'Opps. Cadê o email?')
    },

    'Password blank': (browser) => {
        let login = browser.page.login()

        login
            .navigate()
            .waitForElementVisible('@form', 3000)
            .setValue('@emailInput', 'zumbi@dospalmares.com')
            .setValue('@passInput', '')
            .click('@loginButton')
            .waitForElementVisible('@alertInfo', 3000)
            .assert.containsText('@alertInfo', 'Opps. Cadê a senha?')
    }
}