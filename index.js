const fsp = require('./lib/fsp')

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello Promise!')
    }, 1000)
})

p.then((message) => {
    console.log(message)
})

let delay = (milliseconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(milliseconds)
        }, milliseconds)
    })
}

let countDown = (milliseconds) => {
    (milliseconds !== 0) ? console.log(milliseconds) : console.log('Done!')
    return delay(milliseconds - 100)
}

delay(1000)
    .then(countDown)
    .then(countDown)
    .then(countDown)
    .then(countDown)
    .then(countDown)
    .then(countDown)
    .then(countDown)
    .then(countDown)
    .then(countDown)
    .then(countDown)
    .then(countDown)

let squared = (number) => {
    return new Promise((resolve, reject) => {
        if(!isNaN(number)) {
            resolve(number * number)
        } else {
            reject('Not a number!')
        }
    })
}

squared(5)
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.error(err)
    })

let intArr = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => {
    return squared(num)
})

Promise.all(intArr)
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.error(err)
    })

let doBadThing = (forRealz) => {
    return new Promise((resolve, reject) => {
        if (!forRealz) {
            resolve('Yay!')
        } else {
            reject('Error: It is truthy!')
        }
    })
}

doBadThing(undefined)
    .then((result) => {
        console.log(result)
        throw "fake"
    })
    .catch((err) => {
        console.error(err)
    })

doBadThing(true)
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.error(err)
    })

fsp.readFile('./data/lorem.txt')
    .then((data) => {
        console.log(data)
    })

fsp.writeFile('./data/test.txt', 'Hello!')
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.error(err)
    })

fsp.appendFile('./data/test.txt', 'Hello again!')
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.error(err)
    })