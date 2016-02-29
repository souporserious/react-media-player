class CircleProgress {
  constructor(el) {
    this.el = el
    this.r = el.getAttribute('r')
    this.c = Math.PI*(this.r*2)
    this._init()
  }

  _init() {
    this.el.style.strokeDasharray = this.c
    this.setProgress(0)
  }

  setProgress(amount) {
    const dashoffset = Math.abs(amount * this.c / 100 - this.c)
    this.el.style.strokeDashoffset = dashoffset
  }
}

export default CircleProgress
