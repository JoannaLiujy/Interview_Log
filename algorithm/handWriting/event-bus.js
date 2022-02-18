// 简单的发布订阅
class EventBus {
  constructor() {
    this._eventPool = {}
  }
  on(event, callback) {
    if (this._eventPool[event] !== undefined) {
      this._eventPool[event].push(callback)
    } else {
      this._eventPool[event] = [callback]
    }
  }
  emit(event, ...args) {
    if (this._eventPool[event]) {
      let callbacks = this._eventPool[event]
      for (let callback of callbacks) {
        try {
          callback(...args)
        } catch (e) {
          console.log(e);
        }
      }
    }
  }
  off(event, func) {
    if (this._eventPool[event]) {
      let callbacks = this._eventPool[event]
      this._eventPool[event] = callbacks.filter(callback => {
        callback !== func
      })
    }
  }
  once(event, func) {
    const once = (...args) => {
      func.apply(this, args)
      this.off(event, once)
    }
    this.on(event, once)
  }
}