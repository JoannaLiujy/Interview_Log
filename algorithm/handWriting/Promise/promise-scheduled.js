// 题目要求任务并行完成，同时并行的任务不能超过两个。

class Scheduler {
  constructor() {
      this.count = 0;
      this.queue = [];
  }
  run() {
    if (this.queue.length) {
      const [promiseCreator, resolve] = this.queue.shift()
      promiseCreator().then(() => {
        this.count--
        resolve()
        this.run()
      })
    }
  }
  add(promiseCreator) {
    return new Promise((resolve, reject) => {
      this.queue.push([promiseCreator, resolve])
      this.count++
      if (this.count <= 2) {
        this.run()
      }
    })
  }
}

const timeout = (time) => new Promise(resolve => {
  setTimeout(resolve, time)
});

const scheduler = new Scheduler();

const addTask = (time, order) => {
  scheduler.add(() => timeout(time))
      .then(() => console.log(order))
};

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')
addTask(100, '5')
// output: 2 3 1 5 4
// 一开始，1、2两个任务进入队列
// 500ms时，2完成，输出2，任务3进队
// 800ms时，3完成，输出3，任务4进队
// 1000ms时，1完成，输出1，任务5进队
// 1100ms时，5完成，输出5
// 1200ms时，4完成，输出4