(() => {
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', $stateProvider => {
            $stateProvider.state('home', {
                url: '/',
                template: '<app><home-page></home-page></app>'
            });
        }]);
})();
