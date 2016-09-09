(function() {
    'use strict';

    angular
        .module('s200App')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope'];

    /* @ngInject */
    function MainController($scope) {
        var vm = this;
        $scope.mainpage = "mainPAAAAAAAAAAAGE";
        activate();

        function activate() {
            console.log('main ctrl', vm);
        }
    }
})();
