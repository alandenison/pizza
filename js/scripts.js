function Pizza(pizzaSize, toppings) {
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
}

var sizes = ["Small", "Medium", "Large", "Extra Large"];
var toppings = []

$(document).ready(function() {
  $("#pizzaOptions").submit(function(event) {
    event.preventDefault();
    var toppings = []
    var inputtedPizzaSize = $("#sizeOption").val();
    var toppingsDetector = toppings.push($("#topping1").val(), $("#topping2").val(),$("#topping3").val(),$("#topping4").val());
    console.log(toppings);
  });
});
