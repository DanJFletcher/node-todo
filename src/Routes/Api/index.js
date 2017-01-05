
import todoRepository from '../../Entities/TodoRepository'

export default (app) => {
    
    // Todo Routes
    app.route('/api/todos')
        .get((req, res) => {
            const todos = todoRepository.todos.map ((todo) => {
                return todo.name
            })
            res.send(`Retrun all todos!! ${todos}`)
        })

        .post((req, res) => {
            todoRepository.add({ name: req.body.name })
            res.send(`Created a todo!`)
        })

        .delete((req, res) => {
            todoRepository.delete(req.body.id)
            res.send('Deleted a todo :(')
        })

        .put((req, res) => {
            todoRepository.update(req.body.id, req.body.name)
            res.send(`Updated a todo :)`)
        })
}