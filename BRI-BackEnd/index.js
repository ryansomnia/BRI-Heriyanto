const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const cors = require('cors');

//setting cors
app.options('*', cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());


require("./routes/router")(app);


app.listen(port);
console.log(`Server berada di port: ${port}`);