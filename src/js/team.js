export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (!this.members.has(character)) {
            this.members.add(character);
        } else {
            throw new Error('Такой персонаж уже есть!');
        }
    }

    addAll(...characters) {
        characters.forEach((el) => this.members.add(el));
    }

    toArray() {
        return [...this.members];
    }
}
