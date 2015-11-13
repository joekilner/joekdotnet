
(function (window, angular, _, undefined)
{
    var app = angular.module("JoekDotNetApp", []);

    app.controller("mainPage", function ($scope, getStuff) {
        $scope.test = "placeholder";
    });

    app.service("getStuff", function ($http) {
        return $http.get("endpoint").then(function (response) {
            return response.data;
        });
    });

})(window, window.angular, window._)

