const _ = require('lodash');
const axios = require('axios');
const cheerio = require('cheerio');

/** 
 * _ handles the request (Promise) when it is fulfilled
 * and sends a JSON response to the HTTP response stream (res).
 */

const sendResponse = res => async request => {
    return await request
    .then(data => res.json({ status: "Success", data}))
    .catch(({status: code = 500}) =>
        res.status(code).json({ status: "Failure", code, message: code == 404 ? 'Not Found.': 'Request failed.'})
        );
};

