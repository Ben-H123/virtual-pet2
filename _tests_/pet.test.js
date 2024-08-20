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
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');

        pet.age = 30;

        expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
    });

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
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');

        pet.age = 30;

        expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
    });

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

describe('feeds pet', () => {
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');

        pet.age = 30;

        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });

    it('decreases hunger by 3', () => {
        const pet = new Pet('fido');

        pet.hunger = 7;
        pet.feed();

        expect(pet.hunger).toEqual(4);
    });

    it('decreases hunger to a minimum of 0', () => {
        const pet = new Pet('fido');

        pet.hunger = 2;
        pet.feed();

        expect(pet.hunger).toEqual(0);
    });
});

describe('gives pet a checkup', () => {
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');

        pet.age = 30;

        expect(() => pet.checkUp()).toThrow('Your pet is no longer alive :(');
    });

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

describe('tells you if your pet is alive', () => {
    it('tells you if your pet is alive - fitness', () => {
        const pet = new Pet('fido');

        pet.fitness = 0;
        expect(pet.isAlive).toBe(false);
    });

    it('tells you if your pet is alive - hunger', () => {
        const pet = new Pet('fido');

        pet.hunger = 12;
        expect(pet.isAlive).toBe(false);
    });

    it('tells you if your pet is alive - age', () => {
        const pet = new Pet('fido');

        pet.age = 35;
        expect(pet.isAlive).toBe(false);
    });

    it('tells you if your pet is alive - everything', () => {
        const pet = new Pet('fido');

        pet.fitness = 8;
        pet.age = 20;
        pet.hunger = 3;
        expect(pet.isAlive).toBe(true);
    });

describe('Checking if pet has had a baby', () => {
    it('has had a baby', () => {
        const parent = new Pet('fido');
        parent.haveBaby('Amelia');
        parent.haveBaby('Daniel');

        expect(parent.children[0].name).toEqual("Amelia");
        expect(parent.children[1].name).toEqual("Daniel");
        expect(parent.children[0]).toBeInstanceOf(Pet);
    });

    it('can adopt a baby', () => {
        const parent = new Pet('fido');
        const child = new Pet('Ben');
        parent.adopt(child);

        expect(parent.children[0]).toBe(child);
    });
});

});
})
