//ON SCROLL NAV BAR
$(document).ready(function(){
	$(window).on("scroll",function(){
  	var wn = $(window).scrollTop();
    if(wn > 120){
    	$(".navbar").css("background","rgba(255,0,0,1)");
    }
    else{
    	$(".navbar").css("background","rgba(1,1,1,1)");
    }
  });
});
//FORM ACTION
$(document).ready(function(){
    //$(btnContact).click(function(e){
        //e.preventDefault();
    $("form3").submit(function(e){
      e.preventDefault();
      var name =$("#nam").val();
      //var name = $("input#nam").val();
      alert("Hello " + name + ", we have received your message! Thank you for reaching out to us.");
      //refresh page
      $('#contactform').trigger("reset");
    });
  });

function Pizza(pizza, size, crust, toppings) {
  this.pizza = pizza;
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
}

var priceSize, priceCrust, priceTopping;

//pizza price
var price = function(pizzaSize, crust, pizzaTopping) {
  switch (pizzaSize) {
      case "":
          priceSize = 0;
          break;
      case "large":
          priceSize = 1000;
          break;
      case "medium":
          priceSize = 800;
          break;
      case "small":
          priceSize = 550;
          break;
      default:
        
  };

  switch (crust) {
      case "":
          priceCrust = 0;
          break;
      case "crispy":
          priceCrust = 100;
          break;
      case "stuffed":
          priceCrust = 200;
          break;
      case "gluten":
          priceCrust = 150;
          break;
      default:
         
  };

  if (pizzaSize == 'large') {
      priceTopping = pizzaTopping.length * 150;
  } else if (pizzaSize == 'medium') {
      priceTopping = pizzaTopping.length * 100;
  } else if (pizzaSize == 'small') {
      priceTopping = pizzaTopping.length * 50;
  }

  var pizzaTotal = priceSize + priceCrust + priceTopping;
  return pizzaTotal;
}

$(document).ready(function(){
    $(".btnContinue").click(function(e){
      e.preventDefault();
      $(".placeOrder").hide();
      $(".confirmOrder").show();
    })
     //Continue button
     $("#continue").click(function(event) {
      event.preventDefault();
      $(".confirmOrder").show();
      $(".placeOrder").hide();
      //get form values
      let pizzaName = $("#pizza option:selected").val();
      let pizzaSize = $("#size option:selected").val();
      let crust = $("#crust option:selected").val();
      var pizzaTopping = [];
      $("input:checkbox[name=toppings]:checked").each(function() {
          pizzaTopping.push($(this).val());
      });

      var total = price(pizzaSize, crust, pizzaTopping);
      var grandTotal = total + 100;
      var order = new Pizza(pizzaName, pizzaSize, crust, pizzaTopping)
      $(".current-order").append('<tr><td id="name">' + order.pizza + '</td><td id="size">' + order.size + '</td><td id="crust">' + order.crust + '</td><td id="toppings">' + order.toppings + '</td><td id="total">' + total);

      //Pickup button
      $("#takeOut").click(function() {
          alert("Hello " + personName + ", your take out will be ready for pickup in 15 minutes. Total amount expected: " + total);

          //refresh page
          location.reload();
      })

      //Checkout button
      $("#checkout").click(function() {
          //form data
          var personName = $("#pName").val();
          var clientNumber = $("#phone-number").val();
          var clientLocation = $("#location").val();

          if (personName === "" || clientNumber === "" || clientLocation === "") {
              alert("KIndly fill in the delivery form. All fields are required!")
          } else {
              alert("Hello " + personName + " your order has been successfully queued,and will be delivered at: " + clientLocation + " in 30 minutes! The total for is: " +
                  grandTotal);
          }
      })
  })


  //Add another pizza
  $("#add").click(function(event) {
      event.preventDefault();

      //Add an extra order
      $(".confirmOrder").hide();
      $(".getDelivery").hide();
      $(".placeOrder").show();
      document.getElementById("form1").reset();
  })

  //Delivery button
  $("#delivery").click(function() {
      $(".table-buttons").hide();
      $(".getDelivery").slideDown();
  })

});