module.exports = {

    'Blank e-mail!': (browser) => {
        let login = browser.page.login()

        login
            .with('', '123abc')
            .expectAlertInfo('Opps. Cadê o email?')
    }
}