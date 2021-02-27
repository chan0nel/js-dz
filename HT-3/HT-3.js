window.addEventListener('DOMContentLoaded', function () {

  //добавление из html элементов
  let input = document.querySelector("#text");
  let date = document.querySelector("#date");
  let butAdd = document.querySelector("#add");
  let butSave = document.querySelector("#save");
  let butDel = document.querySelector("#delete");
  let inputTime = document.querySelector('#timerDate');
  let time = document.querySelector('#timertext');
  let list = document.querySelector("ul");
  let ban = document.getElementsByClassName("fa fa-ban");

  list.innerHTML = localStorage.getItem('todo-list'); //загрузка списка при обновлении страницы

  butAdd.addEventListener('click', function () { //Добавление функций
    let todoTask = input.value;
    let todoDate = date.value;
    if (todoTask.trim() == '' || todoDate.trim() == '') {
      return alert('Заполните поля!');
    }
    if (localStorage.getItem(todoTask) != null) {
      input.value = '';
      date.value = '';
      return alert('Такая задача уже существует!(Очистите список или удалите элемент)')
    }

    localStorage.setItem(input.value, date.value)
    input.value = '';
    date.value = '';

    let newSpan = document.createElement("span");
    newSpan.className = "todoName"

    let li = document.createElement('li');
    li.className = "list-group-item";

    let i = document.createElement('i');
    i.className = 'fa fa-ban';
    i.setAttribute("title", "Удалить");

    //преобразование даты из гггг-мм--дд в дд.мм.гггг
    let arrDate = todoDate.split('-');
    let todoDatePoint = arrDate[2] + '.' + arrDate[1] + '.' + arrDate[0];

    //таймер, который берет время из ключа, название которого вводится в input
    setInterval(function () {
      let now = new Date().getTime();
      let date = localStorage.getItem(inputTime.value);
      if ((inputTime.value == '') || (date == null)) {
        time.innerHTML = "Введите  название задачи, чтобы увидеть время до ее завершения"
      }
      else {
        let TaskDate = new Date(date).getTime();
        let distance = TaskDate - now;
        let hours = Math.ceil(distance / (1000 * 60 * 60));
        time.innerHTML = hours + " часов осталось до выполнения"
        if (distance <= 0) {
          time.innerHTML = "Выполнено!";
        }
      }
    }, 1000)

    newSpan.append(todoTask);
    list.appendChild(li).append(i, ' ', newSpan, ' ', todoDatePoint);
    deleteTodo();
  });

  function deleteTodo() { //функция, для удаления из списка
    for (let i of ban) {
      i.onclick = function () {
        localStorage.removeItem(i.parentNode.children[2].innerHTML);
        i.parentNode.remove();
        localStorage.setItem('todo-list', list.innerHTML);
      }
    }
  }
  butSave.addEventListener('click', function () { //функция, для сохранения списка
    localStorage.setItem('todo-list', list.innerHTML)
  });
  butDel.onclick = function () { // функция, для удаления списка
    let a = confirm("Вы уверены?");
    if (a == true) {
      list.innerHTML = '';
      localStorage.clear();
    }
  }
});
