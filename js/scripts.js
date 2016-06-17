var sizes = ["Small", "Medium", "Large", "Extra Large"];
var toppings = []
var total = "";

function Pizza(pizzaSize, toppings) {
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
}

Pizza.prototype.finishedPizza = function() {
  var toppingsDetector = []
  for(i = 0; i < 4; i++) {
    if (toppings[i] != "none") {
      toppingsDetector.push(toppings[i]);
      };
    };
      return sizes[this.pizzaSize] + " pizza with Cheese, " + toppingsDetector.join(', ');
  };

Pizza.prototype.price = function() {
  var toppingPrice = 0;
  for (i = 0; i < 4; i++) {
    if (toppings[i] != "none") {
      toppingPrice = toppingPrice + 2
    }
  }
  return 10 + (parseInt(this.pizzaSize) * 2) + toppingPrice;
}



$(document).ready(function() {
  $("#pizzaOptions").submit(function(event) {
    event.preventDefault();
    toppings.push($("#topping1").val(), $("#topping2").val(),$("#topping3").val(),$("#topping4").val());
    var inputtedPizzaSize = $("#sizeOption").val();
    var inputtedToppings = toppings.toString()
    var newPizza = new Pizza(inputtedPizzaSize, inputtedToppings);
    $("#displayPizza").append("<li>" + newPizza.finishedPizza() + " price=$" + newPizza.price() + "</li>");
    total = +total + newPizza.price();
    $("#totalPrice").text("$" + total + ".00");
    toppings = [];
  });
});
