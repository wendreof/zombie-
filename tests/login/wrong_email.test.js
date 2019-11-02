module.exports = {

    'Wrong e-mail!': (browser) => {
        let login = browser.page.login()

        login
            .with('zumbi@zumbi.com', '123abc')
            .expectAlertDanger('Usuário e/ou senha inválidos')
    }
}