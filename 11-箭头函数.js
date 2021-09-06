{
    // function fn(x) {
    //     var x
    // }
}

{
    // 声明函数
    const arrow = (x) => {
        console.log('箭头函数')
    }

    arrow()
}

{
    const arrow = x => x * 2
    const result = arrow(4)
    console.log(result)
}

{
    const fruit = {
        name: 'apple',
        price: 18,
        num: 3,
        sum() {
            window.setTimeout(() => { 
                console.log(this.num * this.price)
            }, 1000)
        }
    }
    fruit.sum()
}

/**
 * 在JavaScript什么时候使用箭头函数
 * Object.method()调用的话就用普通函数进行申明，其他情况下都用箭头函数
 */