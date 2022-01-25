let timerId = 0;

const mClearTimeout = (timerId) => {
    window.cancelAnimationFrame(timerId);
}

const mSetTimeout = (fn, timeout, ...args) => {
    const start = Date.now();
    let now;
    const loop = () => {
        timerId = window.requestAnimationFrame(loop);
        // 再次运行时获取当前时间
        now = Date.now();
        // 当前运行时间 - 初始当前时间 >= 等待时间 ===>> 跳出
        if (now - start >= timeout) {
            fn.apply(this, args)
            // 如果想自动取消timer的话, 就在这里cancel即可
            mClearTimeout(timerId)
        }
    }
    timerId = window.requestAnimationFrame(loop);

}

function showName() {
    console.log("Hello")
}

mSetTimeout(showName, 1000);