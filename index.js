"use strict"

alert('You are Hercules, the greatest of the Greek Heroes! Prepare for battle!');
runGame();

//Hercules stats
function hercules(){
    let hercules = {
        herculesHealth: 1000,
        herculesAttackPower: 50,
        herculesAttacks: {
            attacks: ['Sword Slash','Double Knee Drop','Tombstone Piledriver']
        }
    };return hercules;
}

//Nemean Lion stats
function nemeanLion(){
    let nemeanLion = {
        lionHealth: 500,
        lionAttackPower: 25,
        lionAttacks: {
            attacks: ['Rawr', 'Claw Slash', 'Head Bite']
        }
    };return nemeanLion;
}

//Lernaen Hydra stats
function lerneanHydra(){
    let lernaenHydra = {
        hydraHealth: 500,
        hydraAttackPower: 40,
        hydraAttacks: {
            attacks: ['Bite', 'Tail Whip', 'Flamethrower']
        }
    };return lernaenHydra
}

//Cerberus stats
function cerberus(){
    let cerberus = {
        cerberusHealth: 5000,
        cerberusAttackPower: 100,
        cerberusAttacks: {
            attacks: ['Headbutt', 'Fireball', 'Rock Throw']
        }
    }; return cerberus;
}

//Hercules attack prompt
function attack(hercules){
    alert('Choose an attack: ')
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

//Foes attack randomize
function lionRandomAttacks(){

}

function hydraRandomAttacks(){

}

function cerberusRandomAttacks(){

}

//Main function to run the game
function runGame(){
    let herculesStats = hercules();
    attack(herculesStats);
}