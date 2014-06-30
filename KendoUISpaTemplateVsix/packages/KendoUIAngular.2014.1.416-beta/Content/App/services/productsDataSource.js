define([
    './module'
], function (module) {

    module.factory('productDataSource',
    function () {
        return new kendo.data.DataSource({
            transport: {
                read: {
                    url: "http://demos.telerik.com/kendo-ui/service/Products",
                    dataType: "jsonp"
                }
            },
            pageSize: 15
        });
    });
});


