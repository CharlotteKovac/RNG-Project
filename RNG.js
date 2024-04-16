let userName = 'Charlotte'; //defined var uN
userName ? console.log(`Hi there, ${userName}. Ready to play a game?`) : console.log('Hi, ready to play a game?') //c.l to read and welcome uN if available. If no uN avail., stndrd msg pulls.
let gameQuestion = 'What kind of game do you want to play?' //defined var gQ
console.log(`${userName}, wants to know... ${gameQuestion}`); //c.l to call uN and gQ together
let rNGRange = Math.floor(Math.random() * 6); //var rNGR to offer 5 choices
//console.log(rNGRange); //call out which number was pulled from the above
let gamesToPlay = ''; //var gTP left empty to be filled in by switch statement below
switch (rNGRange) { //switch to pull from rNGR
    case 0:
        gamesToPlay = 'Stardew Valley.'; //gTP value 0 to Stardew Valley
        break;
    case 1:
        gamesToPlay = "Baldur's Gate 3."; //gTP value 1 to BG3
        break;
    case 2:
        gamesToPlay = 'RimWorld.'; //gTP value 2 to RimWorld
        break;
    case 3:
        gamesToPlay = 'Timberborn.'; //gTP value 3 to Timberborn
        break;
    case 4:
        gamesToPlay = 'Pokemon.'; //gTP value 4 to Pokemon
        break;
    case 5:
        gamesToPlay = 'Dark Souls.'; //gTP value 5 to Dark Souls

}
let rand = Math.floor(Math.random() * 6);
let descriptor = '';
switch (rand) {
    case 0:
        descriptor = "relax and snuggle in for those cozy, chill moments.";
        break;
    case 1:
        descriptor = 'to customize characters and go on a thrilling adventure that rivals the trek to the kitchen...'
        break;
    case 2:
        descriptor = "save your colonists, their lives are in your hands. Not for the faint of heart.";
        break;
    case 3:
        descriptor = "to enjoy life as a beaver. Need I say more?";
        break;
    case 4:
        descriptor = "to research and battle your way to the top!";
        break;
    case 5:
        descriptor = "to burn that pesky world to the ground.";
}
console.log(`The ideal game for you is...${gamesToPlay} The goal is ${descriptor}.`); //pulls gTP value from rNGR, also pulls rand and descriptor
