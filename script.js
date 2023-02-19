const btnForm = document.querySelector('[data-form-btn]')

const createTask = (e) => {
  e.preventDefault()
  const inputForm = document.querySelector('[data-form-input]')
  const inputValue = inputForm.value
  const list = document.querySelector('[data-list]')
  const task = document.createElement('li')
  task.classList.add('card')
  inputForm.value = ''
  const content = `<div>
      <i class="far fa-check-square icon"></i>
      <span class="task">${inputValue}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`

  list.appendChild(task)
  task.innerHTML = content
}

btnForm.addEventListener('click', createTask)
