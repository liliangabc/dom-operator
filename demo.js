import domOperator from '.'

let $ = domOperator('#child1')
console.log('通过类名查找父元素：', $.findParentByClassName('parent'))
console.log('判断一个元素是否有指定类的父元素：', $.hasClassNameOfParent('parent'))
console.log('判断是否有指定的父元素：', $.hasParent(document.querySelector('.parent')))