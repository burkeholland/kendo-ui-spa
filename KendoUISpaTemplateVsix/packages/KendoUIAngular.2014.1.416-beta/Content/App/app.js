define([
    './controllers/index',
    './services/index'
], function (controllers, index) {

    // the actual angular application module, passing
    // in all other modules needed for the application
    return angular.module('app', [
        'ngRoute',
        'kendo.directives',
        'app.controllers',
        'app.services'
    ]);

});