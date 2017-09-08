angular.module("app").config(["$routeProvider", "$locationProvider",
    function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/products/product-list.template.html",
            controller: "productListController"
        })
        .when("/login", {
            templateUrl: "app/login/login.template.html",
            controller: "loginController"
        })
        .when("/register",{
            templateUrl: "app/login/create-login.template.html",
            controller: "loginController"
        })
        .when("/product", {
            template: "<productDetailsComponent></productDetailsComponent>"
        })
        .when("/shoppingcart", {
            templateUrl: "app/shoppingCart/shoppingCart.template.html",
            controller: "cartController"
        })
        .otherwise("/");
    $locationProvider.html5Mode(true);
}]);