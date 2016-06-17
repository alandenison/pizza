var sizes = ["Small", "Medium", "Large", "Extra Large"];
var toppings = []

function Pizza(pizzaSize, toppings) {
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
}
Pizza.prototype.finishedPizza = function() {
  var toppingsDetector = []
  for(i = 0; i < 4; i++) {
    while (toppings[i] != "none") {
      toppingsDetector.push(toppings[i]);
      };
    };
      return sizes[this.pizzaSize] + " pizza with " + toppingsDetector;
  };




$(document).ready(function() {
  $("#pizzaOptions").submit(function(event) {
    event.preventDefault();
    toppings.push($("#topping1").val(), $("#topping2").val(),$("#topping3").val(),$("#topping4").val());

    var inputtedPizzaSize = $("#sizeOption").val();
    var inputtedToppings = toppings.toString()
    var newPizza = new Pizza(inputtedPizzaSize, inputtedToppings);

    alert(newPizza.finishedPizza());
    toppings = [];
  });
});
