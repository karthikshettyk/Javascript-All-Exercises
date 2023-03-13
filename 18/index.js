var year = prompt("Enter the year")
var monthnumber = prompt("Enter the moneth")

if (year % 400 == 0) {
  console.log("The yaer is leap year");
  if (monthnumber == 1) {
    console.log(31);
  } else if (monthnumber == 2) {
    console.log(29);
  } else if (monthnumber == 3) {
    console.log(31);
  } else if (monthnumber == 4) {
    console.log(30);
  } else if (monthnumber == 5) {
    console.log(31);
  } else if (monthnumber == 6) {
    console.log(30);
  } else if (monthnumber == 7) {
    console.log(31);
  } else if (monthnumber == 8) {
    console.log(31);
  } else if (monthnumber == 9) {
    console.log(30);
  } else if (monthnumber == 10) {
    console.log(31);
  } else if (monthnumber == 11) {
    console.log(30);
  } else if (monthnumber == 12) {
    console.log(31);
  }
}
// not a leap year if divisible by 100
// but not divisible by 400
else if (year % 100 == 0) {
  console.log("The year is not a leap year")
  if (monthnumber == 1) {
    console.log(31);
  } else if (monthnumber == 2) {
    console.log(28);
  } else if (monthnumber == 3) {
    console.log(31);
  } else if (monthnumber == 4) {
    console.log(30);
  } else if (monthnumber == 5) {
    console.log(31);
  } else if (monthnumber == 6) {
    console.log(30);
  } else if (monthnumber == 7) {
    console.log(31);
  } else if (monthnumber == 8) {
    console.log(31);
  } else if (monthnumber == 9) {
    console.log(30);
  } else if (monthnumber == 10) {
    console.log(31);
  } else if (monthnumber == 11) {
    console.log(30);
  } else if (monthnumber == 12) {
    console.log(31);
  }
}
// leap year if not divisible by 100
// but divisible by 4
else if (year % 4 == 0) {
  console.log("It is a leap year")
  if (monthnumber == 1) {
    console.log(31);
  } else if (monthnumber == 2) {
    console.log(29);
  } else if (monthnumber == 3) {
    console.log(31);
  } else if (monthnumber == 4) {
    console.log(30);
  } else if (monthnumber == 5) {
    console.log(31);
  } else if (monthnumber == 6) {
    console.log(30);
  } else if (monthnumber == 7) {
    console.log(31);
  } else if (monthnumber == 8) {
    console.log(31);
  } else if (monthnumber == 9) {
    console.log(30);
  } else if (monthnumber == 10) {
    console.log(31);
  } else if (monthnumber == 11) {
    console.log(30);
  } else if (monthnumber == 12) {
    console.log(31);
  }
}
// all other years are not leap years
else {
  console.log("Not a leap year")
  if (monthnumber == 1) {
    console.log(31);
  } else if (monthnumber == 2) {
    console.log(28);
  } else if (monthnumber == 3) {
    console.log(31);
  } else if (monthnumber == 4) {
    console.log(30);
  } else if (monthnumber == 5) {
    console.log(31);
  } else if (monthnumber == 6) {
    console.log(30);
  } else if (monthnumber == 7) {
    console.log(31);
  } else if (monthnumber == 8) {
    console.log(31);
  } else if (monthnumber == 9) {
    console.log(30);
  } else if (monthnumber == 10) {
    console.log(31);
  } else if (monthnumber == 11) {
    console.log(30);
  } else if (monthnumber == 12) {
    console.log(31);
  }
}
