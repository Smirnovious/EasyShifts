const mokdanOriginal = ["אלכס", "שי", "דויד", "אינה", "לב", "לנה"];
const ahmashOrigina = ['רומן', ]

const choosePerson = (arr) => {
    let personIndex = Math.floor(Math.random() * arr.length);
    let WorkersOfTheShift = arr.filter((person) => arr[personIndex] === person);
    return WorkersOfTheShift;
}

choosePerson(mokdanOriginal);

let iluzim = {
    1: {
    0: ["אלכס", "שי", "דויד", "אינה", "לב", "לנה"],
    1: [],
    2: [],
    },
    2: {
    0: [],
    1: [],
    2: [],
    },
    3: {
    0: [],
    1: [],
    2: [],
    },
    4: {
    0: [],
    1: [],
    2: [],
    },
    5: {
    0: [],
    1: [],
    2: [],
    },
    6: {
    0: [],
    1: [],
    2: [],
    },
    7: {
    0: [],
    1: [],
    2: [],
    },
    
}

console.log(choosePerson(iluzim[1][0]))
console.log(choosePerson(iluzim[1][0]))

// make if...else to see if the person is in the shift or not and to filter him from the same day (1 or 2);