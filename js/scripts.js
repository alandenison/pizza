function Pizza(pizzaSize, toppings, price) {
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
  this.price = price;
}

detector = function(inputtedToppings) {
  var toppingsDetector = []
  for(i = 0; i < 4; i++) {
    if (inputtedToppings[i] != "none") {
      toppingsDetector.push(inputtedToppings[i]);
      };
    };
    return toppingsDetector;
  }

Pizza.prototype.calculate = function() {
  total = this.price + (parseInt(this.pizzaSize) * 2) + (((detector(this.toppings)).length) * 1.5);
  return total;
}

$(document).ready(function() {
  var total = 0;
  $("#pizzaOptions").submit(function(event) {
    event.preventDefault();
    var size = ["Small", "Medium", "Large", "Extra Large"]
    var inputtedPizzaSize = $("#sizeOption").val();
    var inputtedToppings = [$("#topping1").val(),$("#topping2").val(), $("#topping3").val(),$("#topping4").val()];
    var price = 10;
    var newPizza = new Pizza(inputtedPizzaSize, inputtedToppings, price);
    $("#displayPizza").append("<li>" +size[newPizza.pizzaSize] + " pizza with cheese, " + (detector(inputtedToppings)).join(", ") + " PRICE: $" + (newPizza.calculate() + "</li>"));
    total = total + newPizza.calculate();
    $("#totalPrice").text("$" + total.toFixed(2));
  });
});
