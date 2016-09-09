(function() {
    'use strict';

    angular
        .module('s200App')
        .config(['$routeProvider' ,function($routeProvider) {
            $routeProvider.when(
                '/about',{
                    templateUrl: 'app/about/views/about.html',
                    controller: 'AboutController'
                }
            );

            $routeProvider.when(
                '/projects',{
                    templateUrl: 'app/projects/views/projects.html',
                    controller: 'ProjectsController'
                }
            );

            $routeProvider.when(
                '/users',{
                    templateUrl: 'app/users/views/users.html',
                    controller: 'UsersController'
                }
            );

            $routeProvider.otherwise({
                templateUrl: 'app/main/views/main.html',
                controller: 'MainController'
            });
    }]);
})();
