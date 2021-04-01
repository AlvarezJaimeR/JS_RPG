"use strict"
class Character{
    constructor(name, health, attackPower, attack){
        this.name = name;
        this.health = health;
        this.attackPower = attackPower;
        this.attack = attack;
    }
}

class Hero extends Character{
    constructor(name, health, attackPower, attack){
        super(name, health, attackPower, attack);
    }

    //Hercules attack prompt
    chooseAttack(){
        let attack = prompt('Choose an attack: 1 - Sword Slash 2 - Double Knee Drop 3 - Tombstone Piledriver');
        let check = false;
        while (check == false){
            switch(attack){
                case '1':
                    console.log(this.name + ' will use ' + this.attack[0]);
                    check = true;
                    return this.attack[0];
                case '2':
                    console.log(this.name + ' will use ' + this.attack[1]);
                    check = true;
                    return this.attack[1];
                case '3':
                    console.log(this.name + ' will use ' + this.attack[2]);
                    check = false;
                    return this.attack[2];
                default: 
                    alert('Choose one of the main attacks');
                    attack = prompt('1 - Sword Slash 2 - Double Knee Drop 3 - Tombstone Piledriver')
                    break;
            }
        }
    }
}

class Foe extends Character{
    constructor(name, health, attackPower, attack){
        super(name, health, attackPower, attack);
    }

    randomAttack(){
        let randomAttack = this.attack[Math.floor(Math.random()*this.attack.length)];
        console.log(this.name + ' will use ' + randomAttack);
        return randomAttack;
    }
}

class Game{
    constructor(){
    //Hercules stats
    this.hercules = new Hero('Hercules', 2000, 100, ['Sword Slash','Double Knee Drop','Tombstone Piledriver']);
    //Nemean Lion stats
    this.nemeanLion = new Foe('Nemean Lion', 300, 25, ['Rawr', 'Claw Slash', 'Head Bite']);
    //Lernaen Hydra stats
    this.lernaenHydra = new Foe('Lernaen Hydra', 500, 40, ['Bite', 'Tail Whip', 'Flamethrower']);
    //Cerberus stats
    this.cerberus = new Foe('Cerberus', 700, 80, ['Headbutt', 'Fireball', 'Rock Throw']);
    }

    runGame(){
        alert('You are Hercules, the greatest of the Greek Heroes! Prepare for battle!');
        alert('There are 3 foes that you will need to conquer in order to save the world!');
        alert('Your first foe is the vicious Nemean Lion!');
        alert('The Nemean Lion is heading towards you.');
        while (this.hercules.health > 0 || this.nemeanLion.health > 0){
            this.hercules.chooseAttack();
            this.nemeanLion.randomAttack();
            this.hercules.health -= this.nemeanLion.attackPower;
            this.nemeanLion.health -= this.hercules.attackPower;
            console.log(this.hercules.name + ' only has ' + this.hercules.health + ' '
                + this.nemeanLion.name + ' only has ' + this.nemeanLion.health);
            if (this.hercules.health == 0){
                console.log('Hercules has died.');
                break;
            }
            else if (this.nemeanLion.health == 0){
                console.log('The Nemean Lion has been slain');
                break;
            }
        }
        console.log('Hercules has only ' + this.hercules.health + ' health left.');
        alert('The battle carries on!');


    }
}

let game = new Game();
game.runGame();