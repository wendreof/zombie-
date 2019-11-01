module.exports = {

    // beforeEach: (browser, done) => {
    //     browser
    //     //.resizeWindow(1366, 768)
    //    done()
    // },

    afterEach: (browser, done) => {
        browser
            .end()
        done()
    }
}