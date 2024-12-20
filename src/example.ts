class Person {
  person_id: string;
  person_name: string;
  person_age: number;
  person_is_married: boolean;

  constructor(
    person_id: string,
    person_name: string,
    person_age: number,
    person_is_married: boolean
  ) {
    this.person_id = person_id;
    this.person_name = person_name;
    this.person_age = person_age;
    this.person_is_married = person_is_married;
  }

  tellPersonRelationahipStatus() {
    return `${
      this.person_is_married === true ? "you are married" : "you are single"
    }`;
  }
}

// generic function in typescript
function doSomething<T>(value: T): T {
  return value;
}

console.log(doSomething(56));
console.log(doSomething("Prince"));
