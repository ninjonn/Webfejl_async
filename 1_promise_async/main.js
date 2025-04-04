const buyApple1 = (appleNumber) => {
    if(appleNumber < 5){
        return Promise.resolve('Van elég alma')
    }
    else{
        return Promise.reject('Nincs elég alma')
    }
}

const res1 = buyApple1(4)
console.log(res1)

res1.then((value) => {
    console.log(value)
})

console.log("feloldás után")

buyApple1(5).then((value) => {
    console.log(value)
}).catch((error) => {
    console.log(error)
})

//--------------------------------------------------------------------------------

const buyApple2 = (appleNumber) => {
    return new Promise((resolve,reject) => {
        if(appleNumber < 5){
            resolve('Vannak almák:' + appleNumber)
        }
        else{
            reject('Nincsenek elég almák: ' + appleNumber)
        }
    })
}

buyApple2(3).then((value) => {
    console.log(value)
}).catch((error) => {
    console.log(error)
})

buyApple2(5).then((value) => {
    console.log(value)
}).catch((error) => {
    console.log(error)
})

setTimeout(() => {
    
}, 0);

const buyApple3 = (appleNumber) => {
    return new Promise((resolve,reject) => {
        if(appleNumber < 5){
            setTimeout(() =>{
                resolve('Vannak almák 2: ' + appleNumber)
            },2000)
        }
        else{
            setTimeout(() =>{
                reject('Nincsenek elég almák 2: ' + appleNumber)
            },3000)        
        }
    })
}

buyApple3(4).then((value) => {
    console.log(value)
}).catch((error) => {
    console.log(error)
})

const res2 = buyApple3(5)

console.log(res2)