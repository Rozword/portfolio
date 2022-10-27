import{projectsArray, todosArray, showTodos, closeTodos, todosContainer, selection} from "../index"
import{openAttributeForm, hideTodoAttributes, showTodoAttributes, eraseTodo,completeTodo, reactivateTodo, editForm} from "./DOM"

class Todos {
  constructor(title, projectParent, id, description, dueDate, priority, notes, add, edit, show, hide, remove, check) {
    this.title = title;
    this.projectParent = projectParent
    this.id = id;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;    
    this.add = add;
    this.edit = edit
    this.show = show;
    this.hide = hide;
    this.remove = remove
    this.check = check;
  }

  addTodo(){
    todosArray.push(this)
  }

  addAttribute(){
    this.add.onclick = () =>{
      openAttributeForm(this.id)      
    }
  }

  openEditForm(){
    console.log(this.edit)
    this.edit.onclick = () =>{
      editForm(this.id)
    }
  }

  showAttributes(){
    this.show.onclick = () =>{
      showTodoAttributes(this.id)
    }
  }

  hideAttributes(){
    this.hide.onclick = () =>{
      hideTodoAttributes(this.id)
    }

  }

  removeTodo(){
    this.remove.onclick = () =>{
      eraseTodo(this.id, this.projectParent)
    }
  }

  completeTodo(){
    this.check.onchange = () =>{
      if(this.check.checked){
        completeTodo(this.id)
      }
      else{
        reactivateTodo(this.id)
      }
     }  
    }



  }

  


class Projects {
  constructor(title, todosNumber){
    this.title = title;
    this.todosNumber = todosNumber
  }

  addProject(){
    projectsArray.push(this)   
  }

  todoCount(){
    console.log(this)
    document.getElementById(`${this.title}TodosCount`).textContent = `${this.todosNumber} Todos in this project`    
  }
  

}

export { Todos, Projects };
