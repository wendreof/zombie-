var loginActions = {
    with: function(email, pwd) {
        return this
            .navigate()
            .waitForElementVisible('@form', 3000)
            .setValue('@emailInput', email)
            .setValue('@passInput', pwd)
            .click('@loginButton')
    }
}

module.exports = {
    url: 'http://localhost:5000/login',
    commands: [loginActions],
    elements: {
        form: '.card-login',
        emailInput: 'input[name=email]',
        passInput: 'input[name=password]',
        loginButton: '.login-button',
        alertDanger: '.alert-danger',
        alertInfo: '.alert-info'
    }
}