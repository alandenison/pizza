function Pizza(pizzaSize, toppings) {
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
}

var sizes = ["Small", "Medium", "Large", "Extra Large"];

$(document).ready(function() {
  event.preventDefault();
  $("#pizzaOptions").submit(function(event) {
    var inputtedPizzaSize = $("#sizeOption").val();
    alert(inputtedPizzaSize);
  });
});
