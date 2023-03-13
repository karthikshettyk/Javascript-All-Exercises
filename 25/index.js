let weight = prompt("Enter the weight");
let height = prompt("Enter the height");

let BMI = weight / (height * height);

if (BMI < 18.5) {
  console.log("Underweight");
} else if (BMI >= 18.5 && BMI < 24.9) {
  console.log("Normal");
} else if (BMI >= 25 && BMI < 29.9) {
  console.log("Overweight");
} else if (BMI >= 30) {
  console.log("Obese");
}
