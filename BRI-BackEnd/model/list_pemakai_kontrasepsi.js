const sql = require('../config/db');

//constructor 
const ListPemakaiKontrasepsi = function (list_pemakai_kontrasepsi) {

    this.Id_Propinsi = list_pemakai_kontrasepsi.Id_Propinsi;
    this.Id_Kontrasepsi = list_pemakai_kontrasepsi.Id_Kontrasepsi;
    this.Jumlah_Pemakai = list_pemakai_kontrasepsi.Jumlah_Pemakai;

};



ListPemakaiKontrasepsi.create = (newListPemakaiKontrasepsi, result) => {
    sql.query("INSERT INTO list_pemakai_kontrasepsi SET ?", newListPemakaiKontrasepsi, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;

        }
        console.log("created list_pemakai_kontrasepsi : ", { Id_List: res.insertId, ...newListPemakaiKontrasepsi });
        result(null, { Id_List: res.insertId, ...newListPemakaiKontrasepsi });
    });
};

ListPemakaiKontrasepsi.findById = (Id_List, result) => {
    sql.query(`SELECT * FROM list_pemakai_kontrasepsi WHERE Id_List = ${Id_List}`, (err, res) => {
        if (err) {
            console.log("error ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found list_pemakai_kontrasepsi", res[0]);
            result(null, res[0]);
            return;
        }
        //not found list with the id
        result({ kind: " not found" }, null);
    });
};

ListPemakaiKontrasepsi.getAll = result => {
    sql.query("SELECT * FROM list_pemakai_kontrasepsi", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("list_pemakai_kontrasepsi: ", res);
        result(null, res);
    });
};

ListPemakaiKontrasepsi.updateById = (Id_List, list_pemakai_kontrasepsi, result) => {
    sql.query("UPDATE list_pemakai_kontrasepsi SET Id_Propinsi = ?, Id_Kontrasepsi = ?, Jumlah_Pemakai = ? WHERE Id_List = ?",
        [list_pemakai_kontrasepsi.Id_Propinsi, list_pemakai_kontrasepsi.Id_Kontrasepsi, list_pemakai_kontrasepsi.Jumlah_Pemakai, Id_List],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found list with the id
                result({ kind: "not found" }, null);
                return;
            }
            console.log(" update list_pemakai_kontrasepsi: ", { Id_List: Id_List, ...list_pemakai_kontrasepsi });
            result(null, { Id_List: Id_List, ...list_pemakai_kontrasepsi })
        }
    );
};
ListPemakaiKontrasepsi.remove = (Id_List, result) => {
    sql.query("DELETE FROM list_pemakai_kontrasepsi WHERE Id_List = ?", Id_List, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found list_pemakai_kontrasepsi with the id
            result({ kind: "not found" }, null);
            return;

        }
        console.log("deleted list_pemakai_kontrasepsi with id: ", Id_List);
        result(null, res);

    });
};
ListPemakaiKontrasepsi.removeAll = result => {
    sql.query("DELETE FROM list_pemakai_kontrasepsi", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;

        }
        console.log(`delete ${res.affectedRows} list`);
        result(null, res);
    });
};
module.exports = ListPemakaiKontrasepsi;