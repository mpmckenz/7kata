document.writeln("<hr>" + "Kata #1 (forEach) :")

// Kata1 forEach();
const cohortThreeNames = ["Michael", "James", "Lea", "Carl", "Doug"]

function forEachStudent(cohortThreeNames) {
    document.writeln("Hello " + cohortThreeNames + ".")
}

function input() {
    for (let i = 0; i < cohortThreeNames.length; i++) {
        forEachStudent(cohortThreeNames[i])
    }
}
input();
document.writeln("<hr>" + "Kata #2 (map) :")


// Kata2 map();
function mapEvens() {
    for (let i = 0; i <= 40; i += 2) {
        document.writeln([i]);
    }
}
mapEvens();
document.writeln("<hr>" + "Kata #3 (some) :")


// Kata3 some
const randomArray = ["dog", "cat", "fish", "rabbit", "horse", "dragon", "zombie"]

function some(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "dog") {
            return "true"
        } else {
            return "false"
        }
    }
}
document.writeln(some(randomArray))
document.writeln("<hr>" + "Kata #4 (find) :")

// Kata 4
const numberArray = [1, 2, 3, 4, 5, 6, 7]

function find(array, parameterFunction) {
    for (let i = 0; i <= array.length; i++) {
        if (parameterFunction(array[i]) === true) {
            return array[i]
        }
    }
}
document.writeln(find(numberArray, s => s > 5))

document.writeln("<hr>" + "Kata #5 (findIndex) :")



// Katas5 findIndex()
const anotherNumberArray = [13, 0, 22, 58, 14, 98]
function findIndex(array, indexFinderParameter) {
    for (let i = 0; i < array.length; i++) {
        const arrayIndex = array[i]
        indexFinderParameter(arrayIndex, i, array)
        }
    }
findIndex(anotherNumberArray, function(number, i) {
    if (number > 63) {
        document.writeln(i)
    }
})

document.writeln("<hr>" + "Kata #6 (every) :")


//Katas6 every()
function every(array, everyCheckParameter) {
    for (let i = 0; i < array.length; i++) {
        const eachNumber = array[i];
        everyCheckParameter(eachNumber, i, array)
        }
    }
every(anotherNumberArray, function(number, index, array) {
    EveryGreaterThan30 = (number < 10) ? array[index] : ""
    document.writeln(EveryGreaterThan30)
})

// Kata 7 filter()
const wordsToFilter = ["apple", "duck", "go", "swim"]
document.writeln("<hr>" + "Kata #7 (filter) :")

function filter(array, filterCheckParameter) {
    for (let i = 0; i < array.length; i++) {
        const currentValue = array[i]
        filterCheckParameter(currentValue, i, array)
    }
}
filter(wordsToFilter, function(word, index, array) {
    wordsLongerThan4 = (word.length > 4) ? word : ""
    document.writeln(wordsLongerThan4)
})


document.writeln("<hr>")
