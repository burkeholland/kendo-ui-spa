define([
    './app'
], function (app) {

    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/home',
            {
                templateUrl: '/app/partials/home.html',
                controller: 'homeController'
            })
            .when('/details',
            {
                templateUrl: '/app/partials/details.html',
                controller: 'detailsController'
            })
            .when('/samples/listview',
            {
                templateUrl: '/app/partials/listview.html',
                controller: 'listViewController'
            })
            .otherwise(
            {
                redirectTo: '/home'
            });

    }]);
});