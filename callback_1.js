/**
 * Created by mmaruhnyak on 10/24/16.
 */

// define function with callback
function execution(x, y, callback) {
  return callback(x,y);
}

function divider(x,y) {
  if (y != 0) {
    return x/y;
  }
  else {
    return "You can not divide on 0"
  }
}

function randomizer(x,y) {
  return Math.random() * (y - x) + x;
}

console.log(execution(7,4,divider));
console.log(execution(7,0,divider))
console.log(execution(34,56,randomizer));
