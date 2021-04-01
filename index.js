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
        let attack = prompt('Choose an attack: 1 - Sword Slash 2 - Double Knee Drop 3 - Tombstone Piledriver');
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
        alert('There are 3 foes that you will need to conquer in order to save the world!');
        alert('Your first foe is the vicious Nemean Lion!');
        alert('The Nemean Lion is heading towards you.');
        while (hercules.health > 0 || nemeanLion.health > 0){
            hercules.chooseAttack();
            nemeanLion.randomAttack();
            hercules.health -= nemeanLion.attackPower;
            nemeanLion.health -= hercules.attackPower;
            console.log(hercules.name + ' only has ' + hercules.health + ' '
                + nemeanLion.name + ' only has ' + nemeanLion.health);
            if (hercules.health == 0){
                console.log('Hercules has died.');
                break;
            }
            else if (nemeanLion.health == 0){
                console.log('The Nemean Lion has been slain');
                break;
            }
        }
        console.log('Hercules has only ' + hercules.health + ' health left.');
        alert('The battle carries on!');
        
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