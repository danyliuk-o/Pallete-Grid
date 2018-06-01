(() => {
    'use strict';
    class Home {
        constructor(homelist) {
            this.list = homelist.technologies;
        }
    }

    angular
        .module('app')
        .component('homePage', {
            templateUrl: 'components/pages/home/home.html',
            controller: Home
        });
})();
