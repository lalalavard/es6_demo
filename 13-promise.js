{
    // 回调地狱
    function ajax(cb) {
        setTimeout(() => {
            cb && cb(() => {
                console.log('任务2')
            })
        }, 1000)
    }
    // ajax((cb2) => {
    //     console.log('任务1')
    //     setTimeout(() => {
    //         cb2 && cb2()
    //     },1000)
    // })
}

{
    // Promise改造回调函数
    function ajax() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(), 1000)
        })
    }
    // ajax().then(() => {
    //     console.log('任务1')
    // })
}

{
    function ajax() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(), 1000)
        })
    }
    // ajax()
    //     .then(() => {
    //         console.log('任务1')
    //         return new Promise(resolve => {
    //             setTimeout(() => resolve(), 1000)
    //         })
    //     })
    //     .then(() => {
    //         console.log('任务2')
    //     })
}

{
    // 使用catch方法捕捉错误
    function judgeNumber(num) {
        return new Promise((resolve, reject) => {
            if (typeof (num) === 'number') {
                resolve(num)
            } else {
                const err = new Error('请输入数字')
                reject(err)
            }
        })
    }

    // judgeNumber('2')
    //     .then(num => console.log(num))
    //     .catch(err => console.log(err))
}

{
    // Promise.all
    const imgUrl1 = 'http://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/video/1901/vue/vue.png'
    const imgUrl2 = 'http://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/video/1901/webpack/webpack.png'
    const imgUrl3 = 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/video/2019_frontend/html_css/html.png'

    function getImage(url) {
        return new Promise((resolve, reject) => {
            const img = document.createElement('img')
            img.src = url
            img.onload = () => resolve(img)
            img.onerror = (err) => reject(err)
        })
    }

    function showImage(imgs) {
        imgs.forEach(item => {
            document.body.appendChild(item)
        })
    }

    function showFirstImage(img) {
        document.body.appendChild(img)
    }

    // Promise.all([getImage(imgUrl1), getImage(imgUrl2), getImage(imgUrl3)]).then(showImage)
    // Promise.race用于希望多个Promise函数当中只要一个执行成功这种场景
    Promise.race([getImage(imgUrl2), getImage(imgUrl1), getImage(imgUrl3)]).then(showFirstImage)
}