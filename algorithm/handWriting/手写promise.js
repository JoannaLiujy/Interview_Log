class _Promise {
  constructor(executor) {
    this.status = 'pending'
    this.value = undefined
    this.reason = undefined
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []
    const resolve = (value) => {
      if (this.status === 'pending') {
        this.status = 'resolved'
        this.value = value
        this.onFulfilledCallbacks.forEach((cb) => {
          cb()
        })
      }
    }
    const reject = (reason) => {
      if (this.status === 'pending') {
        this.status = 'rejected'
        this.reason = reason
        this.onRejectedCallbacks.forEach((cb) => {
          cb()
        })
      }
    }
    executor(resolve, reject)
  }
  then(onFulfilled, onRejected) {
    if (this.status === 'pending') {
      this.onFulfilledCallbacks.push(() => {
        onFulfilled(this.value)
      })
      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason)
      })
    }
    if (this.status === 'resolved') {
      onFulfilled(this.value)
    }
    if (this.status === 'rejected') {
      onRejected(this.reason)
    }
  }
}
new _Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1111)
  }, 3000)
}).then((data) => {console.log(data);})