$('button.rea_all').on('click', function(){
      while (document.querySelector(".todo__item[data-todo-state='active']")) {
        document.querySelector(".todo__item[data-todo-state='active']").setAttribute("data-todo-state", "completed");
        localStorage.setItem('todo', document.querySelector('.todo__items').innerHTML);
      }
});