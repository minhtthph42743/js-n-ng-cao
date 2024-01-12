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
const [players1,players2]= game.players;
console.log(players1,players2);
//2
const [gk, ...fieldPlayers]= players1;
console.log(gk,fieldPlayers);
//3
const allPlayers =[...players1,players2];
console.log(allPlayers);
//4
const players1Final = [...players1, 'Thiago', 'Coutinho','Periscic'];
//5
const {odds: {team1, x: draw, team2}} = game;
console.log(team1,draw,team2);
//6
const printGoals = function(...players){
    console.log(players);
    console.log('${players.length} goals were scored');
};
printGoals('Davies','Muller','Lewandowski','Kimmich');
printGoals('Davies','Muller');
printGoals(...game.sconred);
//7
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win')