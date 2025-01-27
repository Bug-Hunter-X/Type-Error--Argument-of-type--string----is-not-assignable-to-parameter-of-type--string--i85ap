function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(persons: string[]): string {
  return persons.map(person => greeter(person)).join('\n');
}

let user = ["Jane", "Doe"];
console.log(greeterArray(user)); //Correct handling of the array.