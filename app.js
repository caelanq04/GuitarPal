const express = require('express');
const bodyParser = require('body-parser');

const authRouter = require('./routes/auth');
const indexRouter = require('./routes/index');
const regRouter = require('./routes/register');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRouter);

app.use('/', authRouter);

app.use('/register', regRouter);

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
