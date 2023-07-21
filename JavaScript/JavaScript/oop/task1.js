class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return this.rate * this.days;
    }

    getFullName() {
        return `${this.name} ${this.surname}`;
    }
}

class Boss extends Worker {
    constructor(name, surname, rate, days, workers) {
        super(name, surname, rate, days);
        this.workers = workers;
    }

    getSalary() {
        return this.rate * this.days * this.workers;
    }
}

// Create a Worker
const worker1 = new Worker('John', 'Doe', 100, 20);
document.getElementById('worker1').innerHTML = `First worker is ${worker1.getFullName()} with salary ${worker1.getSalary()}`;

// Create a Boss
const boss1 = new Boss('Jane', 'Smith', 200, 25, 5);
document.getElementById('boss1').innerHTML = `First boss is ${boss1.getFullName()} with salary ${boss1.getSalary()}`;