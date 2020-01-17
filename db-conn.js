const mongoose = require('mongoose');
const {DB_USERNAME, DB_PASSWORD, DB_CONNECTION_STRING} = process.env;

mongoose
    .connect(
        DB_CONNECTION_STRING,
        { auth: { user: DB_USERNAME, password: DB_PASSWORD}, useNewUrlParser: true, useUnifiedTopology: true},
    )
    .then(() => console.log('Successfully connected to MongoDB on Azure Cosmo DB...'))
    .catch(console.error);