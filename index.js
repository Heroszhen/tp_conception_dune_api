const express = require('express');
const app = express();
const fs = require('fs');
let db = fs.readFileSync('db.json');
db = JSON.parse(db);
console.log(db);
const port = 3210;/*
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
    apis: ["./app/*.js"],
};

const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use('/goods', routesg);
app.use('/tenants', routest);*/

//const port = process.env.PORT || 3000;
app.listen(port);