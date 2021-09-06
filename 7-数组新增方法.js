{
    let array = []
    let obj = {}
    let map = new Map()
    let set = new Set()
    const gooditem = { fruit: 'apple' }

    // 增加
    array.push(gooditem)
    obj['fruit'] = 'apple'
    map.set('fruit', 'apple')
    set.add(gooditem)
    console.log('add', array, obj, map, set)

    // 查询
    const resultArray = array.includes(gooditem)
    const resultObj = 'fruit' in obj
    const resultMap = map.has('fruit')
    const resultSet = set.has(gooditem)
    console.log('search', resultArray, resultObj, resultMap, resultSet)

    // 修改
    array.forEach(function (item) {
        item.fruit = item.fruit ? 'orange' : ''
    })
    obj['fruit'] = 'orange'
    map.set('fruit', 'orange')
    set.forEach(function (item) {
        item.fruit = item.fruit ? 'orange' : ''
    })
    console.log('update', array, obj, map, set)

    // 删除
    const index = array.findIndex(function (item) {
        return item.fruit
    })
    array.splice(index, 1)
    delete obj.fruit
    map.delete('fruit')
    set.delete(gooditem)
    console.log('delete', array, obj, map, set)
}

{
    // 类型转换 map和对象间的转换
    let obj = {
        name: 'Nick',
        hobbies: 'swimming'
    }
    console.log(Object.entries(obj))
    let map = new Map(Object.entries(obj))
    console.log('map', map)

    let obj2 = Object.fromEntries(map)
    console.log('obj', obj2)

    // 数组和set
    let array = [1, 2, 3, 4, 5]
    let set = new Set(array)
    console.log('set', set)
    let array2 = Array.from(set)
    console.log('array', array2)
}