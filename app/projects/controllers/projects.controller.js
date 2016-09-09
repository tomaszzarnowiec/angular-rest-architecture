(function() {
    'use strict';

    angular
        .module('projectsModule')
        .controller('ProjectsController', ProjectsController);

    ProjectsController.$inject = ['$scope'];

    /* @ngInject */
    function ProjectsController($scope) {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();
