(() => {
    'use strict';

    angular
        .module('app')
        .component('app', {
            templateUrl: 'components/containers/app/app.html',
            transclude: true
        });
})();
