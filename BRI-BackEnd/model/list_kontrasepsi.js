const sql = require('../config/db');

//constructor 
const ListKontrasepsi = function (list_kontrasepsi) {

    this.Nama_Kontrasepsi = list_kontrasepsi.Nama_Kontrasepsi;
};



ListKontrasepsi.create = (newListKontrasepsi, result) => {
    sql.query("INSERT INTO list_kontrasepsi SET ?", newListKontrasepsi, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;

        }
        console.log("created list_kontrasepsi : ", { Id_Kontrasepsi: res.insertId, ...newListKontrasepsi });
        result(null, { Id_Kontrasepsi: res.insertId, ...newListKontrasepsi });
    });
};

ListKontrasepsi.findById = (Id_Kontrasepsi, result) => {
    sql.query(`SELECT * FROM list_kontrasepsi WHERE Id_Kontrasepsi = ${Id_Kontrasepsi}`, (err, res) => {
        if (err) {
            console.log("error ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found list_kontrasepsi", res[0]);
            result(null, res[0]);
            return;
        }
        //not found Customer with the id
        result({ kind: " not found" }, null);
    });
};

ListKontrasepsi.getAll = result => {
    sql.query("SELECT * FROM list_kontrasepsi", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("list_kontrasepsi: ", res);
        result(null, res);
    });
};

ListKontrasepsi.updateById = (Id_Kontrasepsi, list_kontrasepsi, result) => {
    sql.query("UPDATE list_kontrasepsi SET Nama_Kontrasepsi = ?  WHERE Id_Kontrasepsi = ?",

        [list_kontrasepsi.Nama_Kontrasepsi, Id_Kontrasepsi],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found Customer with the id
                result({ kind: "not found" }, null);
                return;
            }
            console.log(" update list_kontrasepsi: ", { Id_Kontrasepsi: Id_Kontrasepsi, ...list_kontrasepsi });
            result(null, { Id_Kontrasepsi: Id_Kontrasepsi, ...list_kontrasepsi })
        }
    );
};
ListKontrasepsi.remove = (Id_Kontrasepsi, result) => {
    sql.query("DELETE FROM list_kontrasepsi WHERE Id_Kontrasepsi = ?", Id_Kontrasepsi, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found list_kontrasepsi with the id
            result({ kind: "not found" }, null);
            return;

        }
        console.log("deleted list_kontrasepsi with id: ", Id_Kontrasepsi);
        result(null, res);

    });
};
ListKontrasepsi.removeAll = result => {
    sql.query("DELETE FROM list_kontrasepsi", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;

        }
        console.log(`delete ${res.affectedRows} list`);
        result(null, res);
    });
};
module.exports = ListKontrasepsi;