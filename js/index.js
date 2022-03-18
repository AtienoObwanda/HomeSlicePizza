// Animations init
new WOW().init();

//FORM ACTION
$(document).ready(function(){
    $("form").submit(function(event){
      event.preventDefault();
      var name = $("input#nam").val();
      alert("Hello " + name + ", we have received your message! Thanks for contacting us. We'll get back to  you soon");
      //refresh page
      $('#contactform').trigger("reset");
    });
  });