import express from 'express';
import {
    getAllContacts,
    getContactById,
    updateContact,
    deleteContact,
    createContact
} from '../controllers/contact.js'

import authMiddleware from '../middlewares/auth.js';

// Router /contacts
const router = express.Router();

// HTTP Verbs for RESTful APIs GET, POST, PUT, DELETE
router.get('/', authMiddleware, getAllContacts);
router.get('/:id', authMiddleware, getContactById);
router.post('/', authMiddleware, createContact);
router.put('/:id', authMiddleware, updateContact);
router.delete('/:id', authMiddleware, deleteContact);
router.delete('/',authMiddleware, deleteContact);

export default router;