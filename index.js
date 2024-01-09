class Character {
    constructor(name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
  
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
    }
  }
  
  class Adventurer extends Character {
    constructor(name, role) {
      super(name);
      this.role = role;
      this.inventory.push("bedroll", "50 gold coins");
    }
  
    scout() {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  
    duel(opponent) {
      do {
        const roll1 = this.roll();
        const roll2 = opponent.roll();
        if (roll1 > roll2) {
          opponent.health -= 1;
        } else {
          this.health -= 1;
        }
        console.log(`Round: ${this.name} vs ${opponent.name} - ${this.health} vs ${opponent.health}`);
      } while (this.health > 50 && opponent.health > 50);
  
      const winner = this.health > opponent.health ? this : opponent;
      console.log(`Winner: ${winner.name}`);
    }
  }
  
  class Companion extends Character {
    constructor(name, type) {
      super(name);
      this.type = type;
    }
  }
  
  Character.MAX_HEALTH = 100;
  Adventurer.ROLES = ["Fighter", "Healer", "Wizard"];
  
  class AdventurerFactory {
    constructor(role) {
      this.role = role;
      this.adventurers = [];
    }
  
    generate(name) {
      const newAdventurer = new Adventurer(name, this.role);
      this.adventurers.push(newAdventurer);
      return newAdventurer;
    }
  
    findByIndex(index) {
      return this.adventurers[index];
    }
  
    findByName(name) {
      return this.adventurers.find((a) => a.name === name);
    }
  }
  
  const healers = new AdventurerFactory("Healer");
  const robin = healers.generate("Robin");
  
  const adventurer1 = new Adventurer("Adventurer1", "Fighter");
  const adventurer2 = new Adventurer("Adventurer2", "Wizard");
  adventurer1.duel(adventurer2);