$(function() {
    $('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
  });



  function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    }
}

function display_alert()
 {
 alert("Thank you for intercating with our  page and contacting with us!");
 }

// Programi qe llogarit me sa perqind zbritje i keni produktet varesisht nga numri i parave qe keni ne kartel
 var rezultati = document.getElementById("rezultati")

 function kliko(){
   var piket = document.getElementById("piket").value*1

   if(piket>= 0 && piket <=30){
     rezultati.innerHTML = "With this amount of money on your card you can have  a product from reebook with 5% discount"
   }
   else if(piket >30 && piket <60){
     rezultati.innerHTML = "With this amount of money on your card ,you can have a product from Addidas with 20% discount "
   }
   else{
     rezultati.innerHTML ="With this amount of money on your card ,you can have a product from Puma with 65% discount"
   }
 }

 // Tabela e krijuar permes javascript dhe jo HTML 
 
 var emrat = ["Nike" , "Puma" , "Addidas" ,"Rebook"]
 var piket = [40,80,60,33]

 var lista = document.getElementById("lista")

 for(var i = 0; i<emrat.length; i++){
   var rreshti = document.createElement("tr")
   rreshti.setAttribute("id", "numri",+i)
   lista.appendChild(rreshti)

   var emri = document.createElement("td")
   rreshti.appendChild(emri)
   emri.innerHTML = emrat[i]

   var nota = document.createElement("td")
   rreshti.appendChild(nota)
   nota.innerHTML = piket[i]

   if(nota.innerHTML>50){
    nota.style['background-color'] = '#03a9f4';
    emri.style['background-color'] = '#03a9f4';
   }
   else{
    nota.style['background-color'] = 'white';
    emri.style['background-color'] = 'white';
   }

 }