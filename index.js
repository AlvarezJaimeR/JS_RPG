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
    chosenAttack(){
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
                    check = true;
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

    chosenAttack(){
        let randomAttack = this.attack[Math.floor(Math.random()*this.attack.length)];
        console.log(this.name + ' will use ' + randomAttack);
        return randomAttack;
    }
}

class Game{
    constructor(){
    //Hercules stats
    this.hercules = new Hero('Hercules', 2000, 100, ['Slash','Double Knee Drop','Tombstone Piledriver']);
    //Nemean Lion stats
    this.nemeanLion = new Foe('Nemean Lion', 300, 100, ['Rawr', 'Claw Slash', 'Head Bite']);
    //Lernaen Hydra stats
    this.lernaenHydra = new Foe('Lernaen Hydra', 500, 120, ['Bite', 'Tail Whip', 'Flamethrower']);
    //Cerberus stats
    this.cerberus = new Foe('Cerberus', 700, 140, ['Headbutt', 'Fireball', 'Rock Throw']);
    }

    runGame(){
        alert('You are Hercules, the greatest of the Greek Heroes! Prepare for battle!');
        alert('There are 3 foes that you will need to conquer in order to save the world!');
        this.chooseWeapon();        
        alert('Your first foe is the vicious Nemean Lion!');
        alert('The Nemean Lion is heading towards you.');
        this.foeFight(this.nemeanLion);
        console.log('Hercules has only ' + this.hercules.health + ' health left.');
        alert('The battle carries on!');
        alert('There is a Lernaen Hydra rushing towards you!');
        this.foeFight(this.lernaenHydra);
        console.log('Hercules has only ' + this.hercules.health + ' health left.');
        alert('The toughest foe is up ahead!');
        this.foeFight(this.cerberus);
        this.victory();
    }

    chooseWeapon(){
        let weapon = prompt('Please pick 1 of the 3 available weapons: 1 - Sword (Strength) 2 - Shield (Defense) 3 - Lance (Balanced)');
        let check = false;
        while (check == false){
            switch(weapon){
                case '1':
                    console.log(this.hercules.name + ' will use the sword!');
                    this.hercules.health = 1000;
                    this.hercules.attackPower = 250;
                    check = true;
                    break;
                case '2':
                    console.log(this.hercules.name + ' will make good use of the shield!');
                    this.hercules.health = 3000;
                    this.hercules.attackPower = 50;
                    check = true;
                    break; 
                case '3':
                    console.log(this.hercules.name + ' will gladly use the lance');
                    check = true;
                    break;
                default: 
                    alert('Choose one of these weapons.');
                    weapon = prompt('Please pick 1 of the 3 available weapons: 1 - Sword (Strength) 2 - Shield (Defense) 3 - Lance (Balanced)');
                    break;
            }
        }
    }

    foeFight(foe){
        while (this.hercules.health > 0 || foe.health > 0){
            this.hercules.chosenAttack();
            foe.chosenAttack();
            this.hercules.health -= foe.attackPower;
            foe.health -= this.hercules.attackPower;
            console.log(this.hercules.name + ' only has ' + this.hercules.health + ' '
                + foe.name + ' only has ' + foe.health);
            if (this.hercules.health <= 0){
                console.log('Hercules has died.');
                break;
            }
            else if (foe.health <= 0){
                console.log('The ' + foe.name + ' has been slain');
                break;
            }
        }
    }

    victory(){
        if (this.hercules.health > 0){
            console.log('Hercules has barely any health left... ' + this.hercules.health + ' health left.');
            console.log('Hercules is victorious!');
            alert('You have defeated all of the foes standing in your way!');
            alert('Hercules has saved the world!');
        }
        if (this.hercules.health <= 0){
            console.log('Better luck next time!');
        }
    }
}

let game = new Game();
game.runGame();