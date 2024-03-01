////////////////// Obtenez le modal d'inscription ///////////////////////
function log(event){
  event.preventDefault();
  const user2 = document.getElementById("3").value;
  const pw2 = document.getElementById("4").value;

  const userL = localStorage.getItem("user");
  const pwL = localStorage.getItem("pw");

  if(user2 === userL && pw2 === pwL){
   document.location='accueil.html';
  }else {alert ("Veiller écricre les bon infos")}

}

function regis (event){
  event.preventDefault();

  const user = document.getElementById("1").value;
  const pw = document.getElementById("2").value;

  localStorage.setItem("user", user);
  localStorage.setItem("pw", pw);

  document.location='accueil.html' ;
}



// ////////////////// Obtenez le modal d'inscription ///////////////////////
// var modal = document.getElementById('id01');

// // Lorsque l'utilisateur clique n'importe où en dehors du modal, fermez-le
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }


// ///////////////// Obtenez le modal de connexion //////////////////////////
// var modal2 = document.getElementById('id02');

// // Lorsque l'utilisateur clique n'importe où en dehors du modal, fermez-le
// window.onclick = function(event) {
//     if (event.target == modal2) {
//         modal.style.display = "none";
//     }
// }