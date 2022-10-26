const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const fs = require('fs');
let db = fs.readFileSync('db.json');
db = JSON.parse(db);
let allgoods = db["goods"];
app.locals.allgoods = allgoods;
let alltenants = db["tenants"];
app.locals.alltenants = alltenants
const port = 3000;
const routesg = require('./config/routes_goods.js');
const routest = require('./config/routes_tenants.js');
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Library API",
            version: "1.0.0",
            description: "A simple Express Library API",
        },
        servers: [
            {
                url: "http://localhost:" + port,
            },
        ],
    },
    apis: ["./config/*.js"],
};

const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/goods', routesg);
app.use('/api/tenants', routest);

app.listen(port);