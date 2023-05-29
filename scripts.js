var todos = [
  {
    text: 'Learn HTML',
    done: true
  },
  {
    text: 'Learn VUE',
    done: false
  }

]


const todosApp = {
  data() {
    return {
      todos: window.todos,
      newTodo : {
        done: false
      }
    }
  }, 
  methods: {
    addTodo() {
      if (this.newTodo.text) {
        this.todos.push(this.newTodo)
        this.newTodo = { done: false }        
      } else {
        alert('todo text is required')
      }
    },
    storeTodos() {
      localStorage.setItem("todos", JSON.stringify(this.todos))
    }
  },
  created() {
    this.todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : this.todos ;
  },
}


Vue.createApp(todosApp).mount('#app')