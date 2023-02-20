import checkComplete from './components/checkComplete.js'
import deleteIcon from './components/deleteIcon.js'
;(() => {
  const btnForm = document.querySelector('[data-form-btn]')

  const createTask = (e) => {
    e.preventDefault()
    const inputForm = document.querySelector('[data-form-input]')
    const inputValue = inputForm.value
    inputForm.value = ''

    const list = document.querySelector('[data-list]')
    const task = document.createElement('li')
    task.classList.add('card')

    const taskContent = document.createElement('div')

    const titleTask = document.createElement('span')
    titleTask.classList.add('task')
    titleTask.innerText = inputValue

    taskContent.appendChild(checkComplete())
    taskContent.appendChild(titleTask)

    task.appendChild(taskContent)
    task.appendChild(deleteIcon())
    list.appendChild(task)
    // task.innerHTML = content
  }

  btnForm.addEventListener('click', createTask)
})()
