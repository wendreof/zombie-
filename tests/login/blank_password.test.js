module.exports = {

    'Blank password!': (browser) => {
        let login = browser.page.login()

        login
            .with('zumbi@dospalmares.com', '')
            .expectAlertInfo('Opps. Cadê a senha?')
    }
}