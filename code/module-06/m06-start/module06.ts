/*  Module 6: DGenerics in TypeScript
    Lab Start */

/*  DataStore is a utility function that can store up to 10 string values in an array. 
    Rewrite the DataStore class so the array can store items of any type.

    TODO: Add and apply a type variable. */
class DataStore<Type> {

    private _data: Array<Type> = new Array(10);
    
    AddOrUpdate(index: number, item: Type) {
        if(index >=0 && index <10) {
            this._data[index] = item;
        }
    }
    GetData(index: number) {
        if(index >=0 && index < 10) {
            return this._data[index];
        } else {
            return
        }
    }
}

let cities = new DataStore<string>();

cities.AddOrUpdate(0, "Mumbai");
cities.AddOrUpdate(1, "Chicago");
cities.AddOrUpdate(11, "London");       // item not added

console.log(cities.GetData(1));         // returns 'Chicago'
console.log(cities.GetData(12));        // returns 'undefined'

// TODO Test items as numbers.

let numbers = new DataStore<number>();

numbers.AddOrUpdate(2, 25);
numbers.AddOrUpdate(5, 39);
numbers.AddOrUpdate(4, 48);

console.log(numbers.GetData(5));
console.log(numbers.GetData(2));

// TODO Test items as objects.

interface Persons {
    name: string,
    age: number,
    profession: string
}

let persons = new DataStore<Persons>();

persons.AddOrUpdate(3, {name: "Pedro Martinez", age: 19, profession: "Programming"});
persons.AddOrUpdate(6, {name: "Katia", age: 20, profession: "Student"});
persons.AddOrUpdate(2, {name: "Pedro Martinez H", age: 50, profession: "Electrical Engineer"});

console.log(persons.GetData(5));
console.log(persons.GetData(3));
console.log(persons.GetData(6));


