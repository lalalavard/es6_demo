{
    // 默认参数
    function es5Print(x, y) {
        y = y || 'world'
        console.log('es5', x + y)
    }
    es5Print('hello', '')

    function es6Print(x, y = 'world') {
        console.log('es6', x + y)
    }
    es6Print('hello', '')
}

{
    // rest
    function add(...rest) {
        let sum = 0
        console.log(rest)
        for (let value of rest) {
            sum += value
        }
        console.log(sum)
        // Array.prototype.method.apply(arrgument)
    }
    add(1, 2, 3, 4, 5)
}

{
    console.log(...[1, 2, 3, 4, 5])
}

{
    // 尾调用
    function step2(x) {
        console.log('尾调用', x)
    }
    function step1(x) {
        return step2(x)
    }
}