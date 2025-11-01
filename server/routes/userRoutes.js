import express from 'express';
import {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    deleteAllUsers
} from '../controllers/userController.js'

import authMiddleware from '../middleware/auth.js';

// Router /users
const router = express.Router();

// HTTP Verbs for RESTful APIs GET, POST, PUT, DELETE
router.get('/', authMiddleware, getAllUsers);
router.get('/:id', authMiddleware, getUserById);
router.post('/', authMiddleware, createUser);
router.put('/:id', authMiddleware, updateUser);
router.delete('/', authMiddleware, deleteAllUsers);
router.delete('/:id', authMiddleware, deleteUser);


export default router;