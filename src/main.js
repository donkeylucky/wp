import angular from 'angular'
// import uiRouter from 'angular-ui-router'   //老路由
import uiRouter from '@uirouter/angularjs'
import appRouter from './router/'
import components from './components'
import ocLazyLoad from 'oclazyload'

import pages from './pages'

// 老母
const BSMS = angular.module('BSMS', [uiRouter, ocLazyLoad, components, pages.name])

// 创建一个路由入口组件
const appComponent = { restrict: 'E', template: '<div ui-view></div>', controllerAs: 'app' }

// 把路由和创建的路由组件注入项目
BSMS.config(appRouter).component('app', appComponent)
