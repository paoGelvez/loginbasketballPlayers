
 let usuario="Pruebafront@coex.com"
let contraseña="BigMind"

let ingresar=document.getElementById("ingresar")
ingresar.addEventListener('click',iniciosesion)
function iniciosesion(){
   let intentousuario=document.getElementById("validar").value
   let contraseñaintento=document.getElementById("contraseña").value
   if (intentousuario.length<6 || contraseñaintento<6 ){
      alert("los campos deben ser mayor a 6 caracteres")
   }
   if(intentousuario==usuario &&  contraseñaintento==contraseña){
      window.location.href="newpage.html"
   }

    
}

// document

//     .getElementById("validar")
//     .addEventListener("input", function (evt) {
//         const campo = evt.target,
//             valido = document.getElementById("campook"),

//             regex = /^(?=.*\d)(?=.*[a-záéíóúñ]).*[A-ZÁÉÍÓÚÑ]/;
//         //SE MUESTRA UN TEXTO VALIDO/INVALIDO

//         if (regex.test(campo.value)) {
//             valido.innerText = "valido";
//         } else {
//             valido.innerText = "incorrecto";
//         }
//     })

    


   
   
    
    