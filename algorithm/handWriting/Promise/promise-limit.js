function limitLoad(urls, handler, limit) {
    // 对数组做一个拷贝
    const sequence = [].concat(urls)

    //并发请求到最大数
    const promises = sequence.splice(0, limit).map((url, index) => {
        // 这里返回的 index 是任务在 promises 的脚标，
        //用于在 Promise.race 之后找到完成的任务脚标
        return handler(url).then(() => index);
    });

    let p = Promise.race(promises);
    for (let i = 0; i < sequence.length; i++) {
        p = p.then((index) => {
            promises[index] = handler(sequence[i]).then(() => res);
            return Promise.race(promises)
        })
    }
}

const urls = [{
        info: 'link1',
        time: 3000
    },
    {
        info: 'link2',
        time: 2000
    },
    {
        info: 'link3',
        time: 5000
    },
    {
        info: 'link4',
        time: 1000
    },
    {
        info: 'link5',
        time: 1200
    },
    {
        info: 'link6',
        time: 2000
    },
    {
        info: 'link7',
        time: 800
    },
    {
        info: 'link8',
        time: 3000
    },
];

// 设置我们要执行的任务
function loadImg(url) {
    return new Promise((resolve, reject) => {
        console.log("----" + url.info + " start!");
        setTimeout(() => {
            console.log(url.info + " OK!!!");
            resolve();
        }, url.time)
    })
};

limitLoad(urls, loadImg, 3)