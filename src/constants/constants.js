(() => {
    'use strict';
    const constants = {
        colors: [{
            rgb: '255,0,0'
        }, {
            rgb: '255,128,0'
        }, {
            rgb: '255,255,0'
        }, {
            rgb: '128,255,0'
        }, {
            rgb: '0,255,255'
        }, {
            rgb: '0,0,255'
        }, {
            rgb: '128,0,255'
        }, {
            rgb: '255,255,255'
        }, {
            rgb: '0,0,0'
        }],
        rows: 10,
        cols: 10
    };

    angular
        .module('app')
        .constant('constants', constants);
})();
