type TUser = {
  name: string;
  age: number;
  hello(): void;
};

class UserWithType implements TUser {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  hello(): void {
    console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`);
  }
}


const user2: TUser = new UserWithType("Bob", 22);
user2.hello();
