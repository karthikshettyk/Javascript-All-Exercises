let date = new Date();

let day = date.getDay();
let month = date.getMonth();
let year = date.getFullYear();
let hours = date.getHours();
let minutes = date.getMinutes();

console.log(`${year}-${month}-${day} ${hours}:${minutes}`);
console.log(`${day}-${month}-${year} ${hours}:${minutes}`);
console.log(`${day}/${month}/${year} ${hours}:${minutes}`);

