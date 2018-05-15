import tem from './tpl.html'
import welcomeCtrl from './_ctrl.js'

export default {
    name: 'welcome',
    template: tem,
    controller: welcomeCtrl,
    controllerAs: 'ctrl' // controllerAs相当于在html上挂了ng-controller
}
