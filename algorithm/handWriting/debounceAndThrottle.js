function debounce(fn, wait) {
  let timeout = null
  return function(...args) {
    if (timeout !== null) {
      clearTimeout(timeout)
      setTimeout(() => fn.apply(this, args), wait)
    }
  }
}

// 更精确地，可以用时间戳+定时器，当第一次触发事件时马上执行事件处理函数，最后一次触发事件后也还会执行一次事件处理函数。

// 在节流函数内部使用开始时间startTime、 当前时间curTime与delay来计算剩余时间remaining， 
// 当remaining <= 0 时表示该执行事件处理函数了（ 保证了第一次触发事件就能立即执行事件处理函数和每隔delay时间执行一次事件处理函数）。 
// 如果还没到时间的话就设定在remaining时间后再触发（ 保证了最后一次触发事件后还能再执行一次事件处理函数）。 
// 当然在remaining这段时间中如果又一次触发事件， 那么会取消当前的计时器， 并重新计算一个remaining来判断当前状态。
function throttle(fn, delay) {
  let timer = null;
  let startTime = Date.now()
  return function(...args) {
    let curTime = Date.now()
    let remaining = delay - (curTime - startTime)  // 第一次立即执行。startTime是一开始调用throttle就有的，所以第一次remaining一般是负数
    clearTimeout(timer) // 注意
    if (remaining <= 0) {
      fn.apply(this, args)
      startTime = Date.now() // 注意
    } else {
      timer = setTimeout(() => fn.apply(this, args), remaining)
    }
  }
}

/** 另一种版本 第一次不会立即执行 */
function throttle(fn) {
  let canRun = true; // 通过闭包保存一个标记
  return function () {
    if (!canRun) return; // 在函数开头判断标记是否为true，不为true则return
    canRun = false; // 立即设置为false
    setTimeout(() => { // 将外部传入的函数的执行放在setTimeout中
      fn.apply(this, arguments);
      // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。当定时器没有执行的时候标记永远是false，在开头被return掉
      canRun = true;
    }, 500);
  };
}

function test() {
  console.log(this);
}

document.addEventListener('click', throttle(test, 2000))