var createActions = {
    createForm: function() {
        return this
            .click('@addButton')
            .waitForElementVisible('@movieForm', 3000)
    },
    selectStatus: function(status) {
        return this
            .click('@statusSelect')
            .useXpath()
            .waitForElementVisible(`//li//span[contains(text(),"${status}")]`, 4000)
            .click(`//li//span[contains(text(),"${status}")]`)
            .useCss()
    },
    insertCast: function(cast) {
        const browser = this

        cast.forEach(function(actor) {
            browser
                .setValue('@castInput', cast)
                .api.keys(browser.api.Keys.TAB)
        })

        return this
    }
}

module.exports = {
    commands: [createActions],
    elements: {
        addButton: '.movie-add',
        movieForm: '#movie-form',
        titleInput: 'input[name=title]',
        statusSelect: 'input[placeholder=Status]',
        yearInput: 'input[name=year]',
        dateInput: 'input[name=release_date]',
        castInput: '.cast',
        plotInput: 'textarea[name=overview]',
        createButton: '#create-movie'
    }
}