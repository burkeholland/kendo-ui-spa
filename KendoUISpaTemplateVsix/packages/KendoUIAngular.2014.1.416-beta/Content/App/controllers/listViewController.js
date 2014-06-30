define([
    './module'
], function (module, productDataSource) {

    module.controller('listViewController', ['$scope', 'productDataSource',
        function ($scope, productDataSource) {
            $scope.title = 'ListView';
            $scope.template = kendo.template($("#template").html());
            $scope.dataSource = productDataSource;
        }
    ]);
});
