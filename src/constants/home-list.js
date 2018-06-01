(() => {
    'use strict';
    const list = {
        technologies: [
            'Angular 1.5 (component-oriented)',
            'Firebase + AngularFire (for data savig)',
            'UI-Router',
            'Gulp',
            'ES6 via Babel',
            'Packet managers (npm, bower)',
            'Less',
            'HTML/JS/CSS minification, uglification, concatenation',
            'Sourcemaps'
        ],
        github: 'https://github.com/MrRatusha/Pallete'
    };

    angular
        .module('app')
        .constant('homelist', list);
})();
