routing.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider']
export default function routing($stateProvider, $locationProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home')
    $stateProvider
        .state('home', { url: '/home', template: '<h1>home</h1>' })
        .state('test', { url: '/test', template: '<test></test>' })
}
