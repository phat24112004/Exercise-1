const people = [
  { name: "Alice", city: "Hanoi" },
  { name: "Bob", city: "Saigon" },
  { name: "Eve", city: "Hanoi" }
];

const grouped = {};

for (let person of people) {
  const city = person.city;
  const name = person.name;

  if (!grouped[city]) {
    grouped[city] = [];
  }

  grouped[city].push(name);
}

console.log(grouped);
