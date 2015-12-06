
(function (window, angular, _, undefined)
{
    var app = angular.module("JoekDotNetApp", ['ngMaterial']);

    app.config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('deep-purple')
            .accentPalette('lime');
    });

    app.controller("MainPage", function ($scope, $mdSidenav, getStuff) {
        $scope.test = "placeholder";
        $scope.items = _.map(_.range(10), function (val) {
            return {
                description: "Item " + val
            };
        });

        this.toggleSidenav = function(menuId) {
            $mdSidenav(menuId).toggle();
        };

    });

    app.service("getStuff", function ($http) {
        return $http.get("endpoint").then(function (response) {
            return response.data;
        });
    });

})(window, window.angular, window._)

