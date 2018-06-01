(() => {
    'use strict';
    class DragBarItem {
        constructor($element) {
            this.el = $element;
            $element[0].addEventListener('dragstart', this.dragStart, false);
        }

        dragStart(e) {
            e.dataTransfer.setData('color', this.getAttribute('data-color'));
        }
    }

    angular
        .module('app')
        .component('dragBarItem', {
            controller: DragBarItem
        });
})();
