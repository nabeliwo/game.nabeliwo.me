import { clickEvent } from './helper/event'

export default class Navi {
  constructor({ wrapper, trigger, bg, box }) {
    this.status = Navi.Status.CLOSE
    this.wrapper = document.querySelector(wrapper)
    this.trigger = document.querySelector(trigger)
    this.bg = document.querySelector(bg)
    this.box = document.querySelector(box)

    if (this.wrapper) this.bindEvents()
  }

  toggle() {
    if (this.status === Navi.Status.CLOSE) {
      this.open()
    } else {
      this.close()
    }
  }

  open() {
    this.status = Navi.Status.OPEN
    this.wrapper.classList.add('is-open')
  }

  close() {
    this.status = Navi.Status.CLOSE
    this.wrapper.classList.remove('is-open')
  }

  bindEvents() {
    const handlers = [
      'handleTriggerClick',
      'handleClick',
      'handleBgClick'
    ]

    handlers.forEach((handler) => {
      this[handler] = this[handler].bind(this)
    })

    this.trigger.addEventListener(clickEvent, this.handleTriggerClick)
    this.box.addEventListener(clickEvent, this.handleClick)
    this.bg.addEventListener(clickEvent, this.handleBgClick)
  }

  handleTriggerClick(e) {
    e.preventDefault()
    e.stopPropagation()
    this.toggle()
  }

  handleClick(e) {
    e.stopPropagation()
  }

  handleBgClick() {
    this.close()
  }
}

Navi.Status = {
  OPEN: 1,
  CLOSE: 2
}
