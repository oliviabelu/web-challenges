import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();

export const server = createServer((request, response) => {
  const name = chance.name({ prefix: true, middle: true, nationality: "it" }); //create random person name
  const age = chance.age(); //create random person age
  const profession = chance.profession(); //create random person profession

  response.end(
    `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`,
  );
});
