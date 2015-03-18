requirejs.config({

    paths: {
        jquery : 'jquery.min',
        angular: 'angular.min'
    },

    shim: {
        angular: {
            deps   : ['jquery'],
            exports: 'angular'
        }
    }

});

requirejs(['angular'], function (angular) {

    console.log('GO');

    angular.module('myApp', [])
        .controller('MyController', ['$scope', '$http', function ($scope, $http) {
            $scope.greetMe = 'World';

            $scope.newItem = undefined;

            $scope.items = [1, 2, 3];
            $scope.repos = [];

            $scope.loadRepos = function () {
                $http.get('https://api.github.com/repositories')
                    .then(function (repos) {
                        $scope.repos = repos.data;
                    });
            };


            $scope.add = function () {
                $scope.items.push($scope.newItem);
            }
        }]);

    angular.element('.js-app').ready(function () {
        angular.bootstrap(angular.element('.js-app'), ['myApp']);
    });
});