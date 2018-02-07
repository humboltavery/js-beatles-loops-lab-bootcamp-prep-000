function theBeatlesPlay (musicians, instruments) {
  var playArr = [];
  for (var i = 0; i < musicians.length; i++) {
     playArr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return playArr;
}

function johnLennonFacts (facts) {
  var arrOfFacts = [];
  while (facts.length > 0) {
    arrOfFacts.push(`${facts}!!!`);
    facts.pop();
  }
  return arrOfFacts;
}