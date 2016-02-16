// write a function called addOne() that takes a number as input and returns a new number that's one more than the input.

var addOne = function(num) {
	return num + 1
}

console.assert(addOne(5) === 6)

// // write a function called doubleNum() that takes a number as input and returns the double of the number. 

var doubleNum = function(num) {
	return num * 2
}

console.assert(doubleNum(10) === 20)

// // write a function called isNegative(). it should take a single, numerical input. it should output true if the number is negative, and false if the number is positive.

var isNegative = function(num) {
	if (num < 0) {
		return true
	}
	return false
}

console.assert(isNegative(3) === false)
console.assert(isNegative(-3) === true)

// // modify isNegative() so that it only accepts numerical input. it should return the string, "input must be a number," if bad input has been submitted.

var isNegative = function(num) {
	if (num < 0) {
		return true
	}
	if (typeof num !== "number") {
		return "input must be a number"
	}
	return false
}

console.assert(isNegative("string") === "input must be a number")

// // write a function called isEven() that tells whether a number is even or not. 

var isEven = function(num) {
	if (num % 2 === 0 || num === 0)  {
		return true
	}
	return false
}

console.assert(isEven(14) === true)
console.assert(isEven(0) === true)
console.assert(isEven(7) === false)

// // write a function called isBig() that tells whether a number is greater than 10,000 or not.

var isBig = function (num) {
	if (num > 10000) {
		return true
	}
	return false
}

console.assert(isBig(14) === false)
console.assert(isBig(140000) === true)

// // write a function called addPeriod(). it should take as input a string, and return a copy of that string with a period on the end. 

var addPeriod = function(inputString) {
	return inputString + "."
}

console.assert(addPeriod("hello world") === "hello world.")

// write a function called sayItTwice(). it should take as input a string ('bubble') and return that string repeated twice, with a space between ('bubble bubble').

var sayItTwice = function(inputString) {
	return inputString + " " + inputString
}
console.assert(sayItTwice("love") === "love love")

//write a function called firstShallBeLast(). it should add a copy of the first element of a string to the end of the string, then return the result.

var myString = "The first letter here is:"

var firstShallBeLast = function(inputString) {
    for (var i = 0; i < inputString.length; i++) {
        return inputString + " " + inputString[0]
    }
}

console.assert(firstShallBeLast(myString) === "The first letter here is: T")

// write a function called secondToLast(). it should return the second-to-last element of a string or array. 

var coolString = "Programming is the coolest job ever" 
var coolArray = [11,26,38,41] 

var secondToLast = function(input) {
    for (var i = 0; i < input.length; i++) {
        return input[input.length-2]
    } 
}

console.assert(secondToLast(coolArray) === 38)
console.assert(secondToLast(coolString) === "e")

// write a function called hasX(). it should take as input a string, and it should return true if the string contains the character 'x', and false if it does not.

var xString = "Programming is extremely exciting."
var noXString = "Programming is very interesting."

var contains = function(sequence, element) {
    if (sequence.indexOf(element) === -1) {
        return false
    }
    return true
}

var hasX = function(inputString) {
    if (contains(inputString, "x")) {
        return true
    }
    return false
}

console.assert(hasX(xString) === true)
console.assert(hasX(noXString) === false)

// write a function called hasEl(). it should take two inputs: a string and a character. it should return true if the string contains the character, and false if it does not. if you get it right, try the function on an array and a potential array element instead. does it still work?

var xString = "Programming is extremely exciting."
var coolArray = [11,26,38,41] 

var hasEl = function(sequence, element) {
    if (sequence.indexOf(element) === -1) {
        return false
    }
    return true
}

console.assert(hasEl(xString, "m") === true)
console.assert(hasEl(coolArray, 11) === true)

// write a function called incrementEach(). it should take as input an array of numbers and return a new array that contains each number from the input array, increased by one. 

var coolArray = [11,26,38,41] 

var incrementEach = function(arrayOfNums) {
    var newArray = []
    for (var i = 0; i < arrayOfNums.length; i++) {
     	newArray.push(arrayOfNums[i] + 1)
    }
    return newArray
}

//console.log(incrementEach(coolArray))
//console.assert(incrementEach(coolArray) === [12, 27 ,39 ,42]) <= result correct but console.assert fails

// write a function called doubleAll(). it should take as input an array of numbers and return a new array that contains each number from the input array, doubled. 

var coolArray = [11,26,38,41] 

var doubleAll = function(arrayOfNums) {
    var newArray = []
    for (var i = 0; i < arrayOfNums.length; i++) {
     	newArray.push(arrayOfNums[i] * 2)
    }
    return newArray
}

//console.log(doubleAll(coolArray))
//console.assert(doubleAll(coolArray) === [22, 52 ,76 ,82]) <= result correct but console.assert fails
// write a function called getFirstLetterCaps(). it should take as input a string, and it should return a capitalized version of the string's first character.

var smallString = "please capitalize me!"

var getFirstLetterCaps = function(inputString) {
    var firstLetter = inputString[0]       
        return firstLetter.toUpperCase()
}

console.assert(getFirstLetterCaps(smallString) === "P")

// write a function called capitalizeWord(). it should take as input a string, and return a copy of that string with the first character capitalized. 

var capitalizeWord = function(inputString) {
    var firstLetter = inputString[0]       
        return firstLetter.toUpperCase() + inputString.substr(1, inputString.length) 
}

console.assert(capitalizeWord(smallString) === "Please capitalize me!")

// write a function called capitalizeAllWords(). it should take as input an array of strings, and it should return a new array where all the words have been capitalized. HINT: use your capitalizeWord() function from above. 

var arrOfStrings = ["what is love", "baby don't hurt me", "don't hurt me", "no more"]

var capitalizeAllWords = function(inputArray) {
    var newArray = []
    for (var i = 0; i < inputArray.length; i++) {
        var singleString = inputArray[i].split(" ")
        
        for (var w = 0; w < singleString.length; w++) {
        	var singleWord = singleString[w]
        	var firstLetter = singleWord[0]
         	firstLetter.toUpperCase() + singleWord.substr(1, singleWord.length)
         
         	newArray.push( firstLetter.toUpperCase() + singleWord.substr(1, singleWord.length))
        
			}
		}
    return newArray
}

//console.log(capitalizeAllWords(arrOfStrings))
//console.assert(capitalizeAllWords(arrOfStrings) === ["What", "Is", "Love", "Baby", "Don't", "Hurt", "Me", "Don't", "Hurt", "Me", "No", "More"]) <= result correct, but assert fails

// write a function called arrayToString(). it should take as input an array, and it should concatenate all of the array's elements into one big string, and then return that string. 

var arrOfEls = ["I'm a string", "Me too!", "And me..."]

var arrayToString = function(inputArray) {
    var newString = ""
    for (var i = 0; i < inputArray.length; i++) {
        var singleString = inputArray[i]
        newString = newString + " " + singleString
    }
    return newString
}

//console.log(arrayToString(arrOfEls))
//console.assert(arrayToString(arrOfEls) === "I'm a string Me too! And me...") <= result correct, but assert fails

// write a function called shortiesOnly(). taking as input an array of strings, it should return a new array containing only those strings with fewer than four characters. 

var cuteArray = ["bear", "cat", "panda", "fox", "bunny", "dog"]

var shortiesOnly = function(inputArray) {
    var newArray = []
    for (var i = 0; i < inputArray.length; i++) {
        var singleString = inputArray[i]
        if (singleString.length < 4) {
            newArray.push(singleString)
        }
    }    
 	return newArray   
}

// console.log(shortiesOnly(cuteArray))    
// console.assert(shortiesOnly(cuteArray) === ["cat", "fox", "dog"]) <= result correct, but assert fails

// write a function called reverseIt(). it should take as input a string or array (remember that we can often treat them the same way), and it should return a reversed version of that input. 

var cuteArray = ["bear", "cat", "panda", "fox", "bunny", "dog"]
var xString = "Programming is extremely exciting."

var reverseIt = function(input) {
    var newArray = []
    var newString = ""
    if (typeof input === "object") {
        for (var i = input.length - 1; i >= 0; i--) {
        newArray.push(input[i])
        }
        return newArray
    }
    if (typeof input === "string") {
        for (var i = input.length - 1; i >= 0; i--) {    
        newString += input[i]
    }
        return newString
    }
}

//console.log(reverseIt(xString)) => .gniticxe ylemertxe si gnimmargorP
//console.log(reverseIt(cuteArray)) => [ 'dog', 'bunny', 'fox', 'panda', 'cat', 'bear' ]

// write a function called getValue(). it should take two inputs: an object and a key. it should return the corresponding value for that key within the object. keep in mind that this should be a one-line function. no more than two. 
	
var petObject = {
    type: "cat",
    name: "Muffin",
    age: 5,
    color: "grey"
	}

var getValue = function(inputObject, key) {
    return inputObject[key]
}

//console.log(getValue(petObject, "type")) => "cat"

// write a function called getAllValues(). it should take as input an object, and it should return the values of all the keys in the object. 

var getValues = function(inputObject) {
    var valuesArr = []
    for (var key in inputObject) {
    valuesArr.push(inputObject[key])
    }
    return valuesArr
}

//console.log(getValues(petObject)) => [ 'cat', 'Muffin', 5, 'grey' ]

// write a function called addProp(). It should take three inputs: an object, a property name, and a value. It should return the original object, plus a new key-value pair corresponding to the input.

var addProp = function(inputObject, prop, value) {
    inputObject[prop] = value
	return inputObject
}

//console.log(addProp(petObject, "favFood", "roaches")) => { type: 'cat', name: 'Muffin', age: 5, color: 'grey',favFood: 'roaches' }

// write a new version of addProp() that only takes two inputs: an object, and a second object containing a single key-value pair. this key-value pair should take the place of the second and third inputs in the above problem. e.g.:

var addProp = function(inputObject, addObj) {
    for (var prop in addObj) {
    inputObject[prop] = addObj[prop]
	}
    return inputObject
}

// console.log(addProp(petObject, {favFood: "roaches", bestFriend: "Natalia"})) => { type: 'cat',
//   name: 'Muffin',
//   age: 5,
//   color: 'grey',
//   favFood: 'roaches',
//   bestFriend: 'Natalia' }


// write a function called getKeys(). it should take as input an object, and it should return the names of all the keys (properties) of the object.

var getKeys = function(inputObject) {
    var newArray = []
    for (var prop in inputObject) {
     newArray.push(prop)
	}
    return newArray
}

//console.log(getKeys(petObject)) => [ 'type', 'name', 'age', 'color' ]

// write a function called addPropAll(). it should take three inputs: an array of objects, a property name, and a value. it should return a new array of objects, where each object has been supplemented with the key-value pair from the input. 

var tigerObject = {
    type: "cat",
    name: "Tiger",
    age: 6,
    color: "orange"
}
var muffinObject = {
    type: "cat",
    name: "Muffin",
    age: 5,
    color: "grey"
}

var petArray = [tigerObject, muffinObject]

var addPropAll = function (objArray, prop, value) {
    var newArray =[]
    for (var i = 0; i < objArray.length; i++) {
        var singleObject = objArray[i]
        singleObject[prop] = value
        newArray.push(singleObject)
	}
    return newArray
    }
   
// console.log(addPropAll(petArray, "favToy", "mouse")) => [ { type: 'cat',
//     name: 'Tiger',
//     age: 6,
//     color: 'orange',
//     favToy: 'mouse' },
//   { type: 'cat',
//     name: 'Muffin',
//     age: 5,
//     color: 'grey',
//     favToy: 'mouse' } ]

// modify addPropAll() in the same way that you modified addProp above. it should take two inptus, an array of objects and a single object containing a single key-value pair. it should return a new array of objects, where each object has been supplemented with the key-value pair from the input.

var addPropAll = function (objArray, addObj) {
    var newArray =[]
    for (var i = 0; i < objArray.length; i++) {
        var singleObject = objArray[i]
        for (var prop in addObj) {
            singleObject[prop] = addObj[prop]
        	newArray.push(singleObject)
		}
    }
    return newArray
    }
   
// console.log(addPropAll(petArray, {favToy: "mouse"})) => [ { type: 'cat',
//     name: 'Tiger',
//     age: 6,
//     color: 'orange',
//     favToy: 'mouse' },
//   { type: 'cat',
//     name: 'Muffin',
//     age: 5,
//     color: 'grey',
//     favToy: 'mouse' } ]

// write a function called logValues() that takes two inputs: an array of objects, and a property name. for each object in the array, it should log the value stored under the given property name within that object. 

var petArray = [tigerObject, muffinObject]

var logValue = function (obj, propName) {
    for (var prop in obj) {
        if (prop === propName) {
        console.log(obj[prop])
    }
  }
}

var logValues = function (objArray, propName) {
    for (var i=0; i < objArray.length; i++){
        var singleObject = objArray[i]
        logValue(singleObject, propName)
    }
}


//console.log(logValues(petArray, "name")) => Tiger Muffin

// write a function called getSpecificValues() that takes two inputs: an array of objects, and a property name. it should return an array containing the value stored under that property name for each object. for example, getSpecificValues(booksArray,'author') should return an array containing the author of every book object in the array. 
var returnValue = function (obj, propName) {
    for (var prop in obj) {
        if (prop === propName) {
        return(obj[prop])
    }
  }
}

var getSpecificValues = function (objArray, propName) {
    var valuesArray = []
    for (var i=0; i < objArray.length; i++){
        var singleObject = objArray[i]
        var values = returnValue(singleObject, propName)
        valuesArray.push(values)
    }
    return valuesArray
}
var result = getSpecificValues(petArray, "name")
//console.log(result) => [ 'Tiger', 'Muffin' ]












