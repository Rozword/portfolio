import { Todos, Projects } from "./todos";
import{todosArray, projectsArray, showTodos, closeTodos, todosContainer, todoID, selection} from "../index"


let openTodos = () =>{
    showTodos.forEach(function(show){
        let index = showTodos.indexOf(show)
        show.addEventListener('click', function(){
            console.log(todosContainer[index])
            todosContainer[index].style.display = 'block'
            closeTodos[index].style.display = 'block'
            show.style.display = 'none'
        })
    })    
    
    closeTodos.forEach(function(close){
        let index = closeTodos.indexOf(close)
        close.addEventListener('click', function(){
            console.log(todosContainer[index])
            todosContainer[index].style.display = 'none'
            showTodos[index].style.display = 'block'
            close.style.display = 'none'
            
        })
    })    
}

let openEveryProject = () =>{
    todosContainer.forEach((container) =>{
        container.style.display = 'block'        
    })
    showTodos.forEach((show)=>{
        show.style.display = 'none'
    })
    closeTodos.forEach((close)=>{
        close.style.display = 'block'
    })
    document.getElementById('openProjects').style.display = 'none'
    document.getElementById('closeProjects').style.display = 'block'
}

let closeEveryProject = () =>{
    todosContainer.forEach((container) =>{
        container.style.display = 'none'        
    })
    showTodos.forEach((show)=>{
        show.style.display = 'block'
    })
    closeTodos.forEach((close)=>{
        close.style.display = 'none'
    })
    document.getElementById('openProjects').style.display = 'block'
    document.getElementById('closeProjects').style.display = 'none'

}

let showForms = () =>{
    let closeButtonsArray = [...document.getElementsByClassName('closeButton')]
    //let formsArray = [...document.getElementsByClassName('form')]
    closeButtonsArray.forEach(function(close){
        close.onclick = () =>{
            document.getElementById('newTodoForm').style.display = 'none'
            document.getElementById('newProjectForm').style.display = 'none'  
            document.getElementById('addAttributeForm').style.display = 'none'  
            document.getElementById('editForm').style.display = 'none'  
            document.getElementById('container').style.opacity = '1'
        }
    })

    document.getElementById('newProject').onclick = () =>{
        document.getElementById('newTodoForm').style.display = 'none'
        document.getElementById('newProjectForm').style.display = 'flex'
        document.getElementById('container').style.opacity = '0.4'        
        }    

    document.getElementById('newTodo').onclick = () =>{
        document.getElementById('newProjectForm').style.display = 'none'
        document.getElementById('newTodoForm').style.display = 'flex'
        document.getElementById('container').style.opacity = '0.4'  
        }    
    
}

//let defaultProject = () =>{    
  //  createProject(project.title)
   /* let container = document.getElementById('container')
    let projectDiv = document.createElement('div')
    let projectTitle = document.createElement('h2')
    let todosCount = document.createElement('h4')
    todosCount.setAttribute('id', `${project.title}TodosCount`)  
    let show = document.createElement('img')
    let close = document.createElement('img')
    let projectInfo = document.createElement('div')
    show.src = "icons/angle-small-right.svg"
    close.src = "icons/angle-small-down.svg"
    projectTitle.textContent = project.title
    todosCount.textContent = `${project.todosNumber} Todos in this project`
    container.appendChild(projectDiv)
    projectDiv.setAttribute('id', `${projectTitle.textContent}`)
    projectDiv.appendChild(projectInfo)    
    projectInfo.appendChild(projectTitle)
    projectInfo.appendChild(todosCount)
    projectInfo.appendChild(show)
    projectInfo.appendChild(close)    
    show.classList.add('show')
    showTodos.push(show)
    close.classList.add('close')
    closeTodos.push(close)
    projectInfo.classList.add('projectTitleDiv')
    let todos = document.createElement('div')
    todos.classList.add('todosContainer')
    let hi = document.createElement('h3')
    hi.textContent = 'hi'
    todos.appendChild(hi)  
    todosContainer.push(todos)
    projectDiv.appendChild(todos)
    openTodos()*/


let createProject = (title) =>{        
        if(title !== ''){
            let project = new Projects(title, 0)
            project.addProject() 
            let container = document.getElementById('container')
            let projectDiv = document.createElement('div')
            let projectTitle = document.createElement('h2')
            let todosCount = document.createElement('h4')
            todosCount.setAttribute('id', `${project.title}TodosCount`)  
            let show = document.createElement('img')
            let close = document.createElement('img')
            let projectInfo = document.createElement('div')
            show.src = "icons/angle-small-right.svg"
            close.src = "icons/angle-small-down.svg"
            projectTitle.textContent = project.title

            todosCount.textContent = `${project.todosNumber} Todos in this project`
            container.appendChild(projectDiv)
            projectDiv.setAttribute('id', `${projectTitle.textContent}`)
            projectDiv.appendChild(projectInfo)

            
            projectInfo.appendChild(projectTitle)
            projectInfo.appendChild(todosCount)
            projectInfo.appendChild(show)
            projectInfo.appendChild(close)

            
            show.classList.add('show')
            showTodos.push(show)
            close.classList.add('close')
            closeTodos.push(close)

            projectInfo.classList.add('projectTitleDiv')


            let todos = document.createElement('div')
            todos.classList.add('todosContainer')            

            todosContainer.push(todos)
            projectDiv.appendChild(todos)
            openTodos()            
        }
    }


let createTodo = (title, projectParent) =>{   
        if((title != '') && (projectParent != '')){
            console.log(todoID)            
            let todo = new Todos(title, projectParent, todoID)
            let todoDiv = document.createElement('div')
            todoDiv.classList.add('todoDiv')
            todoDiv.setAttribute('id', `${todo.id}`)
            let todoTitle = document.createElement('h3')
            let infoDiv = document.createElement('div')
            let titleDiv = document.createElement('div')
            titleDiv.classList.add('titleDiv')
            let buttonsDiv = document.createElement('div')
            buttonsDiv.classList.add('buttonsDiv')
            infoDiv.classList.add('infoDiv')
            todoTitle.textContent = todo.title

            todoDiv.appendChild(infoDiv)
            infoDiv.appendChild(titleDiv)
            infoDiv.appendChild(buttonsDiv)
            titleDiv.appendChild(todoTitle)

            todo.addTodo()

            projectsArray.forEach(function(project){
                if(projectParent === project.title){                                   
                    let lastChild = document.getElementById(`${project.title}`).lastChild;
                    lastChild.appendChild(todoDiv);
                    project.todosNumber += 1
                    project.todoCount()
                    
                };

            });
            let addButton = document.createElement('button')
            addButton.classList.add('add')
            addButton.setAttribute('id', `addButton${todo.id}`)
            addButton.textContent = 'Add'
            buttonsDiv.appendChild(addButton)            
            todo.add = addButton
            todo.addAttribute()

            let editButton = document.createElement('button')
            editButton.classList.add('edit')
            editButton.setAttribute('id', `editButton${todo.id}`)
            editButton.textContent = 'Edit'
            buttonsDiv.appendChild(editButton) 
            todo.edit = editButton
            todo.openEditForm()

            let checkBox = document.createElement('input')
            checkBox.classList.add('checkBox')
            checkBox.type = 'checkbox'
            todo.check = checkBox
            todo.completeTodo()
            buttonsDiv.appendChild(checkBox)


            let show = document.createElement('img')
            let close = document.createElement('img')            
            show.src = "icons/angle-small-right.svg"
            show.classList.add('show')
            show.setAttribute('id', `showIcon${todo.id}`)            
            close.src = "icons/angle-small-down.svg"
            close.classList.add('close')
            close.setAttribute('id', `closeIcon${todo.id}`)  

            todo.show = show                     
            todo.hide = close
            titleDiv.appendChild(show)
            titleDiv.appendChild(close)
            todo.showAttributes()
            todo.hideAttributes()

            let remove = document.createElement('img')
            remove.src = "icons/delete-trash.svg"
            remove.classList.add('trash')
            remove.setAttribute('id', `removeIcon${todo.id}`)
            todo.remove = remove   
            buttonsDiv.appendChild(remove)
            todo.removeTodo() 
            todoID++
            console.log(todo)


        };        
    };

let openAttributeForm = (element) => {    
    document.getElementById('addAttributeForm').style.display = 'flex'
    document.getElementById('container').style.opacity = '0.4' 
    selection = element
}

let editForm = (element) => {    
    document.getElementById('editForm').style.display = 'flex'
    document.getElementById('container').style.opacity = '0.4' 
    selection = element
}

let eraseTodo = (element, parent) =>{
    let todo = document.getElementById(`${element}`)
    todo.remove()

    projectsArray.forEach(function(project){
        if(parent === project.title){                                            
            project.todosNumber -= 1
            project.todoCount()
            
        };

    });
};

let completeTodo = (element) =>{
    let todo = document.getElementById(`${element}`)
    todo.style.backgroundColor = 'lightgreen'
    todo.childNodes[0].childNodes[1].lastChild.style.display = 'none'
}

let reactivateTodo = (element) =>{
    let todo = document.getElementById(`${element}`)
    todo.style.backgroundColor = 'lightgray'
    todo.childNodes[0].childNodes[1].lastChild.style.display = 'block'
}
    

let addAttributes = (description, priority, dueDate) =>{
    if((description != '') && (priority != '') && (dueDate != '')){        
        let todo = todosArray.find(element => element.id === selection)
        console.log(todo)
        todo.description = description
        todo.priority = priority
        todo.dueDate = dueDate        
        let parent = document.getElementById(`${selection}`)
        let attributesDiv = document.createElement('div')
        attributesDiv.classList.add('attributesDiv')
        let descriptionDiv = document.createElement('div')  
        descriptionDiv.classList.add('descriptionDiv')
        let discriptionHeading = document.createElement('h4') 
        discriptionHeading.classList.add('descriptionHeading')
        discriptionHeading.textContent = 'Description:'
        let descriptionInfo = document.createElement('p')  
        descriptionInfo.classList.add('descriptionInfo')
        descriptionInfo.setAttribute('id',`descriptionInfo${todo.id}`)
        descriptionInfo.textContent = todo.description

        let priorityDiv = document.createElement('div')
        priorityDiv.classList.add('priorityDiv')
        let priorityHeading = document.createElement('h4')
        priorityHeading.classList.add('priorityHeading')
        priorityHeading.textContent = 'Priority:'
        let priorityInfo = document.createElement('p')
        priorityInfo.classList.add('priorityInfo')
        priorityInfo.setAttribute('id',`priorityInfo${todo.id}`)
        priorityInfo.textContent = todo.priority

        let dueDateDiv = document.createElement('div')
        dueDateDiv.classList.add('dueDateDiv')
        let dueDateHeading = document.createElement('h4')
        dueDateHeading.classList.add('dueDateHeading')
        dueDateHeading.textContent = 'Due Date:'
        let dueDateInfo = document.createElement('p')
        dueDateInfo.classList.add('dueDateInfo')
        dueDateInfo.setAttribute('id',`dueDateInfo${todo.id}`)
        dueDateInfo.textContent = todo.dueDate


        descriptionDiv.appendChild(discriptionHeading)
        descriptionDiv.appendChild(descriptionInfo)
        priorityDiv.appendChild(priorityHeading)
        priorityDiv.appendChild(priorityInfo)    
        dueDateDiv.appendChild(dueDateHeading)
        dueDateDiv.appendChild(dueDateInfo)

        attributesDiv.appendChild(descriptionDiv)        
        attributesDiv.appendChild(priorityDiv)
        attributesDiv.appendChild(dueDateDiv)
        parent.appendChild(attributesDiv)
        
        document.getElementById(`addButton${todo.id}`).remove()
        document.getElementById(`editButton${todo.id}`).style.display = 'block'
    }


}

let editAttributes = (description, priority, dueDate) =>{
    let todo = todosArray.find(element => element.id === selection)
    console.log(todo)
    todo.description = description
    todo.priority = priority
    todo.dueDate = dueDate      
    document.getElementById(`descriptionInfo${todo.id}`).textContent = todo.description
    document.getElementById(`priorityInfo${todo.id}`).textContent = todo.priority
    document.getElementById(`dueDateInfo${todo.id}`).textContent = todo.dueDate
}

let showTodoAttributes = (element) =>{
    let todo = document.getElementById(`${element}`)
    console.log(todo)
    console.log(todo.childNodes[1])
    todo.childNodes[1].style.display = 'flex' 
    document.getElementById(`showIcon${element}`).style.display = 'none'
    document.getElementById(`closeIcon${element}`).style.display = 'block'

}

let hideTodoAttributes = (element) =>{
    let todo = document.getElementById(`${element}`)
    todo.childNodes[1].style.display = 'none'   
    document.getElementById(`showIcon${element}`).style.display = 'block'
    document.getElementById(`closeIcon${element}`).style.display = 'none'
}



export{openTodos, showForms, createProject, createTodo, openAttributeForm, addAttributes, showTodoAttributes, hideTodoAttributes, eraseTodo,completeTodo, reactivateTodo, editForm, editAttributes, openEveryProject, closeEveryProject}