//require('babel-core/register')

const chromedriver = require('chromedriver')

module.exports = {
    src_folders: ['tests'],

    webdriver: {
        start_process: true,
        server_path: chromedriver.path,
        port: 9515
    },

    test_settings: {
        default: {
            desiredCapabilities: {
                browserName: "Chrome"
            }
        }
    }
}