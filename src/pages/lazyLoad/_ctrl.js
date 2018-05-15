import style from './style.scss'

const testCtrl = function testCtrl() {
    this.style = style
    this.menuItems = [
        {
            name: 'lazyLoad',
            value: 'lazyLoad'
        },
        {
            name: 'Components',
            value: 'Components',
            subMenu: [
                {
                    name: 'mail'
                },
                {
                    name: 'Timeline'
                },
                {
                    name: 'Tree View'
                }
            ]
        },
        {
            name: 'Charts',
            value: 'Charts',
            subMenu: [
                {
                    name: 'mail'
                },
                {
                    name: 'Timeline'
                },
                {
                    name: 'Tree View'
                }
            ]
        },
        {
            name: 'UI Features',
            value: 'UIFeatures',
            subMenu: [
                {
                    name: 'mail'
                },
                {
                    name: 'Timeline'
                },
                {
                    name: 'Tree View'
                }
            ]
        }
    ]
    this.list = false
    this.switchBtn = () => {
        this.list = !this.list
    }
}
export default testCtrl
