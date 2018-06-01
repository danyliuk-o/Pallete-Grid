(() => {
    'use strict';

    class ColorBlender {
        blend(newColor, currentColor) {
            const newColorArray = newColor.split(',');
            const currentColorArray = currentColor.split(',');
            let temporaryArr = [];
            angular.forEach(newColorArray, (color, i) => {
                const blendedChannel = ((Number(color) + Number(currentColorArray[i])) / 2).toFixed(0);
                temporaryArr = [...temporaryArr, blendedChannel];
            });
            const blendedColor = temporaryArr.join(',');
            return blendedColor;
        }
    }

    angular
        .module('app')
        .service('colorBlender', ColorBlender);
})();
