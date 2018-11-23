
function Animation(options) {
  this.element = options.el
  this.number = options.number || 0
  this.speed = options.speed || 1000
  this.length = Math.max(options.length || 0, this.number.toString().length)
  this.style = options.style || { width: '30px', height: '50px', fontSize: '20px' }

  this.init()
}

Animation.prototype = {
  constructor: Animation,
  init: function() {
    if (!this.element) {
      alert('必须指定一个容器')
      return false
    }
    this.prepare()
    this.setStyle()
    this.setNumber(this.number)
  },

  prepare: function() {
    const length = this.length
    const numberDiv = '<div class="number-box" style="float:left; overflow:hidden; text-align:center;">' +
                        '<div class="number-wrap" style="float:left; width:100%;">' + 
                          '<p style="margin:0;">0</p>' + 
                          '<p style="margin:0;">1</p>' + 
                          '<p style="margin:0;">2</p>' + 
                          '<p style="margin:0;">3</p>' + 
                          '<p style="margin:0;">4</p>' + 
                          '<p style="margin:0;">5</p>' + 
                          '<p style="margin:0;">6</p>' + 
                          '<p style="margin:0;">7</p>' + 
                          '<p style="margin:0;">8</p>' + 
                          '<p style="margin:0;">9</p>' + 
                          '<p style="margin:0;">.</p>' + 
                        '</div>' +
                      '</div>'
    let htmlStr = ''
    for (let i = 0; i < length; i++) {
      htmlStr += numberDiv
    }
    htmlStr += '<div style="clear:both"></div>'
    this.element.innerHTML = htmlStr
  },

  setStyle: function() {
    const style = this.style
    const numberBoxArr = this.element.querySelectorAll('.number-box')

    numberBoxArr.forEach(function(item) {
      for (let key in style) {
        item.style[key] = style[key]
        if (key == 'height') {
          item.style.lineHeight = style[key]
        }
      }
    })
  },

  setNumber: function(number) {
    if (!this.element) {
      return false
    }
    const numberHeight = parseInt(this.style.height)
    const speed = this.speed
    const numberStr = this.numberPadding(number, this.length).toString()
    if (numberStr.length > this.length) {
      this.length = numberStr.length
      this.prepare()
      this.setStyle()
    }
    const numberArr = numberStr.split('').map(function(value) {
      if (value === '.') {
        value = '10'
      }
      return value
    })
    const numberWrapArr = this.element.querySelectorAll('.number-wrap')
    numberWrapArr.forEach(function(value, i) {
      value.style.webkitTransform = 'translateY(-' + numberHeight * parseInt(numberArr[i]) + 'px)'
      value.style.webkitTransition = speed / 1000 + 's'
    }) 
  },

  numberPadding(number, length) {
    if (number.toString().length >= length) return number
    for(var len = (number + '').length; len < length; len = number.length) {
      number = '0' + number;           
    }
    return number
  }
}
