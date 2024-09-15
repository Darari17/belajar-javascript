class User {
  constructor(firstName, lastName, username, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.age = age;
  }

  greeting() {
    return `Hello, ${this.firstName} ${this.lastName}`;
  }
}

const user1 = new User("farid", "rhamadhan", "faridrd", 28);

console.log(user1.greeting());
