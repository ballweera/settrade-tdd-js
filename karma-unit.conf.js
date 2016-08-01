'use strict';

module.exports = function (config) {
    config.set({
        frameworks: ['jasmine'],
        browsers: ['Chrome'],
        files: [
            'app.js',

            'spec/**/*.js'
        ]
    });
};
