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


class Service{
    #data

    constructor(){
        this.#data = people
    }

    Init() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.#data);
            }, 2000);
        });
    }

    initInvalid() {
        return new Promise((reject) => {
            setTimeout(() => {
                reject('Invalid initialization');
            }, 2000);
        });
    }

    realInit(dbNumber) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (dbNumber < 5) {
                    resolve('Vannak almák: ' + dbNumber);
                } else {
                    reject('Nincsenek elég almák: ' + dbNumber);
                }
            }, 2000);
        });
    }
}

class DataViewController{
    #div
    constructor(){
        this.#div = document.createElement('div')
        this.#div.textContent = 'Loading'
        document.body.appendChild(this.#div)
    }

    setContent(array){
        this.#div.innerHTML = ''
        for(const element of array){
            const div = document.createElement('div')
            div.textContent = element.name
            this.#div.appendChild(div)
        }
    }

    renderError(error) {
        this.#div.textContent = error;
    }
}

const ser = new Service()
const view = new DataViewController()
ser.Init().then((value) => {
    view.setContent(value);
})

ser.initInvalid().catch((error) => {
    view.renderError(error);
});

ser.realInit(3).then((value) => {
    console.log(value);
}).catch((error) => {
    view.renderError(error);
});