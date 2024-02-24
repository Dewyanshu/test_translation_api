const express = require('express');
const glob = require('glob');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

glob.sync(process.env.API_PATH, {
    cwd: __dirname,
    ignore: '**/node_modules/**',
}).forEach((file) => {
    const route = require(path.resolve(__dirname, file));
    app.use(route);
});

app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log(`Server is running on http://localhost:${PORT}`);
});