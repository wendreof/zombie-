module.exports = {

    // beforeEach: (browser, done) => {
    //     browser
    //         .resizeWindow(1366, 768)
    //     done()
    // },

    afterEach: (browser, done) => {

        const faker = require('faker')

        let shotPath = `./tests_output/screenshots/${faker.random.uuid()}.png`

        browser
            .saveScreenshot(shotPath, function() {
                const assertions = browser.currentTest.results.assertions || [];
                if (assertions.length > 0) {
                    const currentAssertion = assertions[assertions.length - 1];
                    if (currentAssertion) {
                        currentAssertion.screenshots = currentAssertion.screenshots || [];
                        currentAssertion.screenshots.push(shotPath);
                    }
                }
            })
            .end()
        done()
    }
}