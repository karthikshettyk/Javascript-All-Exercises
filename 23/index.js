let n = prompt("Enter the num");
let flag = true;

if (n <= 1) {
  flag = false;
} else {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      flag = false;
    }
  }
}

if (flag == false) {
  console.log("Not a prime");
} else {
  console.log("It is a prime");
}
