module.exports = {

    'Wrong password!': (browser) => {
        let login = browser.page.login()

        login
            .with('zumbi@dospalmares.com', '123abc')
            .expectAlertDanger('Usuário e/ou senha inválidos')
    }
}