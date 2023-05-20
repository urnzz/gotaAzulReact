// craco.config.js
const path = require("path");

module.exports = {
    webpack: {
        configure: {
            resolve: {
                fallback: {
                    "http": require.resolve("stream-http"),
                    "https": require.resolve("https-browserify"),
                    "stream": require.resolve("stream-browserify"),
                    "zlib": require.resolve("browserify-zlib")
                }
            }
        }
    }
};
