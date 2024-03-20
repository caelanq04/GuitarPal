const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	res.locals.title = 'GuitarPal - Login';
	res.render('login.ejs');
});

module.exports = router;
