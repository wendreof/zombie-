//require('babel-core/register')

const chromedriver = require('chromedriver')
require('geckodriver')

const testURL = 'http://localhost:5000';
const defaultTimeout = 15000;

module.exports = {
    src_folders: ['tests'],

    page_objects_path: './pages',
    globals_path: './hooks/globals.js',

    webdriver: {
        start_process: true,
    },

    test_workers: {
        enabled: true,
        workers: 2
    },

    test_settings: {
        default: {
            launch_url: testURL,
            globals: {
                waitForConditionTimeout: defaultTimeout
            },
            webdriver: {
                server_path: chromedriver.path,
                port: 9515
            },
            desiredCapabilities: {
                browserName: "Chrome"
            }
        },

        headless: {
            launch_url: testURL,
            globals: {
                waitForConditionTimeout: defaultTimeout
            },
            webdriver: {
                server_path: chromedriver.path,
                port: 9515
            },
            desiredCapabilities: {
                browserName: "Chrome",
                chromeOptions: {
                    w3c: false,
                    args: ['--headless', '--no-sandbox']
                }
            }
        },


        firefox: {
            launch_url: testURL,
            globals: {
                waitForConditionTimeout: defaultTimeout
            },
            webdriver: {
                server_path: './node_modules/.bin/geckodriver',
                port: 4444
            },
            desiredCapabilities: {
                browserName: "firefox",
                acceptInsecureCerts: true
            }
        },

        stage: {
            launch_url: "http://somestage.com.br",
        }
    }
}