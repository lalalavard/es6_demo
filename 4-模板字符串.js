// es5
{
    const str1 = 'a'
    const str2 = '\u20bb7'
    console.log(str2)
}

{
    const str3 = '\u{20bb7}'
    console.log('str3', str3)
}

{
    // for of
    const str3 = '\u{20bb7}'
    for (let i = 0; i < str3.length; i++) {
        console.log('for', str3[i])
    }
    for (let word of str3) {
        console.log('for-of', word)
    }
}

// 判断字符串是否包含指定字符串的几个方法
{
    let str = '123Nick321'
    console.log('includes', str.includes('Nick'))
    console.log('startsWith', str.startsWith('Nick', 3))
    console.log('endsWith', str.endsWith('Nick', 7))
}

{
    let str = '1Nick23'
    str = str.repeat(3)
    console.log('repeat',str)
}

{
    let str = 'Apple'
    str = str.padStart(8, 'asdad')
    console.log('padStart', str)
}

{
    const name = "nick"
    const age = 18
    const str = '我叫'+name+',我今年'+age+'岁。'
    console.log('es5-str', str)
    const str2 = `我叫${name}，
     
     我今年${age}岁。`
    console.log('es6-str', str2)
}