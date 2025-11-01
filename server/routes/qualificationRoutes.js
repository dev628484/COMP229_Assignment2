import express from 'express';
import {
    getAllQualifications,
    getQualificationById,
    updateQualification,
    deleteQualification,
    createQualification,
    deleteAllQualifications
} from '../controllers/qualificationController.js'

import authMiddleware from '../middleware/auth.js';

// Router /qualification
const router = express.Router();

// HTTP Verbs for RESTful APIs GET, POST, PUT, DELETE
router.get('/', authMiddleware, getAllQualifications);
router.get('/:id', authMiddleware, getQualificationById);
router.post('/', authMiddleware, createQualification);
router.put('/:id', authMiddleware, updateQualification);
router.delete('/', authMiddleware, deleteAllQualifications);
router.delete('/:id', authMiddleware, deleteQualification);


export default router;