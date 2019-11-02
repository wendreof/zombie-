module.exports = {

    'Wrong password': (browser) => {
        let login = browser.page.login()

        login
            .with('zumbi@dospalmares.com', '123abc')
            .expectAlertDanger('Usuário e/ou senha inválidos')
    },

    'Wrong e-mail': (browser) => {
        let login = browser.page.login()

        login
            .with('zumbi@zumbi.com', '123abc')
            .expectAlertDanger('Usuário e/ou senha inválidos')
    },

    'E-mail blank': (browser) => {
        let login = browser.page.login()

        login
            .with('', '123abc')
            .expectAlertInfo('Opps. Cadê o email?')
    },

    'Password blank': (browser) => {
        let login = browser.page.login()

        login
            .with('zumbi@dospalmares.com', '')
            .expectAlertInfo('Opps. Cadê a senha?')
    }
}