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
        workers: 4
    },

    // screenshots: {
    //     enabled: true,
    //     on_failure: true,
    //     on_error: true,
    //     path: "tests_output/"
    // },

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
                waitForConditionTimeout: defaultTimeout // As vezes a conexão com a internet/rede fica lenta
            },
            webdriver: {
                server_path: chromedriver.path,
                port: 9515
            },
            desiredCapabilities: {
                browserName: "chrome",
                chromeOptions: {
                    w3c: false,
                    args: ['--headless', '--no-sandbox', '--disable-dev-shm-usage']
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