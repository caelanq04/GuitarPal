require('./config/db');

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const bcrypt = require('bcrypt');

const authRouter = require('./routes/auth');
const indexRouter = require('./routes/index');
const regRouter = require('./routes/register');
const userRouter = require('./routes/user');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'static')));

app.set('view-engine', 'ejs');

// app.use('/', indexRouter);

app.use('/user', userRouter);

app.use('/login', authRouter);

app.use('/register', regRouter);

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
