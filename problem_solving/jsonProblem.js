const car = [
  {
    name: "BMW",
    productionYear: "2025",
  },
  {
    name: "Honda",
    productionYear: "2025",
    model: "CIVIC",
  },
];

function jsonPush(name, year, model) {
  let flag = 0;

  for (let i = 0; i < car.length; i++) {
    if (car[i].name === name && car[i].productionYear === year) {
      car[i].model = model;
      flag++;
    }
  }
  //   if (flag === 0) {
  //     let tempData = { name: name, productionYear: year, model: model };
  //     car.push(tempData);
  //   }
  let tempData;
  flag === 0 ? (tempData = { name: name, productionYear: year, model: model }) : "";
  car.push(tempData);
  console.log(car);
}

jsonPush("Honda", "2022", "Civic");
// jsonPush(["Honda", "2025", "Civic", "Bangladesh"]);
// jsonPush({ name: "BMW", productionYear: "2025", model: "EX", Country: "Bangladesh" });

// series.push(currentData);
