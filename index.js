/**
 * 操作符类
 */
class Operator {
  /**
   * 构造器
   * @param {HTMLElement|String} el 
   */
  constructor(el) {
    this.el = typeof el === 'string' ? document.querySelector(el) : el
  }

  /**
   * 通过类名查找父元素
   * @param {String} clsName 
   */
  findParentByClassName(clsName) {
    let parent = this.el.parentElement
    do {
      if (parent.classList.contains(clsName)) return parent
      parent = parent.parentElement
    } while (parent && parent !== document.body)
  }

  /**
   * 判断一个元素是否有指定类的父元素
   * @param {String} clsName 
   */
  hasClassNameOfParent(clsName) {
    return !!this.findParentByClassName(clsName)
  }

  /**
   * 判断是否有指定的父元素
   * @param {HTMLElement} parent 
   */
  hasParent(parent) {
    let par = this.el
    do {
      if (par === parent) return true
      par = par.parentElement
    } while (par && par !== document.body)
    return false
  }
}

/**
 * 创建操作符实例
 * @param {HTMLElement} el 
 */
function createOperator(el) {
  return new Operator(el)
}

export default createOperator