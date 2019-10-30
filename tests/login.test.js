module.exports = {
    'login com sucesso': function(browser) {

        var userInfo = `.user .info span`;

        browser
        //.resizeWindow(1366, 768)
            .url('localhost:5000/login')
            .waitForElementVisible('.card-login', 3000)
            .setValue('input[name=email]', 'zumbi@dospalmares.com')
            .setValue('input[name=password]', 'pwd123')
            .click('.login-button')
            .waitForElementVisible(userInfo, 3000)
            .assert.containsText(userInfo, 'Quilombo')
            .end();
    }
}