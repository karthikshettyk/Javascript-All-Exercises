const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

let median;

ages.sort();

console.log("min is", ages[0]);

console.log("max is", ages[ages.length - 1]);

if (ages.length % 2 == 0) {
  median = ages[ages.length -1 / 2] + ages[ages.length / 2];
} else {
  median = ages[ages.length / 2];
}

console.log(median);

let avg;
let sum = 0;
ages.forEach((e) => (sum = sum + e));
avg = sum / ages.length;
console.log(avg);

let max = ages[ages.length - 1];
let min = ages[0];
let range = max - min;

console.log(range);

console.log(Math.abs(min - avg));

console.log(Math.abs(max - avg));
