var loginActions = {
    with: function(email, pwd) {
        return this
            .navigate()
            .waitForElementVisible('@form', 3000)
            .setValue('@emailInput', email)
            .setValue('@passInput', pwd)
            .click('@loginButton')
    },
    expectAlertDanger: function(text) {
        return this
            .waitForElementVisible('@alertDanger', 3000)
            .assert.containsText('@alertDanger', text)
    },
    expectAlertInfo: function(text) {
        return this
            .waitForElementVisible('@alertInfo', 3000)
            .assert.containsText('@alertInfo', text)
    }
}

module.exports = {
    url: '/login',
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