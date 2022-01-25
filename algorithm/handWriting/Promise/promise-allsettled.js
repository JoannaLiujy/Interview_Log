function PromiseAllSettled(promiseArray) {
    return new Promise(function (resolve, reject) {
        if (!Array.isArray(promiseArray)) {
            return reject(new TypeError('arguments muse be an array'))
        }
        let counter = 0;
        let promiseNum = promiseArray.length;
        let resolvedArray = [];
        for (let i = 0; i < promiseNum; i++) {
            Promise.resolve(promiseArray[i])
                .then((value) => {
                    resolvedArray[i] = {
                        value,
                        status: 'fulfilled'
                    };

                }).catch(reason => {
                    resolvedArray[i] = {
                        reason,
                        status: 'rejected'
                    };
                }).finally(() => {
                    counter++;
                    if (counter == promiseNum) {
                        resolve(resolvedArray)
                    }
                })
        }
    })
}

// 测试
const pro1 = new Promise((res, rej) => {
    setTimeout(() => {
        res('1')
    }, 1000)
})
const pro2 = new Promise((res, rej) => {
    setTimeout(() => {
        rej('2')
    }, 2000)
})
const pro3 = new Promise((res, rej) => {
    setTimeout(() => {
        res('3')
    }, 3000)
})

const proAll = PromiseAllSettled([pro1, pro2, pro3])
    .then(res =>
        console.log(res)
    )
    .catch((e) => {
        console.log(e)
    })