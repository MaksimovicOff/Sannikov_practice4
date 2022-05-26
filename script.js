const todo = {
  
    action(e) {
      const target = e.target;
      if (target.classList.contains('todo__action')) {
        const action = target.dataset.todoAction;
        const elemItem = target.closest('.todo__item');
        if (action === 'deleted' && elemItem.dataset.todoState === 'deleted') {
          elemItem.remove();
        } else {
          elemItem.dataset.todoState = action; 
          $("button.rea_all").on('click', function(){
    
            for (let i = 0; i < 1; i++) {
              document.querySelector('.todo__item').setAttribute('data-todo-state', 'completed');
              save();
            }
            
          })
        }
        this.save();
      } else if (target.classList.contains('add')) {
        this.add();
        this.save();
      }
    },
    add() {
      const elemText = document.querySelector('.input_text');
      if (elemText.disabled || !elemText.value.length) {
        return;
      }
      document.querySelector('.todo__items').insertAdjacentHTML('beforeend', this.create(elemText.value));
      elemText.value = '';
    },
    create(text) {
    return `<div class="todo__item" data-todo-state="active">
        <div class="todo__task">${text}</div>
        <div class="todo__action todo__action_circle_res" data-todo-action="active"></div>
        <div class="todo__action todo__action_circle_com" data-todo-action="completed"></div><br>
        <button class="todo__action todo__action_restore" data-todo-action="active">UNREADY</button>
        <button class="todo__action todo__action_complete" data-todo-action="completed">READY</button>
        <button class="todo__action todo__action_delete" data-todo-action="deleted">DELETE</button>
        </div>`;
    },
    init() {
      const fromStorage = localStorage.getItem('todo');
      if (fromStorage) {
        document.querySelector('.todo__items').innerHTML = fromStorage;
      }
      document.querySelector('.todo__options').addEventListener('change', this.update);
      document.addEventListener('click', this.action.bind(this));
    },
    update() {
      const option = document.querySelector('.todo__options').value;
      document.querySelector('.todo__items').dataset.todoOption = option;
      document.querySelector('.input_text').disabled = option !== 'active';
    },
    save() {
      localStorage.setItem('todo', document.querySelector('.todo__items').innerHTML);
    }
  }
  $("button.rem_all").on('click', function(){
    localStorage.clear();
    document.querySelector('.todo__items').innerHTML = '';
  })
  todo.init();