import { ClientModel as Client } from '../models/clientModel.js';



export const createClient = async (req, res) => {
    try {

        const { name, bday, rating } = req.body;
        
        const newClient = await Client.create({ 
            name, 
            bday,      
            rating     
        });
        
        res.status(201).json(newClient);
    } catch (error) {
        console.error('ошибка создания клиента: ', error);
        res.status(500).json({ error: error.message });
    }
};

export const getAllClients = async (req, res) => {
    try {
        const clients = await Client.findAll();
        res.json(clients);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getClientById = async (req, res) => {
    try {
        const client = await Client.findByPk(req.params.id);
        if (client) {
            res.json(client);
        } else {
            res.status(404).json({ error: 'клиент не найден' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateClient = async (req, res) => {
    try {

        const { name, bday, rating } = req.body;
        
        const [updated] = await Client.update(
            { name, bday, rating },
            { where: { id: req.params.id } }
        );
        
        if (updated) {
            const updatedClient = await Client.findByPk(req.params.id);
            res.json(updatedClient);
        } else {
            res.status(404).json({ error: 'клиент не найден' });
        }
    } catch (error) {
        console.error('ошибка обновления клиента:', error);
        res.status(500).json({ error: error.message });
    }
};

export const deleteClient = async (req, res) => {
    try {
        const deleted = await Client.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'клиент не найден' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};