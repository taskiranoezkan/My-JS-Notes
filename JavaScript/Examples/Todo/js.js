// NOT:: BURADA TODO ARAMASI YAPILMASI VERİTABANI BAĞLANTISI MÜMKÜNKEN YAPILABİLRİ AMA BU TARZ BASİT ÖRNEKLERDE LOCALSTORAGE KULLANILABİLİR BEN KULLANMADIM


document.addEventListener('DOMContentLoaded', function () {
  const todoName = document.querySelector('#todoName');
  const todoAddForm = document.querySelector('#todoAddForm');
  const todoSearch = document.querySelector('#todoSearch');
  const list_group = document.querySelector(".list-group");
  const list_group_items = document.querySelectorAll('.list-group-item');
  const todoClearButton = document.querySelector('#todoClearButton');

  runEvents();

  function runEvents() {
    todoAddForm.addEventListener('submit', add);
    list_group.addEventListener('click', deleteItem);
    todoClearButton.addEventListener('click', clearAllTodos);
  }

  let sayac = 0;

  function add(e) {
    e.preventDefault();

    if (todoName.value.trim() !== '') {
      if (sayac < 4) {
        // Eğer sayac 4'ten küçükse, mevcut list_group_items üzerinde değişiklik yap
        let newListItem = document.createElement('li');
        newListItem.className = 'list-group-item d-flex justify-content-between';
        newListItem.innerHTML = todoName.value + '<a href="#" class="delete-item"><i class="fa fa-remove"></i></a>';
        list_group_items[sayac].parentNode.replaceChild(newListItem, list_group_items[sayac]);
      } else {
        // Eğer sayac 4 veya daha büyükse, yeni bir eleman oluştur ve listeye ekle
        let newListItem = document.createElement('li');
        newListItem.className = 'list-group-item d-flex justify-content-between';
        newListItem.innerHTML = todoName.value + '<a href="#" class="delete-item"><i class="fa fa-remove"></i></a>';
        list_group.appendChild(newListItem);
      }
      // sayac'ı artır
      sayac++;
      // Input'u temizle
      todoName.value = '';
    } else {
      alert('Todo boş olamaz!');
    }
  }

  function deleteItem(e) {
    if (e.target.classList.contains('fa-remove')) {
      const listItem = e.target.closest('.list-group-item');
      listItem.remove();
    }
  }

  function clearAllTodos() {
    while (list_group.firstChild) {
      list_group.removeChild(list_group.firstChild);
    }
  }
});
