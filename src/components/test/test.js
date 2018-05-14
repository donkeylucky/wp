import tem from './test.html'
import testCtrl from './_testCtrl.js'
export default angular.module('uiTest', []).component('uiTest', {
    template: tem,
    controller: testCtrl,
    controllerAs: 'ctrl'
}).name
