/********
组件入口
********/

// 批量载入 components 文件夹下的所有非 "demo-" "_" "index" 开头的js文件
// 约定 : 组件中的私有方法请用"下划线开头"以免被打包到组件中
const components = (r => {
    return r.keys().map(key => r(key))
})(require.context('./', true, /^\.((?!\/(demo-|_|index)).)*\.(vue|js)$/))

const compArr = []

components.map(item => {
    compArr.push(item.default)
})

// 然后把这些组件的名称批量注入父级 "components" 中
export default angular.module('components', compArr).name

// 为什么尾巴上带个name 请看这里 https://docs.angularjs.org/api/ng/type/angular.Module
// 意思就是把模块的名称返回过来,方便注入
