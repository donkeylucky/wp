// import welcome from './welcome'

const pages = (r => {
    return r.keys().map(key => r(key))
})(require.context('./', true, /^\.\/.*\/(?!demo-|_|index).*\.(js)$/))

const PAGES_MODULE = angular.module('pages', [])

pages.map(item => {
    PAGES_MODULE.component(item.default.name, item.default)
})

export default PAGES_MODULE
