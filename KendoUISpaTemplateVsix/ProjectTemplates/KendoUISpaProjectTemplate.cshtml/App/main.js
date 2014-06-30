require.config({
    paths: {
        'text': '../Scripts/text',
        'kendo': 'vendor/kendo/kendo',
        'app': 'app'
    },
    shim: {
        'app': {
            deps: [ 'kendo' ]
        }
    }
});

define([
    'app'
], function (app) {
    app.start();
});