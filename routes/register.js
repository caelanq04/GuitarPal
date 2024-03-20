const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	res.locals.title = 'GuitarPal - Register';
	res.render('register.ejs');
});

module.exports = router;
