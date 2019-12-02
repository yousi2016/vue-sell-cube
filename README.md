# vue-sell-cube
Vue.js2.5+cube-ui重构饿了么App（经典再升级）
# vue-sell-cube
Vue.js2.5+cube-ui重构饿了么App（经典再升级）
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

10. cd vue-sell-cube

11. npm run serve 

12. 打开页面：http://localhost:8080/
              http://172.18.6.57:8080/

13. 安装cube-ui




