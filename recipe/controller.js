/**
 * Created by swanand on 11/9/16.
 */
(function() {

    var myapp = angular.module('myapp', []);
    myapp.controller('productController', function($scope) {
        $scope.listProducts = [{
            recipe: 'chicken tikka',
            ig: 'chicken, tikka, masala '
        }, {
            recipe: 'pizza',
            ig: 'bread, veggies '
        }, {
            recipe: 'burger',
            ig: 'patty, bread'
        }, {
            recipe: 'something',
            ig: ' smehi'
        }];

        $scope.add = function() {
            $scope.listProducts.push({
                recipe: $scope.recipe,
                ig: $scope.ig
            });
            $scope.recipe = '',
                $scope.ig = '';
        };

        $scope.edit = function() {
            var index = getSelectedIndex($scope.recipe);
            $scope.listProducts[index].ig = $scope.ig;
        };


        $scope.selectEdit = function(recipe) {
            var index = getSelectedIndex(recipe);
            var product = $scope.listProducts[index];
            $scope.recipe = product.recipe;
            $scope.ig = product.ig;
        };

        $scope.del = function(recipe) {
            var index = getSelectedIndex(recipe);
            $scope.listProducts.splice(index, 1);
        };

        function getSelectedIndex(recipe) {

            for (var i = 0; i < $scope.listProducts.length; i++) {
                if ($scope.listProducts[i].recipe == recipe) {
                    return i;
                } else {
                    return -1;
                }
            }
        }

    });

})();