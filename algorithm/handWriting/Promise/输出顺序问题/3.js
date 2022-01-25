const p = function () {
    return new Promise((resolve, reject) => {
        const p1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(1)
            }, 0)
            resolve(2)
        })
        p1.then((res) => {
            console.log(res);
        })
        console.log(3);
        resolve(4);
    })
}


p().then((res) => {
    console.log(res);
})
console.log('end');

// 答案

// 3
// end
// 2
// 4

// 1. 执行代码，Promise本身是同步的立即执行函数，.then是异步执行函数。遇到setTimeout，先把其放入宏任务队列中，遇到p1.then会先放到微任务队列中，接着往下执行，输出 3
// 2. 遇到 p().then 会先放到微任务队列中，接着往下执行，输出 end
// 3. 同步代码块执行完成后，开始执行微任务队列中的任务，首先执行 p1.then，输出 2, 接着执行p().then, 输出 4
// 4. 微任务执行完成后，开始执行宏任务，setTimeout, resolve(1)，但是此时 p1.then已经执行完成，此时 1不会输出。

// 如果, 将上述代码中的resolve(2)注释掉, 输出会是什么？
// 3 end 4 1