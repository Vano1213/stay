import express from 'express';
import {
    createClient,
    getAllClients,
    getClientById,
    updateClientPut,
    updateClientPatch,
    deleteClient
} from '../controllers/clientController.js';

const router = express.Router();


router.post('/', createClient);
router.get('/', getAllClients);


router.get('/:id', getClientById);
router.put('/:id', updateClientPut);
router.patch('/:id', updateClientPatch);
router.delete('/:id', deleteClient);

export default router;