
(function (window, angular, _, undefined)
{
    var app = angular.module("JoekDotNetApp", []);

    app.controller("mainPage", function ($scope, getStuff) {
        $scope.test = "placeholder";
        $scope.items = _.map(_.range(10), function (val) {
            return {
                description: "Item " + val
            };
        });
    });

    app.service("getStuff", function ($http) {
        return $http.get("endpoint").then(function (response) {
            return response.data;
        });
    });

})(window, window.angular, window._)

