"use strict"

class Hero{
    constructor(name, health, attackPower, attack){
        this.name = name;
        this.health = health;
        this.attackPower = attackPower;
        this.attack = attack;
    }

    //Hercules attack prompt
    chooseAttack(){
        alert('Choose an attack: ');
        let attack = prompt('1, 2, or 3');
        switch(attack){
            case '1':
                console.log(hercules.herculesAttacks.attacks[0]);
                break;
            case '2':
                console.log(hercules.herculesAttacks.attacks[1]);
                break;
            case '3':
                console.log(hercules.herculesAttacks.attacks[2]);
                break;
        }
    }
}

class Foe{
    constructor(name, health, attackPower, attack){
        this.name = name;
        this.health = health;
        this.attackPower = attackPower;
        this.attack = attack;
    }

    randomAttack(){
        let randomAttack = this.attack[Math.floor(Math.random()*this.attack.length)];
        console.log(this.name + ' will use ' + randomAttack);
        return randomAttack;
    }
}

//Hercules stats
let hercules = new Hero('Hercules', 4000, 100, ['Sword Slash','Double Knee Drop','Tombstone Piledriver']);

//Nemean Lion stats
let nemeanLion = new Foe('Nemean Lion', 500, 25, ['Rawr', 'Claw Slash', 'Head Bite']);

//Lernaen Hydra stats
let lernaenHydra = new Foe('Lernaen Hydra', 600, 40, ['Bite', 'Tail Whip', 'Flamethrower']);

//Cerberus stats
let cerberus = new Foe('Cerberus', 3000, 80, ['Headbutt', 'Fireball', 'Rock Throw']);

alert('You are Hercules, the greatest of the Greek Heroes! Prepare for battle!');
hercules.chooseAttack();
this.randomAttack();
