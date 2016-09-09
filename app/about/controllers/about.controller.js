(function() {
    'use strict';

    angular
        .module('aboutModule')
        .controller('AboutController', AboutController);

    AboutController.$inject = ['$scope'];

    /* @ngInject */
    function AboutController($scope) {
        var vm = this;

        activate();

        function activate() {
            alert('about!');
        }
    }
})();
