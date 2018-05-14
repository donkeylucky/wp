import tem from './test.html'
import testCtrl from './_testCtrl.js'
export default angular.module('ui-test', []).component('ui-test', {
    template: tem,
    controller: testCtrl,
    controllerAs: 'ctrl'
}).name
