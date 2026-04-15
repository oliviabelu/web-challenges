import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

//const countriesLowCase = countries.map((country) => country.name.toLowerCase());
//console.log(countriesLowCase);

queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value; //.toLowerCase();

  console.log(searchString);

  // const foundCountry = countries.find(
  //   (country) => country.name.toLocaleLowerCase() === searchString, //|| country.name.startsWith(searchString),
  // );

  const foundCountries = countries.filter(
    (country) =>
      country.name.toLowerCase() === searchString.toLowerCase() ||
      country.name.startsWith(searchString) ||
      country.name.startsWith(searchString.toLowerCase()),
  );

  // if (foundCountry) {
  //   const countryElement = Country(foundCountry);
  //   container.append(countryElement);
  // }

  //if (foundCountries) {
  foundCountries.forEach((foundCountry) => {
    const countryElement = Country(foundCountry);
    container.append(countryElement);
  });
  //}
});
