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
        const { selectedFile } = req.body;
        try {
            const marking = await Marking.bulkCreate(selectedFile);

            return res.status(200).send({ marking });
        } catch (error) {
            console.log(error);
            if (error.parent.code === 'ER_DUP_ENTRY') {
                return res.status(400).send({ error: "sequential_record already registered" });
            } else {
                return res.status(400).send({ error: "Error import markings" });
            }
        }
    },
}