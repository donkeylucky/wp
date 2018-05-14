import angular from 'angular'
import uiRouter from 'angular-ui-router'
import appRouter from './router/'
import components from './components'

//https://docs.angularjs.org/api/ng/type/angular.Module#name
let appComponent = { restrict: 'E', template: '<div ui-view></div>', controllerAs: 'app' }
angular
    .module('BSMS', [uiRouter, components])
    .config(appRouter)
    .component('app', appComponent)
