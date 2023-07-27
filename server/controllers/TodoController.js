import db from '../database/models/index';

const { Todo } = db;

/**
 * @param {param} req
 * @param {param} res
 * @param {func} next
 */
class TodoController {
  /**
 * @param {obj} req
 * @param {obj} res
 * @param {obj} next
 * @returns {json} create todo
 */
  static createTodo(req, res, next) {
    const {
      title
    } = req.body;

    Todo.create({
      title
    })
      .then((todo) => {
        return res.status(201).json({
          message: 'Todo created successfully',
          todo
        });
      })
      .catch(next);
  }

  /**
 * @param {obj} req
 * @param {obj} res
 * @param {obj} next
 * @returns {json}  get all todos
 */
  static getTodos(req, res, next) {

    Todo.findAll()
      .then((todos) => {
        return res.status(200).json({
         todos
        });
      })
      .catch(next);
  }

  /**
 * @param {obj} req
 * @param {obj} res
 * @param {obj} next
 * @returns {json} get a single todo
 */
  static getSingleTodo(req, res, next) {
    Todo.findOne(
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then((todo) => {
        if (!todo) {
          return res.status(400).json({
            message: 'Todo not found'
          });
        }
        return res.status(200).json({
          todo
        });
      })
      .catch(next);
  }

  /**
 * @param {obj} req
 * @param {obj} res
 * @param {obj} next
 * @returns {json} update todo
 */
  static updateTodo(req, res, next) {
    const { title } = req.body;
    Todo.findOne(
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then((todo) => {
        if (!todo) {
          return res.status(404).json({
            message: 'Todo not found'
          });
        }
        todo.update({
          title
        });
        return res.status(200).json({
          message: 'Todo updated successfully',
          todo
        });
      })
      .catch(next);
  }

  /**
 * @param {obj} req
 * @param {obj} res
 * @param {obj} next
 * @returns {json} delete todo item
 */
  static deleteTodo(req, res, next) {
    Todo.findOne(
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then((todo) => {
        if (!todo) {
          return res.status(404).json({
            message: 'Todo not found'
          });
        }
        todo.destroy();

        return res.status(200).json({
          message: 'Todo deleted successfully'
        });
      })
      .catch(next);
  }
}

export default TodoController;
