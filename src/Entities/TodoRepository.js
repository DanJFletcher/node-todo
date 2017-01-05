
const todos = [];

export default class TodoRepository {

    static get todos() { 
        return todos 
    }

    static add (todo) {
        this.todos.push(todo)
        return true
    }

    static delete (id) {
        this.todos.splice(id, 1)
        return true
    }

    static update (id, name) {
        this.todos[id].name = name
        return true
    }
}