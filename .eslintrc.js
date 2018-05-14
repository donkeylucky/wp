// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root:true,
    parser:'babel-eslint',
    parserOptions:{ //启用语法支持
        sourceType:'module'
    },
    env:{   //全局变量
        browser:true,
        jquery:true
    },
    globals:{
        'angular':true //定义angular为全局变量
    },
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    extends:'standard',
    // required to lint *.vue files
    plugins:[
        'html',
        'prettier'
    ],

    // add your custom rules here
    'rules':{
        //官方文档 http://eslint.cn/docs/2.0.0/rules/
        //参数：0 关闭，1 警告，2 错误

        // allow debugger during development
        //'no-debugger':process.env.NODE_ENV === 'production' ? 2 : 0,

        'prettier/prettier':2,                      // 加入prettier规则

        'eqeqeq':0,                                 // 强制===替代==运算
        'indent':[1, 4],                            // 使用4个空格缩进
        'semi':0,                                   // 使用分号
        'space-before-function-paren':0,            // 函数括号之前的空格的一致性
        'object-curly-newline':0,                   // 强制花括号内使用换行符的一致性
        'space-before-blocks':0,                    // 强制在块之前使用一致的空格
        'camelcase':0,                              // 驼峰
        'keyword-spacing':0,                        // 强制关键字周围空格的一致性
        'spaced-comment':0,                         // 注释空格
        'one-var':0,                                // 函数中的变量在一起声明或分开声明
        'padded-blocks':0,                          // 块内填充
        'no-extra-boolean-cast':1,                  // 多余的感叹号转布尔型
        'no-extra-semi':1,                          // 多余的分号
        'no-extra-parens':0,                        // 多余的括号
        'no-empty':1,                               // 空代码块
        'quotes':0,                                 // 使用一致的反勾号、双引号或单引号
        'comma-dangle':0,                           // 使用拖尾逗号
        'space-after-keywords':0,
        'eol-last':0,
        'comma-spacing':0,
        'no-multiple-empty-lines':0,
        'no-trailing-spaces':0,
        'block-spacing':0,
        'space-in-parens':0,
        'arrow-spacing':0,
        'no-eq-null':0,

        'semi-spacing':0,

        // allow paren-less arrow functions
        'arrow-parens':0,
        // allow async-await
        'generator-star-spacing':0,

        //使用前未定义
        'no-use-before-define':[0, 'nofunc'],

        'complexity':[0, 10], //圈复杂度大于*

        // 不允许对全局变量赋值,如 window = 'abc'
        'no-global-assign':['error', {
            // 定义例外
            // "exceptions": ["Object"]
        }],
        'no-var':1, //用let或const替代var
        'no-const-assign':2, //不允许const重新赋值
        'no-class-assign':2, //不允许对class重新赋值
        'no-console':0, //console 未删除
        'no-constant-condition':2, //常量作为条件
        'no-dupe-args':2, //参数重复
        'no-dupe-keys':2, //对象属性重复
        'no-duplicate-case':2, //case重复
        'no-empty-character-class':2, //正则无法匹配任何值
        'no-invalid-regexp':2, //无效的正则
        'no-func-assign':2, //函数被赋值
        'valid-typeof':1, //无效的类型判断
        'no-unreachable':2, //不可能执行到的代码
        'no-unexpected-multiline':2, //行尾缺少分号可能导致一些意外情况
        'no-sparse-arrays':1, //数组中多出逗号
        'no-shadow-restricted-names':2, //关键词与命名冲突
        'no-undef':1, //变量未定义
        'no-unused-vars':1, //变量定义后未使用
        'no-cond-assign':2, //条件语句中禁止赋值操作
        'no-native-reassign':2, //禁止覆盖原生对象
        'no-mixed-spaces-and-tabs':0,

        //代码风格优化 --------------------------------------
        'no-irregular-whitespace':0,
        'no-else-return':1, //在else代码块中return，else是多余的
        'no-multi-spaces':0, //不允许多个空格

        //object直接量建议写法 : 后一个空格前面不留空格
        'key-spacing':[
            0,
            {
                'beforeColon':false,
                'afterColon':true
            }
        ],

        'block-scoped-var':1, //变量应在外部上下文中声明，不应在{}代码块中
        'accessor-pairs':1, //object getter/setter方法需要成对出现

        //换行调用对象方法  点操作符应写在行首
        'dot-location':[
            1,
            'property'
        ],
        'no-lone-blocks':1, //多余的{}嵌套
        'no-labels':1, //无用的标记
        'no-extend-native':1, //禁止扩展原生对象
        'no-floating-decimal':1, //浮点型需要写全 禁止.1 或 2.写法
        'no-loop-func':1, //禁止在循环体中定义函数
        'no-new-func':1, //禁止new Function(...) 写法
        'no-self-compare':1, //不允与自己比较作为条件
        'no-sequences':1, //禁止可能导致结果不明确的逗号操作符
        'no-throw-literal':1, //禁止抛出一个直接量 应是Error对象

        //不允return时有赋值操作
        'no-return-assign':1,

        //不允许重复声明
        'no-redeclare':[
            1,
            {
                'builtinGlobals':true
            }
        ],

        //不执行的表达式
        'no-unused-expressions':[
            0,
            {
                'allowShortCircuit':true,
                'allowTernary':true
            }
        ],
        'no-useless-call':1, //无意义的函数call或apply
        'no-useless-concat':1, //无意义的string concat
        'no-void':1, //禁用void
        'no-with':1, //禁用with
        'space-infix-ops':0, //操作符前后空格

        //jsdoc
        'valid-jsdoc':[
            0,
            {
                'requireParamDescription':true,
                'requireReturnDescription':true
            }
        ],
        'curly':0 //if、else、while、for代码块用{}包围
    }
}

