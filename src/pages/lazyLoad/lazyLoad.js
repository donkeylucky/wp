import tem from './tpl.html'
import lazyLoad from './_ctrl.js'

export default {
    name: 'lazyLoad',
    template: tem,
    controller: lazyLoad,
    controllerAs: 'ctrl' // controllerAs相当于在html上挂了ng-controller
}
