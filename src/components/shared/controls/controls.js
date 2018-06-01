(() => {
    'use strict';
    class Controls {
        constructor(api) {
            this.api = api;
            this.cloudData = this.api.$fa(this.api.getData('dataColors').limitToLast(1));
        }

        save() {
            this.api.setData(this.cloudData, this.newData);
        }
    }

    angular
        .module('app')
        .component('controls', {
            controller: Controls,
            templateUrl: 'components/shared/controls/controls.html',
            bindings: {
                reset: '&',
                load: '&',
                newData: '<'
            }
        });
})();
