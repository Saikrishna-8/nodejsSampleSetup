const express = require('express');
const app = express();
const port = 8000;

// use express router
app.use('/', require('./routes'));

// set ejs engine for view and setup views folder
app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port, function (err) {
    if (err) {
        console.log(`Error in running in the server:${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});
