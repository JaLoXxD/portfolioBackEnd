const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();

const port = process.env.PORT || 8080;
app.set('port', port);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//ROUTES
app.use(require("./routes/index"));

app.listen(app.get("port"), () => {
	console.log("server listen on port " + app.get("port") + "...");
});