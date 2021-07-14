const Marking = require('../models/Marking');

module.exports = {
    async index(req, res) {
        const markings = await Marking.findAll();

        if (markings === "" || markings === null) {
            return res.status(200).send({ message: "Nenhuma marcação importada" });
        }

        return res.status(200).send({ markings });

    },

    async store(req, res) {
        try {
            const {
                sequential_record,
                marking_type,
                collaborator,
                marking_date,
                marking_hour,
                completed_marking
            } = req.body;

            const marking = await Marking.create({
                sequential_record,
                marking_type,
                collaborator,
                marking_date,
                marking_hour,
                completed_marking
            });

            return res.status(200).send({ marking });
        } catch (error) {
            console.log(error);
            return res.status(400).send({ error: "Error creating new marking" });
        }
    },

    async update(req, res) {
        try {
            const {
                sequential_record,
                marking_type,
                collaborator,
                marking_date,
                marking_hour,
                completed_marking
            } = req.body;

            const { marking_id } = req.params;

            await Marking.update({
                sequential_record,
                marking_type,
                collaborator,
                marking_date,
                marking_hour,
                completed_marking
            }, {
                where: {
                    id: marking_id
                }
            });

            return res.status(200).send({ message: "marking edited successfully!" });
        } catch (error) {
            console.log(error);
            return res.status(400).send({ error: "Error update collaborator" });
        }
    },

    async delete(req, res) {
        try {
            const { marking_id } = req.params;

            await Marking.destroy({
                where: {
                    id: marking_id
                }
            });

            return res.status(200).send({ message: "marking successfully removed!" });
        } catch (error) {
            console.log(error);
            return res.status(400).send({ error: "Error remove marking" });
        }
    },
}