/**
 * Created by mmaruhnyak on 10/17/16.
 */

// Function that will return random number in range (min, max)
function randomizer(min, max) {
    return Math.random() * (max - min) + min
}

console.log(randomizer(4, 9)); // Execution of function

// Function that will return result of division
function divider(x, y) {
    if (y != 0) {
        console.log(x/y)
    } else {
        console.log("Vso ploho, pomenyai chisla")
    }

}

divider(6, 0); // Execution of function