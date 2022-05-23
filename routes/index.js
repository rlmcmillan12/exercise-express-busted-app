'use strict';
const express = require('express');
const router = express.Router();
const data = require('../model/db');

router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            data,
            title: "Home Page"
        },
        partials: {
            body: "partials/home",
        }
    })
})

module.exports = router;