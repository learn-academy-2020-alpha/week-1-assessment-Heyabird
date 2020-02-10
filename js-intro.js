// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// Please read all questions thoroughly
// Psuedo coding is highly recommended

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit. Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

boilingPointCheck = (temp) => {
  if (temp < 212) {
    return `${temp} is below boiling point`
  } else if (temp > 212) {
    return `${temp} is above boiling point`
  } else if (temp = 212) {
    return `${temp} is at boiling point`
  }
}

////Test:
// console.log(boilingPointCheck(35))
// console.log(boilingPointCheck(350))
// console.log(boilingPointCheck(212))


// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]


mult5 = (array) => {
    let newArr = []
    for (let i = 0; i<array.length; i++) {
        newArr.push(array[i]*5)
    }
    return newArr
}

////Test:
//console.log(mult5(myNumbers1));

// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2]

mult5map = (array) => {
  let newArr = array.map(value => value*5)
  return newArr
}
////Test:
// console.log(mult5map(myNumbers2))


// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

removeVowel = (str) => {
  let newArr1 = str.split("")
  let newArr2 = newArr1.filter(value => value.toLowerCase() !== "a" && value.toLowerCase() !== "e" && value.toLowerCase() !== "i" && value.toLowerCase() !== "o" && value.toLowerCase() !== "u")
  let newStr = newArr2.join("")
  return newStr
  }


// console.log(removeVowel(stringWithVowels1))
// console.log(removeVowel(stringWithVowels2))
//$$$Is there a shorter way to write this?


// --------------------5) Expand the logic from #4 to inform your user if the variable passed into the vowel removal function is not a string.
// Copy and paste or rewrite the function. Use the test variables provided below.

var notAString1 = true
var notAString2 = 42

removeVowel = (str) => {
  if (typeof(str)=== "string") {
    let newArr1 = str.split("")
    let newArr2 = newArr1.filter(value => value.toLowerCase() !== "a" && value.toLowerCase() !== "e" && value.toLowerCase() !== "i" && value.toLowerCase() !== "o" && value.toLowerCase() !== "u")
    let newStr = newArr2.join("")
    return newStr
  } else {
    return "that is not a string!"
  }
}

console.log(removeVowel(notAString1))
console.log(removeVowel(notAString2))

// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]


var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]


onlyCats = (array) => {
  let newArr = array.filter(value=> value.animal==="cat")
  return newArr
}

console.log(onlyCats(toonimals));




// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

//CAN use object.keys

noCatsNames = (array) => {
  let newArr = array.filter(value => value.animal!=="cat")
  let newArr2 = newArr.map(value => value.name)
  newArr2=newArr2.join(" ")
  return newArr2
}

console.log(noCatsNames(toonimals));
