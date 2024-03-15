const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
	res.sendFile(path.join(__dirname, '..', 'static', 'register.html'));
});

module.exports = router;
