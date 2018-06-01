(() => {
    'use strict';
    class DropGridCell {
        constructor($element, colorBlender) {
            this.blender = colorBlender;
            $element[0].addEventListener('drop', this.drop.bind(this), false);
            $element[0].addEventListener('dragover', this.dragOver, false);
        }

        drop(e) {
            const thisElement = e.target;
            const currentDataColor = thisElement.getAttribute('data-color');
            let newDataColor = e.dataTransfer.getData('color');
            if (currentDataColor) {
                newDataColor = this.blender.blend(newDataColor, currentDataColor);
            }
            thisElement.setAttribute('data-color', newDataColor);
            this.onDrop({color: newDataColor});
        }

        dragOver(e) {
            e.preventDefault();
        }
    }

    angular
        .module('app')
        .component('dropGridCell', {
            controller: DropGridCell,
            bindings: {
                onDrop: '&'
            }
        });
})();
