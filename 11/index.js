//Date Objects

let date = new Date();
console.log(`Year : ${date.getFullYear()}`) //Year
console.log(`Month: ${date.getMonth()}`) //Month
console.log(`Date: ${date.getDate()}`) //Date
console.log(`Day: ${date.getDay()}`) //Day
console.log(`Hours: ${date.getHours()}`) //Hours
console.log(`Minutes: ${date.getMinutes()}`) //Minutes


let olddate = new Date();
olddate.setFullYear(1970,01,01);

let newdate = new Date();
console.log(newdate);

let elapsedtime = newdate -olddate;
console.log(elapsedtime/1000)


