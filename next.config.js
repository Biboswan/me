//const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withTM = require('next-transpile-modules')(['three']);

module.exports = withTM(
    withImages({
        webpack(config) {
            return config;
        },
    })
);
/** 
 *  ,webpack: config => {
            config.module.rules.push({
                test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                    },
                },
            });

            return config;
        }
 */
