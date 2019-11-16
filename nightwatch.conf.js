//require('babel-core/register')

const chromedriver = require('chromedriver')

module.exports = {
    src_folders: ['tests'],

    page_objects_path: './pages',
    globals_path: './hooks/globals.js',

    webdriver: {
        start_process: true,
        server_path: chromedriver.path,
        port: 9515
    },

    test_workers: {
        enabled: true,
        workers: 4
    },

    test_settings: {
        default: {
            launch_url: "http://localhost:5000",
            globals: {
                waitForConditionTimeout: 15000
            },
            desiredCapabilities: {
                browserName: "Chrome"
            }
        },

        stage: {
            launch_url: "http://somestage.com.br",
        }
    }
}