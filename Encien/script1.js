const taskInput = document.getElementById("taskInput") ;

const addTaskBtn = document.getElementById("addTask") ;

const taskList = document.getElementById("taskList") ;

var task = "Task"; 
var i =0;

// La fonction trim() en JavaScript est utilisée pour supprimer les espaces (espaces, tabulations et

//nouvelles lignes) au début et à la fin d'une chaîne.

 

addTaskBtn.addEventListener("click", addTask);

function addTask() {

   const taskText = taskInput.value.trim();

   if (taskText !==""){
      const listItem = document.createElement("li");
      listItem.textContent = taskText;
      taskList.appendChild(listItem);
      taskInput.value = "";

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Supprimer";
      listItem.appendChild(deleteBtn);
      deleteBtn.addEventListener("click", () => {
      listItem.remove();
      });

      const buttonModif = document.crerateElement("button");
      buttonModif.textContent = "Modifier";
      listItem.appendChild(buttonModif);
      buttonModif.addEventListener("click", () => {
         const newTaskText = prompt("Modifier la tâches...", taskText.nodeValue);
         if(newTaskText !== null && newTaskText.trim() !== ""){
            taskText.nodeValue = newTaskText.trim();
         }
      });

   }else{
      alert("Veuillez entrer une tâche valide.");
   }

   localStorage.setItem(task.concat(i), taskText);
   i++;

}