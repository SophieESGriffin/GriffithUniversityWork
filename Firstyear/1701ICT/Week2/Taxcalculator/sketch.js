var grossIncome = 0;
var netIncome = 0;
var taxRate = 0.3;
var tax = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  

  grossIncome = 40000
  tax = grossIncome * taxRate;
  netIncome = grossIncome - tax;

  text("Your gross Income: $" + grossIncome,50,50)
  text("Your net Income: $" + netIncome,50,100)
}