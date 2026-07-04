//-----------------Class (Customer1)-------------------------------
/* class Customer {
    name;
    age;
    address;

    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getname() {
        return this.name;
    }
    setname(name) {
        this.name = name;
    }
}

let customer1 = new Customer("Sharadha", 20, "Bangalore");
console.log(customer1);
console.log(customer1.getname());

// --------------Object Literal (Customer2)-------------------------------

let customer2 = {
    name: "John",
    age: 25,
    address: "New York",
    salary: 50000,
    item: [{
        id: 1,
        name: "Item 1",
        price: 100,
        variant: [
            {
                id: 1,
                name: "Variant 1",
                price: 10
            },
            {
                id: 2,
                name: "Variant 2",
                price: 20
            }
        ]
    }, {
        id: 2,
        name: "Item 2",
        price: 200
    }, {
        id: 3,
        name: "Item 3",
        price: 300
    }],

    father: {
        name: "Robert",
        age: 50,
        address: "New York"
    }
}
console.log(customer2.name);
console.log(customer2.age);
console.log(customer2.address);
console.log(customer2.salary);
console.log(customer2.item);

console.log(customer2.father.name);
console.log(customer2.father.age);
console.log(customer2.father.address);

console.log(customer2.item[1].name);
console.log(customer2.item[1].price);

console.log(customer2.item[0].variant[1].name);
console.log(customer2.item[0].variant[1].price);
 */

//document.write("<h1>Customer Details</h1>");

console.log(document.title);

let heading = document.getElementById("heading");

console.log(heading);