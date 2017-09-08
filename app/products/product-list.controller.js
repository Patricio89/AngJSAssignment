angular.module("product").controller("productListController", ["$scope", "$routeParams", "$location", "productService",
    function ($scope, $routeParams, $location, productService) {

    var allProducts;

    productService.getProducts().then(function (response) {
        allProducts = response.data;
        $scope.products = response.data;
    });

    $scope.productClicked = function (id) {
        $location.path("/product/" + id);
    };

        productService.getCategories().then(function (response) {
            var categories = response.data;
            $scope.categories = categories;
        });

}]);