define([
    'kendo',
    'views/layout/layout',
    'views/home/home',
    'views/details/details'
], function (kendo, layout, home, details) {

    // the application router
    var router = new kendo.Router({
        init: function () {
        
            // render the layout first
            layout.render("#applicationHost");
        },
        routeMissing: function (e) {
        
            // debug shim writes console errors to the browser dev tools
            debug.error('No Route Found', e.url);
        },
        
        change: function (e) {
            
            // publish an event whenever the route changes
            $.publish('/router/change', [e]);
        }
    });

    // Add new routes here...
    
    router.route('/', function (e) {
        layout.showIn("#content", home);
    });

    router.route('/details', function (e) {
        layout.showIn("#content", details);
    });

    return router;

});