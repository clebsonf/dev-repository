const express = require('express');
const compression = require('compression');
const cors = require('cors');
const morgan = require('morgan');

const { notFoundMiddleware, errorHandler } = require('./middlewares/erroHandler')

const isProduction = process.env.NODE_ENV == "production";

const app = express();

app.use(express.json());
app.use("/public/images",express.static(__dirname+"/public/images"));

if(!isProduction) app.use(morgan("dev"));

app.use(cors());
app.disable("x-powered-by");
app.use(compression());
app.use(express.urlencoded({extended: false, limit: 1.5*1024}));
app.use(express.json());

app.use(notFoundMiddleware);
app.use(errorHandler);

module.exports = app;