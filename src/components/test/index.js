import tem from './test.html'
import testCtrl from './test'
export default angular.module('test', []).component('test', {
    template: tem,
    controller: testCtrl,
    controllerAs: 'ctrl'
}).name
