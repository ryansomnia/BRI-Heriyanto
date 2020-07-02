const sql = require('../config/db');

//constructor 
const ListPropinsi = function (list_propinsi) {

    this.nama_propinsi = list_propinsi.nama_propinsi;
};



ListPropinsi.create = (newlist_propinsi, result) => {
    sql.query("INSERT INTO list_propinsi SET ?", newlist_propinsi, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;

        }
        console.log("created list_propinsi : ", { id_propinsi: res.insertId, ...newlist_propinsi });
        result(null, { id_propinsi: res.insertId, ...newlist_propinsi });
    });
};

ListPropinsi.findById = (id_propinsi, result) => {
    sql.query(`SELECT * FROM list_propinsi WHERE id_propinsi = ${id_propinsi}`, (err, res) => {
        if (err) {
            console.log("error ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found list_propinsi", res[0]);
            result(null, res[0]);
            return;
        }
        //not found Customer with the id
        result({ kind: " not found" }, null);
    });
};

ListPropinsi.getAll = result => {
    sql.query("SELECT * FROM list_propinsi", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("list_propinsi: ", res);
        result(null, res);
    });
};

ListPropinsi.updateById = (id_propinsi, list_propinsi, result) => {
    sql.query("UPDATE list_propinsi SET nama_propinsi = ?  WHERE id_propinsi = ?",

        [list_propinsi.nama_propinsi, id_propinsi],
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
            console.log(" update list_propinsi: ", { id_propinsi: id_propinsi, ...list_propinsi });
            result(null, { id_propinsi: id_propinsi, ...list_propinsi })
        }
    );
};
ListPropinsi.remove = (id_propinsi, result) => {
    sql.query("DELETE FROM list_propinsi WHERE id_propinsi = ?", id_propinsi, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found list_propinsi with the id
            result({ kind: "not found" }, null);
            return;

        }
        console.log("deleted list_propinsi with id: ", id_propinsi);
        result(null, res);

    });
};
ListPropinsi.removeAll = result => {
    sql.query("DELETE FROM list_propinsi", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;

        }
        console.log(`delete ${res.affectedRows} list`);
        result(null, res);
    });
};
module.exports = ListPropinsi;