const _ = require('lodash');

var documents = [
    {
        source: '_ouragan-sources/twig/pages/home.twig',
        output: 'public/home.html',

        /* Enable or disable automatic minification for normal mode or --dev mode. */
        minify: {
            prod: true,
            dev: false,
            options: {
                /* Override html-minifier options: https://www.npmjs.com/package/html-minifier */
            }
        },

        /* Enable or disable automatic prettyfication for normal mode or --dev mode. */
        /* Note: If both minify and prettify are enabled, the output file will be minified. */
        prettify: {
            prod: false,
            dev: true,
            options: {
                /* Override pretty options: https://www.npmjs.com/package/pretty */
            }
        },

        twig: {
            namespaces: {},

            variables: {
                // 'name': 'value'

                /* You cannot use the following variable(s) names :
                   settings
                */
            }
        },

        html_validation: {
            enable: true,
            options: {
                /* Override html-validation options: https://www.npmjs.com/package/html-validator */
                /* Options "format", "url" and "data" cannot be overridden. */
            }
        }
    },

    {
        source: '_ouragan-sources/twig/pages/mag-garage.twig',
        output: 'public/mag-garage.html',

        /* Enable or disable automatic minification for normal mode or --dev mode. */
        minify: {
            prod: true,
            dev: false,
            options: {
                /* Override html-minifier options: https://www.npmjs.com/package/html-minifier */
            }
        },

        /* Enable or disable automatic prettyfication for normal mode or --dev mode. */
        /* Note: If both minify and prettify are enabled, the output file will be minified. */
        prettify: {
            prod: false,
            dev: true,
            options: {
                /* Override pretty options: https://www.npmjs.com/package/pretty */
            }
        },

        twig: {
            namespaces: {},

            variables: {
                // 'name': 'value'

                /* You cannot use the following variable(s) names :
                   settings
                */
            }
        },

        html_validation: {
            enable: true,
            options: {
                /* Override html-validation options: https://www.npmjs.com/package/html-validator */
                /* Options "format", "url" and "data" cannot be overridden. */
            }
        }
    },

    {
        source: '_ouragan-sources/twig/pages/post-list.twig',
        output: 'public/post-list.html',

        /* Enable or disable automatic minification for normal mode or --dev mode. */
        minify: {
            prod: true,
            dev: false,
            options: {
                /* Override html-minifier options: https://www.npmjs.com/package/html-minifier */
            }
        },

        /* Enable or disable automatic prettyfication for normal mode or --dev mode. */
        /* Note: If both minify and prettify are enabled, the output file will be minified. */
        prettify: {
            prod: false,
            dev: true,
            options: {
                /* Override pretty options: https://www.npmjs.com/package/pretty */
            }
        },

        twig: {
            namespaces: {},

            variables: {
                // 'name': 'value'

                /* You cannot use the following variable(s) names :
                   settings
                */
            }
        },

        html_validation: {
            enable: true,
            options: {
                /* Override html-validation options: https://www.npmjs.com/package/html-validator */
                /* Options "format", "url" and "data" cannot be overridden. */
            }
        }
    },

    {
        source: '_ouragan-sources/twig/pages/post-detail.twig',
        output: 'public/post-detail.html',

        /* Enable or disable automatic minification for normal mode or --dev mode. */
        minify: {
            prod: true,
            dev: false,
            options: {
                /* Override html-minifier options: https://www.npmjs.com/package/html-minifier */
            }
        },

        /* Enable or disable automatic prettyfication for normal mode or --dev mode. */
        /* Note: If both minify and prettify are enabled, the output file will be minified. */
        prettify: {
            prod: false,
            dev: true,
            options: {
                /* Override pretty options: https://www.npmjs.com/package/pretty */
            }
        },

        twig: {
            namespaces: {},

            variables: {
                // 'name': 'value'

                /* You cannot use the following variable(s) names :
                   settings
                */
            }
        },

        html_validation: {
            enable: true,
            options: {
                /* Override html-validation options: https://www.npmjs.com/package/html-validator */
                /* Options "format", "url" and "data" cannot be overridden. */
            }
        }
    }
];

module.exports = documents;
