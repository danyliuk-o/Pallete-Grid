(() => {
    'use strict';
    class TestPage {
        constructor(constants, $scope) {
            this.constants = constants;
            this.$scope = $scope;
            this.colors = constants.colors;
            this.resetData();
        }

        setNewColor(color, $index, $parentIndex, onDrop) {
            this.rows[$parentIndex][$index] = color;
            if (onDrop) {
                this.$scope.$apply();
            }
        }

        setRowNewColor(color, $index) {
            this.rows[$index] = this.rows[$index].map(() => color);
        }

        resetData() {
            this.rows = new Array(this.constants.rows);
            for (let i = 0; i < this.constants.rows; i++) {
                this.rows[i] = new Array(this.constants.cols);
                for (let j = 0; j < this.rows[i].length; j++) {
                    // easiest way for saving data in FireBase
                    this.rows[i][j] = '';
                }
            }
        }

        onReset() {
            this.resetData();
        }

        onLoad(data) {
            this.rows = data[0];
        }
    }

    angular
        .module('app')
        .component('testPage', {
            templateUrl: 'components/pages/test-page/test-page.html',
            controller: TestPage
        });
})();
