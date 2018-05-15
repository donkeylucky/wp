import PAGES_MODULE from '../index'
import tem from './tpl.html'
import lazyLoad from './_ctrl.js'

const LAZY = PAGES_MODULE

PAGES_MODULE.component('lazy', {
    name: 'lazyLoad',
    template: tem,
    controller: lazyLoad,
    controllerAs: 'ctrl'
})

export default LAZY
