const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");


addBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const text = input.value;

    //Condicional necesario para que no se puedan guardar elementos en blanco. 
    if (text !== ""){
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = text;

        li.appendChild(p);

        //Aqui borra un LI.
        li.appendChild(addDeleteBtn());

        // Aquí añade el LI nuevo.
        ul.appendChild(li);

        // Ponemos en blanco el input para que no se quede lo que escribimos y podemos escribir algo nuevo.
        input.value = "";

        // Ponemos el párrafo "invisible" con display = "none", para que desaparezca cuando hay LIs.
        empty.style.display = "none";
    }

});


function addDeleteBtn() {
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "X";
    deleteBtn.className= "btn-delete";

    deleteBtn.addEventListener("click", (event) => {
        const item = event.target.parentElement;
        ul.removeChild(item);
        
        const items = document.querySelectorAll("li");

        if (items.length === 0) {
            empty.style.display = "block";
        }

    });
    return deleteBtn;
}