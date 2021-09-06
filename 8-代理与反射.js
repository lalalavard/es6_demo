{
    // Proxy, 代理的就是对象的一些操作

    let account = {
        id: 9923,
        name: 'admin',
        _private: 'test',
        phone: '13812345678',
        create_time: '2019'
    }

    let accountProxy = new Proxy(account, {
        // 拦截读取和设置的操作
        get: function (target, key) {
            switch (key) {
                case 'phone':
                    return target[key].substring(0, 3) + '****' + target[key].substring(7)
                case 'create_time':
                    return target[key].replace('2019', 2020)
                default:
                    return target[key]
            }
        },

        set: function (target, key, value) {
            if (key === 'id') {
                return target[key]
            } else {
                return target[key] = value
            }
        },

        // d
        has: function(target, key) {
            if(key in target) {
                console.log(`${key}：`, target[key])
                return true
            } else {
                console.log('并无此属性')
                return false
            }
        },

        // 拦截delete
        deleteProperty: function(target, key) {
            if(key.indexOf('_') === 0) {
                console.warn('私有属性不能被删除')
                return false
            } else {
                delete target[key]
                return true
            }
        },

        // 拦截Object.keys()
        ownKeys(target) {
            return Object.keys(target).filter(function(item) {
                return item !== 'id' && item.indexOf('_') !== 0
            })
        }
    })

    console.log('拦截读取', accountProxy.phone, accountProxy.create_time)
    accountProxy.id = 1234
    accountProxy.name = 'guest'
    console.log('拦截设置', accountProxy.id, accountProxy.name)
    console.log('====')
    console.log('拦截in', 'sex' in accountProxy)
    console.log('====')
    console.log('拦截删除', delete accountProxy['_private'])
    console.log('拦截Object.keys()',Object.keys(accountProxy))
}

{
    let obj = {
        name: 'Nick',
        age: '32',
        sex: 'male',
        hobbies: 'swimming'
    }

    console.log(Reflect.get(obj, 'name'))
    Reflect.set(obj,'name', 'Jack')
    console.log(obj.name)
    'name' in obj
    Reflect.has(obj, 'name')
}