// 去把pages文件夹下面的所有的_route.js文件扒出来
const pagesRoutes = (r => {
    return r.keys().map(key => r(key))
})(require.context('../pages', true, /.*_route.js$/))

routing.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider']
export default function routing($stateProvider, $locationProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home')

    //静态路由
    $stateProvider
        .state({
            name: 'home',
            url: '/home',
            template: `<h1 >home <button ui-sref="test">打开test页面</button> | <button ui-sref="welcome">打开welcome页面</button></h1>`
        })
        .state({
            name: 'test',
            url: '/test',
            component: 'uiTest'
        })

    //动态路由
    pagesRoutes.map(o => {
        if (o.default) {
            $stateProvider.state(o.default)
        }
    })
}
