module.exports = {
    'login com sucesso': function(browser) {
        browser
        //.resizeWindow(1366, 768)
            .url('localhost:5000/login')
            .waitForElementVisible('.card-login', 3000)
            .setValue('input[name=email]', 'zumbi@dospalmares.com')
            .setValue('input[name=password]', 'pwd123')
            .click('.login-button')
            .waitForElementVisible('.user .info span', 3000)
            .assert.containsText('.user .info span', 'Quilombo')
            .end();
    }
}