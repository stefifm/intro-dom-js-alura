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

    const content = `
    <i class="fas fa-trash-alt trashIcon icon"></i>`

    task.appendChild(taskContent)
    list.appendChild(task)
    // task.innerHTML = content
  }

  btnForm.addEventListener('click', createTask)

  const checkComplete = () => {
    const i = document.createElement('i')
    i.classList.add('far', 'fa-check-square', 'icon')
    i.addEventListener('click', completeTask)
    return i
  }

  const completeTask = (e) => {
    const element = e.target
    element.classList.toggle('fas')
    element.classList.toggle('completeIcon')
    element.classList.remove('far')
  }
})()
