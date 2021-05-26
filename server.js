//require dependencies
const path = require('path');
const logger = require('morgan'); //create a logger middleware function
const express = require('express');
const { sendResponse } = require('./app/helpers');
const { fetchAuthorProfile } = require('./app/scotch');

//create an express application
const app = express();

//configure the app port
const port = process.env.PORT || 3000;
app.set('port', port);

//load middle-wares
app.use(logger('dev'));

app.use('/', express.static(path.resolve(__dirname, 'public')));

app.get('/scotch/:author', (req, res, next) => {
	const author = req.params.author;
	sendResponse(res)(fetchAuthorProfile(author));
});

//start the server and listen on the pre-configured port

app.listen(port, () => console.log(`App started on port ${port}.`));