// Custom JavaScript file to add interactivity to the page elements
const lastMod = document.getElementById("last-modified");
const [date, time] = document.lastModified.split(" ");
const [month, day, year] = date.split("/");
lastMod.innerHTML = `Last modified on ${
  day + "." + month + "." + year
} at ${time}`;
