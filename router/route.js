import express from 'express'
import { getUser, getUserByName, getUserList, postUser, createTodo, getTodo } from '../controller/user'

const router = express.Router(); 

router.get('/:id', getUser);
router.get('/info', getUserByName);
router.get('/', getUserList);
router.post('/register', postUser);
router.post('/list', createTodo); // create a new todo 
router.get('/get', getTodo); //list made todos 

export default router; 