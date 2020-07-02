const ListPemakaiKontrasepsi = require("../model/list_pemakai_kontrasepsi");
// Create and Save a new list_pemakai_kontrasepsi
exports.create = (req, res) => {
    //Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Create a list_pemakai_kontrasepsi
    const list_pemakai_kontrasepsi = new ListPemakaiKontrasepsi({

        Id_Propinsi: req.body.Id_Propinsi,
        Id_Kontrasepsi: req.body.Id_Kontrasepsi,
        Jumlah_Pemakai: req.body.Jumlah_Pemakai

    });

    //Save list_pemakai_kontrasepsi in the database
    ListPemakaiKontrasepsi.create(list_pemakai_kontrasepsi, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the list_pemakai_kontrasepsi."
            });
        else res.send(data);
    });
};

// Retrieve all list_pemakai_kontrasepsis from the database.
exports.findAll = (req, res) => {
    ListPemakaiKontrasepsi.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving ListPemakaiKontrasepsi."
            });
        else res.send(data);
    });
};


// Find a single ListPemakaiKontrasepsi with a id_List
exports.findOne = (req, res) => {
    ListPemakaiKontrasepsi.findById(req.params.Id_List, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found ListPemakaiKontrasepsi with id ${req.params.Id_List}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving ListPemakaiKontrasepsi with id " + req.params.Id_List
                });
            }
        } else res.send(data);
    });
};

// Update a ListPemakaiKontrasepsi identified by the Id_List in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    ListPemakaiKontrasepsi.updateById(
        req.params.Id_List,
        new ListPemakaiKontrasepsi(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found ListPemakaiKontrasepsi with id ${req.params.Id_List}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating ListPemakaiKontrasepsi with id " + req.params.Id_List
                    });
                }
            } else res.send(data);
        }
    );
};

// Delete a ListPemakaiKontrasepsi with the specified Id_List in the request
exports.delete = (req, res) => {
    ListPemakaiKontrasepsi.remove(req.params.Id_List, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found ListPemakaiKontrasepsi with id ${req.params.Id_List}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete ListPemakaiKontrasepsi with id " + req.params.Id_List
                });
            }
        } else res.send({ message: `ListPemakaiKontrasepsi was deleted successfully!` });
    });
};
// Delete all ListPemakaiKontrasepsis from the database.

exports.deleteAll = (req, res) => {
    ListPemakaiKontrasepsi.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all ListPemakaiKontrasepsis."
            });
        else res.send({ message: `All ListPemakaiKontrasepsis were deleted successfully!` });
    });
};