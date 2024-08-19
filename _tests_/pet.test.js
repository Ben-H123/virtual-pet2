const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    it('sets the name property', () => {
        const pet = new Pet('Fido');

        expect(pet.name).toEqual('Fido');
    });
    it('has an initial age of 0', () => {
        const pet = new Pet('Fido');

        expect(pet.age).toEqual(0);
    });
});

describe('growUp',() => {
    it('increments the age by 1', () => {
        const pet = new Pet('Fido');

        pet.growUp();

        expect(pet.age).toEqual(1);
    });

    it('increments hunger by 5', () => {
        const pet = new Pet('Fido');

        pet.growUp();

        expect(pet.hunger).toEqual(5);
    });

    it('decreases fitness by 3', () => {
        const pet = new Pet('Fido');

        pet.growUp();

        expect(pet.fitness).toEqual(7);
    });
});

describe('walk', () => {
    it('increases fitness by 4', () => {
        const pet = new Pet('fido');

        pet.fitness = 4;
        pet.walk();

        expect(pet.fitness).toEqual(8);
    });

    it('increases fitness by 4 to a maximum of 10', () => {
        const pet = new Pet('fido');

        pet.fitness = 8;
        pet.walk();

        expect(pet.fitness).toEqual(10);
    });
});

describe('gives pet a checkup', () => {
    it('Says pet needs a walk if fitness is too low', () => {
        const pet = new Pet('fido');

        pet.fitness = 2;
        expect(pet.checkUp()).toBe('I need a walk');
    });

    it('Says pet is hungry if hunger is too high', () => {
        const pet = new Pet('fido');

        pet.hunger = 6;
        expect(pet.checkUp()).toBe('I am hungry');
    });

    it('Says pet is hungry and needs a walk as well', () => {
        const pet = new Pet('fido');

        pet.fitness = 2;
        pet.hunger = 6;
        expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
    });

    it('Says that pet feels great', () => {
        const pet = new Pet('fido');

        pet.fitness = 4;
        pet.hunger = 4;
        expect(pet.checkUp()).toBe('I feel great!')
    });
})
