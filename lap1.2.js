const game = {
    team1: 'Bayern Munich',
    team2: 'Borussia Dortmund',
    players:[[
        'Never',
        'Pavard',
        'Martimez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goetka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewwandowski',

    ],
    [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',

    ],
],
score:        '4:0',
sconred:['Lewandowski','Gnarby','Lewandowski','Hummels',

],
date:'Nov 9th,2037',
odds:{
    team1:11.33,
x: 3.25,
team2:6.5,
},
};
//1
for(const [i,player]of game.scored.entries())
console.log('Goal ${i+1}: ${player}');
//2
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);
//3 
for (const [team,odd] of Objec.entries(game.odds)){
const teamStr = team === 'x' ? 'draw' : 'victory ${game[team]}';
console.log('Odd of ${teamStr} ${odd}');
}