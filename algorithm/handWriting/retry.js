//实现一个retry方法，执行失败时重新执行，直至执行成功或者到达最大重试次数，每次重试间隔时间为interval秒
  
function retry(func, times = 5, interval) {
  return (args) => {
      return new Promise((resolve, reject) => {
          const request = (args) => {
              func(args).then(resolve).catch((error) => {
                  if (times-- > 0) {
                      console.log(`还有${times}次机会重试`);
                      setTimeout(() => {
                          request(args)
                      }, interval);
                  } else {
                      reject(error);
                  }
              })
          }
          return request(args);
      })
  }
}



//模拟请求函数
function getUser(args) {
  return new Promise((resolve, reject) => {
      const result = Math.floor(Math.random() * 10);
      return result < 2 ? resolve({
          id: result,
          userName: args
      }) : reject(new Error('请求失败'))
  })
}
//调用如下
const guaranteed = retry(getUser, 3, 4000);
guaranteed('我是一个参数').then(console.log).catch((error)=>console.error(error));