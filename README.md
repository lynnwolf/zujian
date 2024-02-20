# 强思组件开发引用规范
## 引用
### 1. npm安装依赖库
在终端中输入以下代码安装依赖。
```js
// 安装#后面的指定tag号，不加#则默认安装最新master代码
npm i "git+http://192.168.10.160/cets-project/web-component/vue3-component-common#v0.3"
```
> ****tag号可在仓库查看，或由开发人员通知****
### 2.全局引入chance组件
main.js中import引入，并全局注册组件

```js
import ChUi from 'chance-ui'

app.use(ChUi)
```
### 3.使用组件

- 进入仓库查看组件名称
http://192.168.10.160/cets-project/web-component/vue3-component-common
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b667792610244d5d9ae1d6ab4f13c876~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=905&h=670&s=82986&e=png&b=1d1d1d)
- 组件使用文档（待添加）
## 开发
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5e07616863cb498d84622c537e4c02aa~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=273&h=221&s=8702&e=png&b=181818)
### 1.开发仓库
http://192.168.10.160/cets-project/web-component/vue3-component-common
### 2.开发文件
- src文件为调试代码区（可正常npm run dev运行）
- packages文件为暴露组件代码区，通过index.js整体export出去。开发规范请参照button示例组件。
- 组件API在type文件（待添加）

> **组件开发规范**
1. 单一原则：负责单一的页面渲染
2. 多重职责：负责多重职责，获取数据，复用逻辑，页面渲染等
3. 明确接受参数：必选，非必选
4. 可扩展：需求变动能够及时调整，不影响之前代码
5. 高性能:代码逻辑精简
6. 低耦合：组件内部代码不考虑外部的场景，变化的部分以参数的形式获取
7. ...
