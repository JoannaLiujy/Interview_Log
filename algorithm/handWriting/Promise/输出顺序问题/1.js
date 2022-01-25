async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
    console.log('async2');
}
console.log('script start');
setTimeout(function () {
    console.log('setTimeout');
}, 0)
async1();
new Promise(function (resolve) {
    console.log('promise1');
    resolve();
}).then(function () {
    console.log('promise2');
});
console.log('script end');

// 答案

// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// setTimeout

// 先执行宏任务（当前代码块也算是宏任务），然后执行当前宏任务产生的微任务，然后接着执行宏任务

// 1. 从上往下执行代码，先执行同步代码，输出 script start
// 2. 遇到setTimeout，现把 setTimeout 的代码放到宏任务队列中
// 3. 执行 async1()，输出 async1 start, 然后执行 async2(), 输出 async2，把 async2() 后面的代码 console.log('async1 end')放到微任务队列中
// 4. 接着往下执行，输出 promise1，把 .then()放到微任务队列中；注意Promise本身是同步的立即执行函数，.then是异步执行函数
// 5. 接着往下执行， 输出 script end。同步代码（同时也是宏任务）执行完成，接下来开始执行刚才放到微任务中的代码
// 6. 依次执行微任务中的代码，依次输出 async1 end、 promise2, 微任务中的代码执行完成后，开始执行宏任务中的代码，输出 setTimeout