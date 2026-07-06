const ages = [14, 20, 12, 18, 32, 9];

const adultAges = ages.filter((age) => {
  return age >= 18;
});

console.log(adultAges);