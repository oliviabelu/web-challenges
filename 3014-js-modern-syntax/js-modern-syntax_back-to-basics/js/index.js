/*
Now that you've practiced destructuring, default parameters, and the spread operator,
try reversing the challenge by rewriting this code without using these modern features.
*/

//export const getNameAndCountry = ({ name, country }) => [name, country];

export function getNameAndCountry(city) {
  const name = city.name;
  const country = city.country;

  return [name, country];
}

// export const getRelocatedCity = (
//   city1,
//   city2 = { name: "Berlin", country: "Germany" },
// ) => {
//   const [, country] = getNameAndCountry(city2);
//   return {
//     ...city1,
//     country,
//   };
// };

export function getRelocatedCity(city1, city2) {
  city2 = city2 || { name: "Berlin", country: "Germany" };

  const city = getNameAndCountry(city2);
  const country = city[1];
  // console.log(city);
  // console.log("country " + country);

  const relocatedCity = {};

  for (const key in city1) {
    console.log(Object.hasOwn(city1, key));
    if (Object.hasOwn(city1, key)) {
      relocatedCity[key] = city1[key];
    }
  }

  relocatedCity.country = country;

  return relocatedCity;
}

const relocatedCity = getRelocatedCity({ name: "Paris", country: "France" });
const nameAndCountry = getNameAndCountry({ name: "Paris", country: "France" });

//console.log(relocatedCity);
//console.log(nameAndCountry);

// const city2 = getNameAndCountry(city2.name, city2.country);
// return {city1.name, city1.country, };
