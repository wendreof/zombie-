module.exports = {
    'login com sucesso': function(browser) {
        browser.url('localhost:5000/login').waitForElementVisible('.card-login')
    }
}