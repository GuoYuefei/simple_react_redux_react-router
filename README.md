

## 使用rudux和react-router的最简项目模板

### react+webpack搭建项目的模板

见 https://github.com/GuoYuefei/simple_react_webpack/blob/master/README.md

### 状态管理

如题，用的是redux。主要是在redux和mobx中纠结了下。

mobx5，不支持IE全部版本。其实伴随着时间流式，IE的影响会慢慢变小，也可以选择mobx4（仅不支持IE8），现在也在持续维护中。

redux，对于小项目而言不友好，性能上也比mobx要差。往后可以使用mobx。

[性能比较](https://twitter.com/mweststrate/status/720177443521343488)

github mobx https://github.com/mobxjs/mobx

中文文档 mobx https://cn.mobx.js.org/

github redux https://github.com/reduxjs/redux

中文文档 redux https://www.redux.org.cn/			 

------

### 目录结构

```
+ config																// 各种配置信息，如webpack的
+ dist																	// 构建目录
+ node_modules													
+ public																// 一些静态资源文件，如index.html									
+ src																		// 源码工作目录
	+ actions															// 存放redux的action
		+ constants													// 该目录存放action的type属性的值
	+ components													// 自定义组件所在目录
	+ constants														// 其他的常量
	+ pages																// 页面组件，包括布局组件等，建议布局组件直接放入该目录
	+ reducers														// reducer的内容所在地哈哈哈
	+ utils																// 工具
  - index.jsx														// 形成最后的App组件
  - router.jsx													// 路由配置信息
- .eslintrc.js					
- .gitignore
- index.jsx															// 最后调用dom渲染
- LICENSE
- package.json
- README.md
- yarn.lock
	
```

模板不复杂，所以是在src/test文件夹下直接编写jsx的。实际中一般会形成自定义组件，页面等分类。

### 模板运行

参照  https://github.com/GuoYuefei/simple_react_webpack/blob/master/README.md

### 与electron配合

参照 https://github.com/GuoYuefei/simple_electron_react_webpack

可以找到渲染进程的入口/src/renderer/index.jsx, 这个相当于本模板的/index.jsx.

再找到入口组件/src/renderer/root/index.jsx, 这个相当于本模板的/src/index.jsx.

配置好这两个组件的相对位置后就可以搭配electron的模板，写相关程序了。

### LICENSE

MIT