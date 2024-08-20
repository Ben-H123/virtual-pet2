const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;


function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = MAXIMUM_FITNESS;
    this.children = [];
};

Pet.prototype = {
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
};

Pet.prototype.growUp = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(')
    };

    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};


Pet.prototype.walk = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(')
    };

    if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
        this.fitness += 4;
    } else {
        this.fitness = MAXIMUM_FITNESS;
    };
};

Pet.prototype.feed = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(')
    };

    if ((this.hunger - 3) >= MINIMUM_HUNGER) {
        this.hunger -= 3;
    } else {
        this.hunger = MINIMUM_HUNGER;
    }
}

Pet.prototype.checkUp = function() {
    const isUnfit = this.fitness <= 3;
    const isHungry = this.hunger >= 5;
    const iAmHungry = "I am hungry";
    const iNeedAWalk = "I need a walk";

    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(')
    };

    if(isUnfit && isHungry) {
        return `${iAmHungry} AND ${iNeedAWalk}`
      }
      
      if(isUnfit) {
        return iNeedAWalk;
      }
      
      if(isHungry) {
        return iAmHungry;
      }

    return 'I feel great!';

    };

Pet.prototype.haveBaby = function(name) {
    const child = new Pet(name);
    this.children.push(child);
};

Pet.prototype.adopt = function(baby) {
    this.children.push(baby);
};


module.exports = Pet;