(() => {
    'use strict';

    class API {
        static service(...injections) {
            return new API(...injections);
        }

        constructor($firebaseArray) {
            this.$fa = $firebaseArray;
            this.ref = firebase.database().ref();
        }

        getData(key) {
            return this.ref.child(key);
        }

        setData(parent, data) {
            return parent.$add(data);
        }
    }

    API.service.$inject = [
        '$firebaseArray'
    ];

    angular
        .module('app')
        .service('api', API.service);
})();
