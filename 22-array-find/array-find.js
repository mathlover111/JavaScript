const users = [
  { id: 1, name: "雷電將軍" },
  { id: 2, name: "野獸先輩" },
  { id: 3, name: "糰子牛奶" }
];

const targetUser = users.find((user) => {
  return user.id === 2;
});

console.log(targetUser);