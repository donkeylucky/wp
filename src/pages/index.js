/********
 所有业务页面入口
 ********/

// 批量载入 pages 文件夹下的所有非 "demo-" "_" "index" 开头的js文件
// 约定 : pages中的私有方法请用"下划线开头"以免被打包到组件中 他的路由文件也必须写成"_route.js"要不路由无法动态加载
const PAGES = (r => {
    return r.keys().map(key => r(key))
})(require.context('./', true, /^\.\/.*\/(?!demo-|_|index).*\.(js)$/))

const PAGES_MODULE = angular.module('pages', [])

PAGES.map(item => {
    // 并全部注入到 pages 这个 component 下
    PAGES_MODULE.component(item.default.name, item.default)
})

export default PAGES_MODULE
