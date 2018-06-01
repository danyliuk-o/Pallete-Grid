(() => {
    'use strict';

    const conf = () => {
        const config = {
            apiKey: 'AIzaSyBdElWlTsRjk4hIgDfIyfYQ7rgHH_IAYKc',
            authDomain: 'pallete-52db9.firebaseapp.com',
            databaseURL: 'https://pallete-52db9.firebaseio.com',
            storageBucket: 'pallete-52db9.appspot.com',
            messagingSenderId: '800852899080'
        };
        firebase.initializeApp(config);
    };

    angular
        .module('app')
        .run([conf]);
})();
