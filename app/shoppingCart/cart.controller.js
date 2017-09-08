angular.module("cart").
controller("cartController", ["$scope", "$rootScope", "$location", "cartService",
    function ($scope, $rootScope, $location, cartService) {

        $scope.totalSum = cartService.totalSumCalc();

        $scope.checkout = function () {
            $scope.orderText = "";
            cartService.checkout($rootScope.internalcustomerId).then(function success() {
                    if(cartService.returnCart().length == 0){
                        $scope.orderText = "You can't proceed without any products."
                    }
                    else {
                        $scope.orderText = "Purchase completed.";
                        cartService.emptyCart();
                        $scope.totalSum = 0;
                    }

                }, function error() {
                    $scope.orderText = "Something went wrong."
                }
            )
        };


        $scope.addToCart = function (product) {
            cartService.addToCart(product);
            console.log(cartService.returnCart())
        };

        $scope.cart = cartService.returnCart();

        $scope.emptyCart = function () {
            cartService.emptyCart();
            $scope.totalSum = 0;
        };
    }]);