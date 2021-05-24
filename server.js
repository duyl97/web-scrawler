//require dependencies
const logger = require('morgan');
const express = require('express');

//create an express application
const app = express();

//configure the app port
const port = process.env.PORT || 3000;
app.set('port', port);

//load middle-wares
app.use(logger('dev'));

//start the server and listen on the pre-configured port

app.listen(port, () => console.log('App started on port ${port}.'))