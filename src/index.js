import {Todos, Projects} from "./modules/todos";
import {openTodos, showForms, createProject, createTodo, defaultProject, addAttributes, editAttributes, openEveryProject, closeEveryProject} from "./modules/DOM";

let todoID = 0
let selection
let projectsArray = []
let todosArray = []
let showTodos = [...document.getElementsByClassName('show')];
let closeTodos = [...document.getElementsByClassName('close')]
let todosContainer = [...document.getElementsByClassName('todosContainer')];

document.getElementById('createProject').onclick = () =>{
    let title = document.getElementById('projectTitle').value
    createProject(title)
    document.getElementById('newProjectForm').style.display = 'none'    
    document.getElementById('container').style.opacity = '1'
}

document.getElementById('createTodo').onclick = () =>{
    let title = document.getElementById('todoTitle').value
    let projectParent = document.getElementById('projectParent').value
    createTodo(title, projectParent)
    
    document.getElementById('newTodoForm').style.display = 'none'
    document.getElementById('container').style.opacity = '1'
}

document.getElementById('addAttribute').onclick = () =>{
    let description = document.getElementById('descriptionAttribute').value
    let priority = document.getElementById('priorityAttribute').value
    let dueDate = document.getElementById('dueDateAttribute').value
    // console.log(this)
    // selection = this.parentNode
    addAttributes(description, priority, dueDate)    
    document.getElementById('addAttributeForm').style.display = 'none'
    document.getElementById('container').style.opacity = '1'
}

document.getElementById('enterEdit').onclick = () =>{
    let description = document.getElementById('editDescription').value
    let priority = document.getElementById('editPriority').value
    let dueDate = document.getElementById('editDueDate').value    
    editAttributes(description, priority, dueDate)    
    document.getElementById('editForm').style.display = 'none'
    document.getElementById('container').style.opacity = '1'
}

document.getElementById('openProjects').onclick = () =>{
    openEveryProject()
}
document.getElementById('closeProjects').onclick = () =>{
    closeEveryProject()
}

    

showForms()
openTodos();
createTodo()
createProject('Default')


export {projectsArray, todosArray, showTodos, closeTodos, todosContainer, todoID, selection}
