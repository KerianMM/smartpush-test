export class Persons {
    private persons: Person[];

    constructor(persons: Person[], lastname?: undefined|string) {
        this.persons = persons;

        if (undefined !== lastname) {
            this.filterLastname(lastname);
        }
    }

    filterLastname(lastname: string): void {
        const regExp = new RegExp(lastname, 'i');

        this.persons = this.persons.filter(person => regExp.test(person.lastname))
    }

    isEmpty(): boolean {
        return 0 === this.persons.length;
    }

    items(): Person[] {
        return this.persons;
    }
}

export interface Person {
    id: string,
    firstname: string,
    lastname: string,
    age: number,
    city: string,
    address: string,
}
