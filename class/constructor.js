class CheckConstructor {
  constructor(brand, year, color) {
    this.b = brand;
    this.y = year;
    this.c = color;
  }
}
const car = new CheckConstructor("BMW", 2023, "White");
console.log(car.b, car.y, car.c);
// name, basesalary, month
// hridoy, 20bdt, april
// print: Salary of Mr. Hridoy for month April is 80BDT
