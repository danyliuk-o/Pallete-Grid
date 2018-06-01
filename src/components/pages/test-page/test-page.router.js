(() => {
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', $stateProvider => {
            $stateProvider.state('testPage', {
                url: '/test',
                template: `<app><test-page></test-page></app>`
            });
        }]);
})();
