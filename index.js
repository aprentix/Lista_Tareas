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


var agregarTask = function(){
    var input = tarea.value;
    if(input!=""){
        ///
        var newTask = document.createElement("li");
        newTask.setAttribute("class", "task");
        
        //var btnE = document.createElement("input");
        //btnE.setAttribute("type", "checkbox");
        //btnE.setAttribute("class", "done");
        
        var texto = document.createElement("div");
        texto.innerHTML=input;
        texto.setAttribute("class", "task_description");
        ///
        /// PARA CREAR EL BOTÓN DE BORRAR
        var btnB = document.createElement("button");
        btnB.setAttribute("class", "quitar");
        var span = document.createElement("span");
        span.innerHTML="X";
        btnB.appendChild(span);
        ///
        //newTask.appendChild(btnE);
        newTask.appendChild(texto);
        newTask.appendChild(btnB);
        btnB.addEventListener("click", eliminarTask);
        list.appendChild(newTask);
    }
}

var eliminarTask = function(){
    this.parentNode.parentNode.removeChild(this.parentNode);
}

var eraseAll = function(){
    ///alert(list.firstChild);
    while(list.firstChild){
        list.removeChild(list.firstChild);
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