//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName,managerAge,currentTeam,trophiesWon){
  let managerDetails = [managerName,managerAge,currentTeam,trophiesWon]
  return managerDetails;
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation){
  if(formation.length==0) return null;
  let formationRequired = {
    defender: formation[0],
    midfield: formation[1],
    forward : formation[2]

  }
  return formationRequired;
}
// console.log(createFormation())
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  let arrOfplayers = [];
  for(let i=0;i<players.length;i++){
  if(players[i].debut===year){
    arrOfplayers.push(players[i])
  }}
  return arrOfplayers;
}
// console.log(filterByDebut(2003))
//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  let arrOfplayers = [];
  for(let i=0;i<players.length;i++){
  if(players[i].position===position){
    arrOfplayers.push(players[i])
  }
}
  return arrOfplayers;
}
console.log(filterByPosition("Midfielder"))
console.log(players[1].awards[2].name)
//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  let arrOfplayers = [];
  for (let i=0;i<players.length;i++) {
    for (let j=0;j<players[i].awards.length;j++) {
      if (players[i].awards[j].name === awardName) {
        arrOfplayers.push(players[i]);
        break; // If found one then no need to check other awards for this player
      }
    }
  }
  return arrOfplayers;
}

console.log(filterByAward("The Best FIFA Men's Player"));

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes) {
  let arrplayers = [];
  players.forEach(function(player) {
    let awardcount = 0;
    player.awards.forEach(function(award) {
      if (award.name === awardName) {
        awardcount++;
      }
    });

    if (awardcount === noOfTimes) {
      arrplayers.push(player);
    }
  });
  return arrplayers;
}
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName,country){
let arrOfplayers = [];
for (let i=0;i<players.length;i++) {
  for (let j=0;j<players[i].awards.length;j++) {
    if((players[i].awards[j].name === awardName)&&(players[i].country===country)) {
      arrOfplayers.push(players[i]);
      break; // If found one then no need to check other awards for this player
    }
  }
}
return arrOfplayers;
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age){
  let arrOfplayers=[];
  for(let i=0;i<players.length;i++){
    if(players[i].age<age && players[i].team===team){
      // only checking for awards if above two conditions are met
      let awardCount = 0;
      for (let j=0;j<players[i].awards.length;j++){
        if(players[i].awards[j].name){
        awardCount++; // increasing the awardCount only if awards name is found
        }
      }

      if(awardCount>=noOfAwards){
      arrOfplayers.push(players[i]); // Pushing the playerData only if the third condition is also met 
      }
    }
  }
  return arrOfplayers;
}

//Progression 9 - Sort players in descending order of their age

function SortByAge() {
  players.sort(function(a, b) {
    return b.age - a.age;
  });
  return players
}

 //Progression 10 - Sort players beloging to _____ team in descending order of awards won


function FilterByTeamxSortByNoOfAwards(team) {
  const filteredPlayers = players.filter(function(item) {
    return item.team === team;
  });

  filteredPlayers.sort(function(a, b) {
    return b.awards.length - a.awards.length;
  });

  return filteredPlayers;
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order



