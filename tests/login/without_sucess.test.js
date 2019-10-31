module.exports = {
    'Wrong password': (browser) => {

        let alert = `.alert-danger`;

        browser
        //.resizeWindow(1366, 768)
            .url('localhost:5000/login')
            .waitForElementVisible('.card-login', 3000)
            .setValue('input[name=email]', 'zumbi@dospalmares.com')
            .setValue('input[name=password]', '123abc')
            .click('.login-button')
            .waitForElementVisible(alert, 3000)
            .assert.containsText(alert, 'Usuário e/ou senha inválidos')
    },
    'Wrong e-mail': (browser) => {
        let alert = `.alert-danger`;

        browser
        //.resizeWindow(1366, 768)
            .url('localhost:5000/login')
            .waitForElementVisible('.card-login', 3000)
            .setValue('input[name=email]', 'zumbi@zumbi.com')
            .setValue('input[name=password]', '123abc')
            .click('.login-button')
            .waitForElementVisible(alert, 3000)
            .assert.containsText(alert, 'Usuário e/ou senha inválidos')

    },
    'E-mail blank': (browser) => {
        let alert = `.alert-info`;

        browser
        //.resizeWindow(1366, 768)
            .url('localhost:5000/login')
            .waitForElementVisible('.card-login', 3000)
            .setValue('input[name=email]', '')
            .setValue('input[name=password]', '123abc')
            .click('.login-button')
            .waitForElementVisible(alert, 3000)
            .assert.containsText(alert, 'Opps. Cadê o email?')
    },
    'Password blank': (browser) => {
        let alert = `.alert-info`;

        browser
        //.resizeWindow(1366, 768)
            .url('localhost:5000/login')
            .waitForElementVisible('.card-login', 3000)
            .setValue('input[name=email]', 'zumbi@dospalmares.com')
            .setValue('input[name=password]', '')
            .click('.login-button')
            .waitForElementVisible(alert, 3000)
            .assert.containsText(alert, 'Opps. Cadê a senha?')
            .end();
    }
}