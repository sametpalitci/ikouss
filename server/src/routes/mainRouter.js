const express = require('express');
const router = express.Router();

const accountRouter = require('./accountRouter');

router.use('/account', accountRouter);

module.exports = router;
