const cards = document.querySelectorAll(".card")
const botonesFiltro = document.querySelectorAll(".filtro-boton")
console.log(botonesFiltro)

for (let boton of botonesFiltro) {
    boton.onclick = () => {

        for (let card of cards){       
        if (boton.dataset.color === card.dataset.color) {
            card.classList.remove ("hidden")

        }
        else if (boton.dataset.color === "todos") {
            card.classList.remove("hidden")
        }
        else {
            card.classList.add("hidden")
        }
    }
  }
    
}


const checkboxs = document.querySelectorAll(".sexo")
console.log(checkboxs)

for (let checkbox of checkboxs){
    checkbox.oninput = () => {

    for ( let card of cards) {
         
        if (checkbox.dataset.sexo === card.dataset.sexo) {
            card.classList.remove ("hidden")
        }
        else if (checkbox.dataset.sexo === "i") {
            card.classList.remove("hidden")
        }
        else {
            card.classList.add("hidden")
        }


    }

    }
}

const filtroNombre = document.querySelectorAll(".filtro-nombre")
console.log(filtroNombre)

filtroNombre.oniput = () => {
 for (let card of cards) {
    const titulo = card.dataset.name()
    const busquedaMinuscula = filtroNombre.value.TolowerCase()
    
    if (titulo.includes(busquedaMinuscula)) {

       card.classList.remove('hidden');
     } 
     else {

         card.classList.add('hidden');
       }
     }
   };
  