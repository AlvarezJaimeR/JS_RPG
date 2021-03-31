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
        alert('A foe is heading towards you. Choose an attack:');
        let attack = prompt('1 - Sword Slash 2 - Double Knee Drop 3 - Tombstone Piledriver');
        let check = false;
        while (check == false){
            switch(attack){
                case '1':
                    console.log(this.name + ' will use ' + hercules.attack[0]);
                    check = true;
                    return hercules.attack[0];
                case '2':
                    console.log(this.name + ' will use ' + hercules.attack[1]);
                    check = true;
                    return hercules.attack[1];
                case '3':
                    console.log(this.name + ' will use ' + hercules.attack[2]);
                    check = false;
                    return hercules.attack[2];
                default: 
                    alert('Choose one of the main attacks');
                    attack = prompt('1 - Sword Slash 2 - Double Knee Drop 3 - Tombstone Piledriver')
                    break;
            }
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

class Game{
    constructor(){
    }
    runGame(){
        alert('You are Hercules, the greatest of the Greek Heroes! Prepare for battle!');
        hercules.chooseAttack();
        nemeanLion.randomAttack();
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


let game = new Game();
game.runGame();