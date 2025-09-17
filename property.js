const people = [
  { name: "Alice", city: "Hanoi" },
  { name: "Bob", city: "Saigon" },
  { name: "Eve", city: "Hanoi" }
];

const grouped = {};
const hanoiPeople = people.filter(p => p.city === "Hanoi");
grouped["Hanoi"] = hanoiPeople.map(p => p.name);

const saigonPeople = people.filter(p => p.city === "Saigon");
grouped["Saigon"] = saigonPeople.map(p => p.name);
console.log(grouped);
