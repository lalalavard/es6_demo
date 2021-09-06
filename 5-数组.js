{
    // 扩展运算符的使用 ...

    // 复制数组的操作
    const list = [1, 2, 3, 4, 5]
    let list2 = [...list]
    console.log(list2)

    // 分割数组
    const totalList = [1, 'a', 'b', 'c']
    let [, ...strList] = totalList
    console.log(strList)

    // 给函数传递参数
    function add(x, y) {
        return x + y
    }

    let addList = [1, 2]
    console.log(add(...addList));
}

{
    // fill
    const list = [1, 2, 3, 4, 5]
    let list2 = [...list].fill(3)
    let list3 = [...list].fill(3, 1, 4)
    console.log(list2, list3)
}

{
    // find findIndex
    const list = [{ title: 'es6' }, { title: 'webpack', id: 2 }, { title: 'vue' }, { title: 'webpack', id: 3 }]
    let result = list.find(function (item) {
        return item.title === 'webpack'
    })
    let resultIndex = list.findIndex(function (item) {
        return item.title === 'webpack'
    })
    console.log(result, resultIndex)
}

{
    // includes 和 indexOf
    const list = [1, 2, 3, 4, 5, 6]
    let result = list.includes(2)
    console.log('includes', result)
}

{
    // flat展开数组的操作
    const list = [1, 2, 3, ['2nd', 4, 5, 6, ['3rd', 7, 8]]]
    let flatList = [].concat(...list)
    console.log(flatList)
    
    // 默认只展开第一层数组
    let flatList2 = list.flat(2)
    console.log('flat', flatList2)
}