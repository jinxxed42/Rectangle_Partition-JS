/**
 * A square is found by comparing each x coordinate with each y coordinate - if there's a match it's a square.
 * The exception is x=0 and y=0, because it can't be a square with no sides.
 **/

var inputs = readline().split(' ');
const w = parseInt(inputs[0]);
const h = parseInt(inputs[1]);
const countX = parseInt(inputs[2]);
const countY = parseInt(inputs[3]);

let x = []; // array to store all x-coordinates except the 0 one
let y = []; // array to store all y-coordinates except the 0 one

// Storing all x-coordinates
var inputs = readline().split(' ');
for (let i = countX -1; i >= 0; i--) {
    for (let j = i-1; j >= 0; j--) {
        x.push(parseInt(inputs[i]) - parseInt(inputs[j]));
    }
    x.push(w - parseInt(inputs[i]));
    x.push(parseInt(inputs[i]));
}
x.push(w);

// Storing all y-coordinates
var inputs = readline().split(' ');
for (let i = countY - 1; i >= 0; i--) {
    for (let j = i-1; j >= 0; j--) {
        y.push(parseInt(inputs[i]) - parseInt(inputs[j]));
    }
    y.push(h - parseInt(inputs[i]));
    y.push(parseInt(inputs[i]));
}
y.push(h);

// Counting all x and y coordinates of equal value
let result = 0;
for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < y.length; j++) {
        if (x[i] === y[j]) {
            result++;
        }
    }
}

console.log(result);
