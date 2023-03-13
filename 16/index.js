let season = prompt("Enter the season");


if (season == "September" || season == "October" || season == "November") {
  console.log("Autumn");
} else if (
  season == "December" ||
  season == "January" ||
  season == "February"
) {
  console.log("Winter");
} else if (season == "March" || season == "April" || season == "May") {
  console.log("Spring");
} else {
  console.log("Summer");
}
