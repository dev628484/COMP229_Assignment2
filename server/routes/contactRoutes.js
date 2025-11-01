import express from 'express';
import {
    getAllContacts,
    getContactById,
    updateContact,
    deleteContact,
    createContact,
    deleteAllContacts
} from '../controllers/contactController.js'

import authMiddleware from '../middleware/auth.js';

// Router /contacts
const router = express.Router();

// HTTP Verbs for RESTful APIs GET, POST, PUT, DELETE
router.get('/', authMiddleware, getAllContacts);
router.get('/:id', authMiddleware, getContactById);
router.post('/', authMiddleware, createContact);
router.put('/:id', authMiddleware, updateContact);
router.delete('/', authMiddleware, deleteAllContacts);
router.delete('/:id', authMiddleware, deleteContact);

export default router;