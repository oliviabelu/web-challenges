console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const data = await fetchData();
console.log(data.results);

const entry = data.results.find((entry) => {
  console.log(entry);
  console.log(entry.name);
  if (entry.name === "R2-D2") {
    console.log(entry["eye_color"]);

    return entry["eye_color"];
  }
});
console.log(entry);

console.log(`The eye color of R2-D2 is ${entry["eye_color"]}`);
