class Person {
    constructor(firstName, lastName, city, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.birthYear = birthYear;
    }
    getAge() {
        let date = new Date();
        return date.getFullYear() - this.birthYear;
    }
}

// const samuele = {
//     firstName: "Samuele",
//     lastName: "Madrigali",
//     city: "Levanto",
//     birthYear: 1991,
//     getAge() {
//         return 2022 - this.birthYear;
//     }
// };
const samuele = new Person('Samuele', 'Madrigali', 'Levanto', 1991);

// const maurizio = {
//     firstName: "Maurzio",
//     lastName: "Paoletti",
//     city: "Levanto",
//     birthYear: 1994,
//     getAge() {
//         return 2022 - this.birthYear;
//     }
// };
const maurizio = new Person('Maurizio', 'Paoletti', 'Levanto', 1994);
// const franco = {
//     firstName: "Franco",
//     lastName: "Rossi",
//     city: "Levanto",
//     birthYear: 1965,
//     getAge() {
//         return 2022 - this.birthYear;
//     }
// };

console.log(samuele.getAge(), maurizio.getAge());
