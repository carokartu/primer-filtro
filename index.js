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
    checkbox.onclick = () => {

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

const filtroNombre = document.querySelector(".filtro-nombre")
console.log(filtroNombre)

filtroNombre.oninput = () => {
 for (let card of cards) {
    const titulo = card.dataset.name;
    const busqueda = filtroNombre.value;

    if (titulo.includes(busqueda)) {

       card.classList.remove('hidden');
     } 
     else {

         card.classList.add('hidden');
       }
     }
   };
  