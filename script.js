function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  const taskList = document.getElementById('taskList');
  
  const li = document.createElement('li');
  li.textContent = taskText;

  li.addEventListener('click', function() {
    li.classList.toggle('completed');
  });

  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.className = 'delete-btn';
  delBtn.addEventListener('click', function(e) {
    e.stopPropagation(); // prevent triggering the complete toggle
    taskList.removeChild(li);
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);

  taskInput.value = '';
}
