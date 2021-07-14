const { username } = require('../config/database');
const Collaborator = require('../models/Collaborator');

module.exports = {
    async index(req, res) {
        const collaborators = await Collaborator.findAll();

        if (collaborators === "" || collaborators === null) {
            return res.status(200).send({ message: "Nenhum usuário cadastrado" });
        }

        return res.status(200).send({ collaborators });
    },

    async store(req, res) {
        try {
            const { name, pis, registration } = req.body;

            const collaborator = await Collaborator.create({ name, pis, registration });

            return res.status(200).send({ collaborator });
        } catch (error) {
            console.log(error);
            return res.status(400).send({ error: "Error creating new collaborator" });
        }
    },

    async update(req, res) {
        try {
            const { name, pis, registration } = req.body;

            const { collaborator_id } = req.params;

            await Collaborator.update({ name, pis, registration }, {
                where: {
                    id: collaborator_id
                }
            });

            return res.status(200).send({ message: "collaborator edited successfully!" });
        } catch (error) {
            console.log(error);
            return res.status(400).send({ error: "Error update collaborator" });
        }
    },

    async delete(req, res) {
        try {
            const { collaborator_id } = req.params;

            await Collaborator.destroy({
                where: {
                    id: collaborator_id
                }
            });

            return res.status(200).send({ message: "collaborator successfully removed!" });
        } catch (error) {
            console.log(error);
            return res.status(400).send({ error: "Error remove collaborator" });
        }
    },
}