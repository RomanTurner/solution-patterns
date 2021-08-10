function AlphabetSoup(str) {
  const strArr = str.split("");
  strArr.sort((a, b) => a.localeCompare(b));
  const newStr = strArr.join("");
  return newStr;
}

console.log(AlphabetSoup("coderbyte"));

function playersChoice(runningSum) {
  if (runningSum + 11 > 21) {
    return 1;
  } else {
    return 11;
  }
}

function BlackjackHighest(strArr) {
  const deck = {
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    jack: 10,
    queen: 10,
    king: 10,
  };

  const highestDeck = {
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    jack: 11,
    queen: 12,
    king: 13,
  };

  let highest = "two";
  let sum = 0;
  const hasAce = strArr.includes("ace");
  console.log(hasAce);

  if (hasAce) {
    const filteredArr = strArr.filter((el) => el !== "ace");
    let runningSum = filteredArr.reduce((acc, curr) => {
      if (highestDeck[curr] > highestDeck[highest]) highest = curr;
      return acc + deck[curr];
    }, 0);

    const ace = playersChoice(runningSum);
    if (ace !== 1) highest = "ace";
    sum = runningSum + ace;
  } else {
    sum = strArr.reduce((acc, curr) => {
      if (highestDeck[curr] > highestDeck[highest]) highest = curr;
      return acc + deck[curr];
    }, 0);
  }

  return sum === 21
    ? `blackjack ${highest}`
    : sum > 21
    ? `above ${highest}`
    : `below ${highest}`;
}

const test = ["two", "three", "ace", "king"];
const test2 = ["queen", "ace"];

console.log(BlackjackHighest(test));
console.log(BlackjackHighest(test2));
/*
git add . 
git commit -m 'sp'
git push
*/
