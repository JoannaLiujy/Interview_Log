new Promise((resolve,reject) => {
  console.log('外部promise')
  resolve()
})
.then(() => {
  console.log('外部第一个then')
  new Promise((resolve,reject) => {
    console.log('内部promise')
    resolve()
  })
  .then(() => {
    console.log('内部第一个then')
    // return Promise.resolve()
    return 1
  })
  .then(() => {
    console.log('内部第二个then')
  })
})
.then(() => {
  console.log('外部第二个then')
})
.then(() => {
  console.log('外部第三个then')
})
.then(() => {
  console.log('外部第四个then')
})

// 外部promise
// 外部第一个then
// 内部promise
// 内部第一个then
// 外部第二个then
// 外部第三个then
// 外部第四个then
// 内部第二个then

// 如果在一个 pending 状态的 promise 对象（p）的 .then回调里返回一个 promise 对象（ p2），
// 或者任意带有 then 方法的对象，引擎会专门起一个额外的 microtask/job 去执行这个 p2的 then 方法，
// 同时把 p 的 [[resolve]]和 [[reject]]函数作为参数传过去，虽然 p2 已经 fulfilled 了，
// 但它能做的也就是把 [[resolve]] 函数立刻放到 microtask 队列里，这样也就过了两个 microtask，
// 这时 p 才会被 fulfill，p 后面的 console.log('内部第二个then')才会被放入队列。