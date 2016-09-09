(function() {
    'use strict';

    angular
        .module('usersModule')
        .controller('UsersController', UsersController);

    UsersController.$inject = ['$scope'];

    /* @ngInject */
    function UsersController($scope) {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();
