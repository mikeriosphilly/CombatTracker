let hitCount = 0
let missCount = 0

//Assign variables to each paragraph element
//Assign onclick events to buttons
//Create functions for adding, subtracting for each button
//Assign functions to buttons
//Create function for "Long Rest" to clear both scores

let hitScore = document.getElementById("scoreHit")
let missScore = document.getElementById("scoreMiss")
console.log("Working")

function addHit() {
    hitCount += 1
    hitScore.innerText = hitCount
}
function subtractHit() {
    if (hitCount > 0) {
        hitCount -= 1
        hitScore.innerText = hitCount
    }
}
function addMiss() {
    missCount += 1
    missScore.innerText = missCount
}
function subtractMiss() {
    if (missCount > 0) {
        missCount -= 1
        missScore.innerText = missCount
    }
}
function longRest() {
    hitCount = 0
    missCount = 0
    hitScore.innerText = hitCount
    missScore.innerText = missCount
}