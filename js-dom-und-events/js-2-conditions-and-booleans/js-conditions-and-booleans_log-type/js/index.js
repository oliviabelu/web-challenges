// const data = { a: 1, b: 2, c: 3 };
const data = [1, 2];
console.log(typeof data, data);
switch (typeof data) {
  case "undefined":
    console.log("The type of data is undefined.");
    break;
  case "number":
    console.log("The type of data is number.");
    break;
  case "not a number":
    console.log("The type of data is not a number!");
    break;
  case "string":
    console.log("The type of data is string!");
    break;
  case "boolean":
    console.log("The type of data is boolean!");
    break;
  case "function":
    console.log("The type of data is function!");
    break;
  case "object":
    if (data === null) {
      console.log("The type of data is null.");
      // }else if(data =)
    } else {
      console.log("The type of data is object or array");
    }
    break;

  default:
    console.log("No idea what type it is");
    break;
}
