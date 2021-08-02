
可以查看属性的浏览器兼容性：https://caniuse.com/  
项目地址：http://ustbhuangyi.com/sell  

团队开发如何使用git分支？  
https://blog.csdn.net/GeenyH/article/details/83034394  
https://blog.csdn.net/yu923023913/article/details/106487264/?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_title-0&spm=1001.2101.3001.4242  
1.问题：  
$ vue --version  
bash: vue: command not found  
原因：环境变量没有进行配置，所以会出现这个问题  

解决办法：  
找到你安装的vue的目录：D:\soft\nodejs\node_global
把地址加入到系统变量path中

Windows-如何打开环境变量管理界面
方法一：命令行法#
第一步：WIN+R，打开运行窗口。输入sysdm.cpl，回车。#
第二步：切换到“高级”页签，点击环境变量，即可进入环境变量管理界面。#
安装vue：npm install -g @vue/cli

开发步骤：

1.在cmd下运行以下命令创建项目
    vue create vue-sell-cube

2.选择配置方式
    说明：
    default (babel, eslint) ：默认配置
    Manually select features： 手动选择配置
    这里选择 Manually select features
    问题：win10下选择按键必须在cmd命令下才起作用，在git下不起作用，https://www.cnblogs.com/Jimc/p/10278254.html

3.手动选择项目需要的特性
    使用上下箭头按键选择，然后按空格键即可
    说明：
    Babel： Babel编译（选择）
    TypeScript：TypeScript支持
    Progressive Web App (PWA) Support： PWA支持
    Router： Vue路由
    Vuex： Vue状态管理
    CSS Pre-processors： CSS预编译器（包括：SCSS/Sass、Less、Stylus）（选择）
    Linter / Formatter： 代码检测和格式化（选择）
    Unit Testing： 单元测试
    E2E Testing： 端到端测试

4.选择CSS预编译器，这里选择 stylus

5.选择ESLint的代码规范，这里选择 ESLint + Standard config

6.选择何时进行代码检测，这里选择 Lint on save（保存时候lint）
    说明：
    Lint on save： 在保存时进行检测
    Lint and fix on commit： 在fix和commit是进行检查
7.选择 Babel、PostCSS、ESLint等配置文件存放位置，这里选择 In dedicated config files
    说明：
    In dedicated config files： 单独保存在各自的配置文件中
    In package.json： 保存在package.json文件中

8.是否记录一下以便下次使用这套配置，这里选择 N 不记录，如果键入Y需要输入保存名字

9.确定后，等待Vue-cli完成初始化

1.  cd vue-sell-cube

2.  npm run serve 

3.  打开页面：http://localhost:8080/
              http://172.18.6.57:8080/    

4.  安装cube-ui
5.  初始化入口html文件public->index.html经过变异构建后会引用main.js,然后进行整个项目的初始化
6.  初始化入口js文件：src->main.js
7.  以后重点修改src->components文件夹（放置公用vue组件页面）
8.  browserslistrc：给不同浏览器css添加前缀为了兼容（postcss.config.js里面的插件需要css）
9.  .editorconfig：
10. .eslintrc：eslint的配置
11. .gitignore：指定的文件或者目录不提交到git上
12. babel.config.js：babel配置
13. package-lock.json：压缩版本的功能版本管理使用的json文件
14. package.json：项目的各种依赖
15. 安装cube-ui: https://didi.github.io/cube-ui/#/zh-CN/docs/quick-start
16. git从github拉取分支更新本地代码:https://blog.csdn.net/s740556472/article/details/80087026
17. 后编译的好处：可以减少整个构建包的体积
    ? Use post-compile? (Y/n) y
    ? Use post-compile? Yes
    ? Import type (Use arrow keys)
    ? Import type Partly部分引用
    ? Custom theme? (Y/n) y
    ? Custom theme? Yes
    ? Use rem layout? (y/N) n
    ? Use rem layout? No
    ? Use vw layout? (y/N) n
    ? Use vw layout? No
18.正式开发项目
19.api 接口 mock
20.开发header组件
    下面定义了组件就必须使用否则也会报错哦
21. axios 封装 & 数据获取
https://github.com/axios/axios
    将接口给予axios二次封装
    在src下新建文件夹api->helpers.js
    安装axios: npm i axios --save
    api->index.js
    函数封装拆分
22.header-detail & star 组件
    components->header-detail-header-detail.vue
	1.  header-detail 交互
		如果直接放到body下面也行，不过不利于后期维护，不是动态组件，用户体验不好
		自定义动态弹窗组件变成api调用方式
	在src下创建resister.js
23. tab组件基础实现
    components->tab->tab.vue
24. 创建shop-cart-list.vue
	create-api 模块：(https://didi.github.io/cube-ui/#/zh-CN/docs/create-api)
 this.shopCartListComp = this.shopCartListComp || this.$createShopCartList({
          $props: {
            selectFoods: 'selectFoods'
          },
          $events: {
            leave: () => {
              this._hideShopCartSticky()
            },
            hide: () => {
              this.listFold = true
            },
            add: (el) => {
              this.shopCartStickyComp.drop(el)
            }
          }
        })
25.创建一个购物车组件的副本shop-cart-sticky.vue作为一个API组件直接调用即可
shop-cart-sticky.vue是shop-cart.vue的父级
 shop-cart.vue有shop-cart-list.vue
 shop-cart-sticky没有shop-cart-list.vue,所以要将shop-cart-list.vue传给它
26.购物车列表功能完善
点击'+'小球不飞的原因：shop-cart-sticky.vue覆盖了，得在shop-cart-sticky.vue里面重新执行drop方法


	
	



    

