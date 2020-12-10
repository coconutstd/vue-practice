export class Member {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    getName() {
        return this.lastName + this.firstName
    }
}


