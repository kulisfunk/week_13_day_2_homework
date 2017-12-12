use super_cars;

db.dropDatabase();

db.cars.insertMany([
  {make: "McLaren", model: "650S", power: "641 bhp"},
  {make: "Ferrari", model: "488 GTB", power: "660 bhp"},
  {make: "Porsche", model: "911 GT3", power: "500 bhp"},
  {make: "Ferrari", model: "F12 Berlinetta", power: "770 bhp"},
  {make: "Audi", model: "Audi R8", power: "602 bhp"},
  {make: "Ford", model: "Ford GT", power: "550 bhp"},
  {make: "Aston Martin", model: "DB11", power: "600 bhp"},
  {make: "BMW", model: "i8", power: "369 bhp"},
  {make: "Lamborghini", model: "Huracan", power: "602 bhp"},
  {make: "Lexus", model: "LFA", power: "552 bhp"},
]);
