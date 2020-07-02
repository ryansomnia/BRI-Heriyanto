module.exports = app => {
    const list_propinsi = require('../controller/list_propinsi');
    app.post("/list_propinsi", list_propinsi.create);
    app.get("/list_propinsi", list_propinsi.findAll);
    app.get("/list_propinsi/:id_propinsi", list_propinsi.findOne);
    app.put("/list_propinsi/:id_propinsi", list_propinsi.update);
    app.delete("/list_propinsi/:id_propinsi", list_propinsi.delete);
    app.delete("/list_propinsi", list_propinsi.deleteAll);

    const list_kontrasepsi = require('../controller/list_kontrasepsi');
    app.post("/list_kontrasepsi", list_kontrasepsi.create);
    app.get("/list_kontrasepsi", list_kontrasepsi.findAll);
    app.get("/list_kontrasepsi/:Id_Kontrasepsi", list_kontrasepsi.findOne);
    app.put("/list_kontrasepsi/:Id_Kontrasepsi", list_kontrasepsi.update);
    app.delete("/list_kontrasepsi/:Id_Kontrasepsi", list_kontrasepsi.delete);
    app.delete("/list_kontrasepsi", list_kontrasepsi.deleteAll);

    const list_pemakai_kontrasepsi = require('../controller/list_pemakai_kontrasepsi');
    app.post("/list_pemakai_kontrasepsi", list_pemakai_kontrasepsi.create);
    app.get("/list_pemakai_kontrasepsi", list_pemakai_kontrasepsi.findAll);
    app.get("/list_pemakai_kontrasepsi/:Id_List", list_pemakai_kontrasepsi.findOne);
    app.put("/list_pemakai_kontrasepsi/:Id_List", list_pemakai_kontrasepsi.update);
    app.delete("/list_pemakai_kontrasepsi/:Id_List", list_pemakai_kontrasepsi.delete);
    app.delete("/list_pemakai_kontrasepsi", list_pemakai_kontrasepsi.deleteAll);
};