class Manager {
    constructor(data) {
        this.data = data;
    }

    filter(condition) {
        return new Promise((resolve, reject) => {
            const filtered = this.data.filter(condition);
            if (filtered.length > 0) {
                resolve(filtered);
            } else {
                reject('Nincs a feltételnek megfelelő elem.');
            }
        });
    }
}

class View {
    constructor() {
        this.div = document.createElement('div');
        document.body.appendChild(this.div);
    }

    setContent(array) {
        this.div.innerHTML = '';
        array.forEach(element => {
            const div = document.createElement('div');
            div.textContent = `${element.name}, ${element.age}`;
            this.div.appendChild(div);
        });
    }

    showError(message) {
        this.div.innerHTML = message;
    }
}

class Form {
    constructor(manager, view) {
        this.manager = manager;
        this.view = view;
        this.createButtons();
    }

    createButtons() {
        const conditions = [
            (person) => person.age % 3 === 0 && person.car.color === 'White',
            (person) => person.sex === 'Female' && person.car.type === 'Coupe',
            (person) => person.name.startsWith('A') && person.car.type === 'Bus',
            (person) => person.car.color === 'Silver' && person.car.type === 'SUV'
        ];

        conditions.forEach((condition, index) => {
            const button = document.createElement('button');
            button.textContent = `Filter ${index + 1}`;
            button.onclick = () => {
                this.manager.filter(condition)
                    .then(filtered => this.view.setContent(filtered))
                    .catch(error => this.view.showError(error));
            };
            document.body.appendChild(button);
        });
    }
}

const manager = new Manager(people);
const view = new View();
const form = new Form(manager, view);