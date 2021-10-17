/// ELEMENTOS
var list = document.getElementById('list'),
    tarea = document.getElementById('tarea'),
    add_button = document.getElementById('add_button'),
    done = document.getElementsByClassName('done'),
    borrar = document.getElementsByClassName('borrar'),
    btnAll = document.getElementById("delete_all"),
    btnSelected = document.getElementById("del_sel");

/// FUNCIONES

function cambio(){
    var ele = document.body;
    ele.classList.toggle("dark");
}

function controlaLong(){
    var inpb = tarea.value;
    if(inpb.length>=25){
        tarea.setAttribute("class", "tareaCuidado");
    }
    else{
        tarea.setAttribute("class", "tareaC");
    }
}


const API_ANIME = "https://ghibliapi.herokuapp.com/films"

fetch(`${API_ANIME}`)
    .then((response) => response.json())
    .then((films)=>{
        films.forEach((film)=>{
            var newTask = document.createElement('li');
            newTask.setAttribute('class', 'task');
            var texto = document.createElement('div');
            texto.innerHTML = `Película: ${film.title} ***** Titulo Japonés: ${film.original_title}`;
            texto.setAttribute("class", "task_description");
            newTask.appendChild(texto);
            newTask.addEventListener("click", eliminarTask);
            list.appendChild(newTask);
        });
    });

var agregarTask = function(){
    var input = tarea.value;
    if(input!=""){
        var newTask = document.createElement("li");
        newTask.setAttribute("class", "task");
        var texto = document.createElement("div");
        texto.innerHTML=input;
        texto.setAttribute("class", "task_description");
        newTask.appendChild(texto);
        newTask.addEventListener("click", eliminarTask);
        list.appendChild(newTask);
    }
    tarea.setAttribute("class", "tareaC");
    tarea.value="";
}

var eliminarTask = function(){
    this.parentNode.removeChild(this);
}

var eraseAll = function(){
    if(confirm("Do you want to erase all? :)")){
        while(list.firstChild){
            list.removeChild(list.firstChild);
        }
    }
}

var borrarSeleccionados = function(){
    var chid = list.children;
    for(var i=0; i<chid.length; i++){
        if(done[i].checked==true){
            chid[i].parentNode.removeChild(chid[i]);
        }
    }
}


/// EVENTOS

add_button.addEventListener("click", agregarTask);
btnAll.addEventListener("click", eraseAll);

/// btnSelected.addEventListener("click", borrarSeleccionados);