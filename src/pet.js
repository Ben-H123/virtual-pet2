const MAXIMUM_FITNESS = 10;


function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = MAXIMUM_FITNESS;
}

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};

Pet.prototype.walk = function() {
    if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
        this.fitness += 4;
    } else {
        this.fitness = MAXIMUM_FITNESS;
    };
};

Pet.prototype.checkUp = function() {
    const isUnfit = this.fitness <= 3;
    const isHungry = this.hunger >= 5;
    const iAmHungry = "I am hungry";
    const iNeedAWalk = "I need a walk";
    
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


module.exports = Pet;