import express from 'express';
import TodoController from '../controllers/TodoController';

let router = express.Router();

router.get('/', TodoController.getTodos);
router.post('/', TodoController.createTodo);
router.get('/:id', TodoController.getSingleTodo);
router.put('/:id', TodoController.updateTodo);
router.delete('/:id', TodoController.deleteTodo);

export default router;
