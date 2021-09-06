{
    let a, b, c
    [a, b, c] = [1, 2]
    console.log(a, b, c)
}

{
    let a, b, c
    [a, b, c = 6] = [1, 2, 3]
    console.log(a, b, c)
}

{
    let a, other
    [a, ...other] = [1, 2, 3]
    console.log(a, other)
}

{
    let a, b
    [a, , b] = [1, 2, 3]
    console.log(a, b)
}

{
    let a, b
    ({ a, b } = { a: 2, b: 3 })
    console.log(a, b)
}

{
    let num, total
    ({ a: num, b: total } = { a: 2, b: 3 })
    console.log(num, total)
}

{
    function fn() {
        return {
            name: 'Nick',
            nameList: [{
                name: 'KK'
            }]
        }
    }
    
    let b = fn();
    let {name: person, nameList:[{name: otherPerson}]} = b;
    console.log(person, otherPerson)
}