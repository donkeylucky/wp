export default {
    name: 'lazyLoad',
    url: '/lazyLoad',
    component: 'lazy',
    lazyLoad: function(transition) {
        const $ocLazyLoad = transition.injector().get('$ocLazyLoad')
        return import('./_lazyLoad.js').then(mod => $ocLazyLoad.load(mod.default))
    }
}
