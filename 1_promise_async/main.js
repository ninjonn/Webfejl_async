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
