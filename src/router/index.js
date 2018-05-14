routing.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider']
export default function routing($stateProvider, $locationProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home')
    $stateProvider
        .state({
            name: 'home',
            url: '/home',
            template: `<h1 >home <button ui-sref="test">打开test页面</button></h1>`
        })
        .state({
            name: 'test',
            url: '/test',
            component: 'uiTest'
        })
        .state({
            name: 'welcome',
            url: '/welcome',
            component: 'welcome'
        })
}
