const ListKontrasepsi = require("../model/list_kontrasepsi");
// Create and Save a new list_kontrasepsi
exports.create = (req, res) => {
    //Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Create a list_kontrasepsi
    const list_kontrasepsi = new ListKontrasepsi({
        Nama_Kontrasepsi: req.body.Nama_Kontrasepsi,

    });

    //Save list_kontrasepsi in the database
    ListKontrasepsi.create(list_kontrasepsi, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the list_kontrasepsi."
            });
        else res.send(data);
    });
};

// Retrieve all list_kontrasepsis from the database.
exports.findAll = (req, res) => {
    ListKontrasepsi.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving ListKontrasepsi."
            });
        else res.send(data);
    });
};


// Find a single ListKontrasepsi with a propinsiId
exports.findOne = (req, res) => {
    ListKontrasepsi.findById(req.params.Id_Kontrasepsi, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found ListKontrasepsi with id ${req.params.Id_Kontrasepsi}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving ListKontrasepsi with id " + req.params.Id_Kontrasepsi
                });
            }
        } else res.send(data);
    });
};

// Update a ListKontrasepsi identified by the Id_Kontrasepsi in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    ListKontrasepsi.updateById(
        req.params.Id_Kontrasepsi,
        new ListKontrasepsi(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found ListKontrasepsi with id ${req.params.Id_Kontrasepsi}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating ListKontrasepsi with id " + req.params.Id_Kontrasepsi
                    });
                }
            } else res.send(data);
        }
    );
};

// Delete a ListKontrasepsi with the specified Id_Kontrasepsi in the request
exports.delete = (req, res) => {
    ListKontrasepsi.remove(req.params.Id_Kontrasepsi, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found ListKontrasepsi with id ${req.params.Id_Kontrasepsi}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete ListKontrasepsi with id " + req.params.Id_Kontrasepsi
                });
            }
        } else res.send({ message: `ListKontrasepsi was deleted successfully!` });
    });
};
// Delete all ListKontrasepsis from the database.

exports.deleteAll = (req, res) => {
    ListKontrasepsi.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all ListKontrasepsis."
            });
        else res.send({ message: `All ListKontrasepsis were deleted successfully!` });
    });
};