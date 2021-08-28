const addForm = document.querySelector('.add')
const list = document.querySelector('.todos')
const search = document.querySelector('.search input')

const generateTodos = (todo) => {

  const html = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="fas fa-trash delete"></i>
  </li>
  `
  list.innerHTML += html 
}

addForm.addEventListener('submit', e => {

  e.preventDefault()

  const todo = addForm.add.value.trim()
  

  if(todo.length){
    generateTodos(todo)
    addForm.reset()
    localStorage.setItem(todo, todo)
  }

})

console.log(localStorage.length)
//update localstoge
  if(localStorage.length){
    for(var i=0; i< localStorage.length; i++ ){
      generateTodos(localStorage.key(i))
        // console.log(localStorage.key(i))
        // console.log(i)
      
    }
  }



//delete todos
list.addEventListener('click', (e)=> {
  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove()
    let li = e.target.parentElement
    localStorage.removeItem((Array.from(li.children)[0].innerText))
  }
})


const filterTodos = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.includes(term) && !todo.textContent.toLocaleLowerCase().includes(term) && !todo.textContent.toLocaleUpperCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'))

  Array.from(list.children)
    .filter((todo) => todo.textContent.includes(term))
    .forEach((todo) => todo.classList.remove('filtered'))  
}

//keyup event
search.addEventListener('keyup', ()=> {
  const term = search.value.trim()
  filterTodos(term)
})





