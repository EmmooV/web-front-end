
document.addEventListener("DOMContentLoaded", function() {

   
    var colorBtn = document.getElementById("color");
    var placeBtn = document.getElementById("place");
    var ritualBtn = document.getElementById("ritual");
  
    colorBtn.addEventListener("click", function() {
      alert("My favorite color is pink.");
    });
  
    placeBtn.addEventListener("click", function() {
      alert("My favorite place is the beach.");
    });
  
    ritualBtn.addEventListener("click", function() {
      alert("My favorite ritual is meditation.");
    });
  
  });
