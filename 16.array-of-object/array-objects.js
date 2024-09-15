const user1 = {
  username: "doraemon",
  age: "200",
};
const user2 = {
  username: "naruto",
  age: "13",
};
const user3 = {
  username: "seto",
  age: "15",
};
const user4 = {
  username: "sasuke",
  age: "40",
};

const users = [user1, user2, user3, user4];

const filter = users.filter((item) => item.age >= 17);

filter.forEach((item, i) => {
  console.log(`${i + 1}. username: ${item.username} | age: ${item.age}`);
});
