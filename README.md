# dom-operator
### 一个简单高性能的dom操作工具包

### Install

```
  npm install dom-operator
```

### Use

+ browser
```html
  <script src="<path-to>/dom-operator/dist/index.js"></script>
```

```javascript
  var $ = domOperator('#child1')
```

+ es2015

```javascript
  import domOperator from 'dom-operator'
```

### API

```javascript
  let $ = domOperator('#child1')

  $.findParentByClassName('parent') // 通过类名查找父元素

  $.hasClassNameOfParent('parent') // 判断一个元素是否有指定类的父元素

  $.hasParent(document.querySelector('.parent')) // 判断是否有指定的父元素
```

### Dev Or Build

```
  npm i -g parcel
```

+ Start Dev Server

```
  npm run serve
```

+ Build

```
  npm run build
```