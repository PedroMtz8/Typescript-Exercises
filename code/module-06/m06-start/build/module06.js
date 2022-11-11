"use strict";
/*  Module 6: DGenerics in TypeScript
    Lab Start */
/*  DataStore is a utility function that can store up to 10 string values in an array.
    Rewrite the DataStore class so the array can store items of any type.

    TODO: Add and apply a type variable. */
class DataStore {
    constructor() {
        this._data = new Array(10);
    }
    AddOrUpdate(index, item) {
        if (index >= 0 && index < 10) {
            this._data[index] = item;
        }
    }
    GetData(index) {
        if (index >= 0 && index < 10) {
            return this._data[index];
        }
        else {
            return;
        }
    }
}
let cities = new DataStore();
cities.AddOrUpdate(0, "Mumbai");
cities.AddOrUpdate(1, "Chicago");
cities.AddOrUpdate(11, "London"); // item not added
console.log(cities.GetData(1)); // returns 'Chicago'
console.log(cities.GetData(12)); // returns 'undefined'
// TODO Test items as numbers.
let numbers = new DataStore();
numbers.AddOrUpdate(2, 25);
numbers.AddOrUpdate(5, 39);
numbers.AddOrUpdate(4, 48);
console.log(numbers.GetData(5));
console.log(numbers.GetData(2));
let persons = new DataStore();
persons.AddOrUpdate(3, { name: "Pedro Martinez", age: 19, profession: "Programming" });
persons.AddOrUpdate(6, { name: "Maria Lourdes", age: 60, profession: "Architecture" });
persons.AddOrUpdate(2, { name: "Pedro Martinez H", age: 50, profession: "Electrical Engineer" });
console.log(persons.GetData(5));
console.log(persons.GetData(3));
console.log(persons.GetData(6));
