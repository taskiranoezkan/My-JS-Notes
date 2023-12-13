document.addEventListener('DOMContentLoaded', function () {
    const todoAddForm = document.getElementById('todoAddForm');
    const todoName = document.getElementById('todoName');
    const todoList = document.querySelector('.list-group');
    const todoClearButton = document.getElementById('todoClearButton');
  
    todoAddForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Formun otomatik olarak gönderilmesini engeller
  
      const newTodoText = todoName.value.trim();
  
      if (newTodoText !== '') {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between';
        li.textContent = newTodoText;
  
        const deleteLink = document.createElement('a');
        deleteLink.className = 'delete-item';
        deleteLink.innerHTML = '<i class="fa fa-remove"></i>';
        deleteLink.addEventListener('click', function () {
          li.remove();
        });
  
        li.appendChild(deleteLink);
        todoList.appendChild(li);
  
        todoName.value = ''; // Giriş alanını temizler
      }
    });
  
    todoClearButton.addEventListener('click', function () {
      const todoItems = document.querySelectorAll('.list-group-item');
      todoItems.forEach(function (item) {
        item.remove();
      });
    });
  });
  