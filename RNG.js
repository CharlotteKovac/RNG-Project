let userName = 'Charlotte'; //defined var uN
userName ? console.log(`Hi there, ${userName}. Ready to play a game?`) : console.log('Hi, ready to play a game?') //c.l to read and welcome uN if available. If no uN avail., stndrd msg pulls.
let gameQuestion = 'What kind of game do you want to play?' //defined var gQ
console.log(`${userName}, wants to know... ${gameQuestion}`); //c.l to call uN and gQ together
let rNGRange = Math.floor(Math.random() * 6); //var rNGR to offer 5 choices
console.log(rNGRange); //call out which number was pulled from the above
let gamesToPlay = ''; //var gTP left empty to be filled in by switch statement below
switch (rNGRange) { //switch to pull from rNGR
    case 0:
        gamesToPlay = 'Stardew Valley is great for cozy, chill moments.'; //gTP value 0 to Stardew Valley
        break;
    case 1:
        gamesToPlay = "Baldur's Gate 3, to customize characters and go on a thrilling adventure that rivals the trek to the kitchen..."; //gTP value 1 to BG3
        break;
    case 2:
        gamesToPlay = 'RimWorld, not for the faint of heart. These colonists lives are in your hands.'; //gTP value 2 to RimWorld
        break;
    case 3:
        gamesToPlay = 'Timberborn, cause you get to play as beavers. Need I say more?'; //gTP value 3 to Timberborn
        break;
    case 4:
        gamesToPlay = 'Pokemon. To research and battle your way to the top!'; //gTP value 4 to Pokemon
        break;
    case 5:
        gamesToPlay = 'Dark Souls. Cause you sometimes want to burn the world.'; //gTP value 5 to Dark Souls

}
console.log(`The ideal game for you is...${gamesToPlay}`); //pulls gTP value from rNGR along with description of game.
