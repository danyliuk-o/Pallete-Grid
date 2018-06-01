(() => {
    'use strict';
    class Header {
        constructor(homelist) {
            this.github = homelist.github;
        }
    }

    angular
        .module('app')
        .component('headerSection', {
            templateUrl: 'components/shared/header-section/header-section.html',
            controller: Header
        });
})();
