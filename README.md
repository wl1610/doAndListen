### `npm start`
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`
生产环境打包

### 按需install
prettier
storybook
lodash
moment

react-app-polyfill
.env
manifest.json
seo
webpack.config.js
fetch

### 注意
- 将js和css放到src目录，webpack只处理src下的文件。
- 只能在 public/index.html 中使用 public 中的文件。
- 代码拆分，支持 import('./moduleA')，返回一个Promise。
- let/const 使用最小特权原则，所有变量除了你计划去修改的都应该使用const。


### tsx 文件引入顺序
- react库类
- 基础组件： 例如 antd 的
- 组件： 自己封装的
- classNames
- css
- lodash
- 常量：例如：constant.js
- apis
- util工具类
- 基础组件衍生的组件：例如 const TabPane = Tabs.TabPane

