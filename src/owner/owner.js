class props {
    constructor(props) {
        const { name, lastName, age } = props;
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
}

class Owner extends User {
    constructor(props) {
        super(props);
        const { dui, phoneNumber } = props;
        this.dui = dui;
        this.phoneNumber = phoneNumber;
    }
}

const Erick = new Owner({
    name: "Erick",
    lastName: "Zelaya",
    age: 18,
    dui: "987654321",
    phoneNumber: 78441235   
});

console.log(Erick);



