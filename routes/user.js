const express = require('express');
const router = express.Router();

//mongoDB user model
const User = require('./../models/user');

//Password Handler
const bcrypt = require('bcrypt');

// register
router.post('/register', (req, res) => {
	let { userName, email, password } = req.body;
	userName = userName.trim();
	email = email.trim();
	password = password.trim();

	if (userName == '' || email == '' || password == '') {
		res.json({
			status: 'FAILED',
			message: 'Empty input fields!',
		});
	} else if (!/^[a-zA-Z]*$/.test(userName)) {
		res.json({
			status: 'FAILED',
			message: 'Invalid name entered',
		});
	} else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
		res.json({
			status: 'FAILED',
			message: 'Invalid email entered',
		});
	} else if (password.length < 8) {
		res.json({
			status: 'FAILED',
			message: 'Password is too short',
		});
	} else {
		User.find({ email })
			.then((result) => {
				if (result.length) {
					// A user already exists
					res.json({
						status: 'FAILED',
						message: 'User with the provide email already exists',
					});
				} else {
					// Try to create new user

					// Password handling
					const saltRounds = 10;
					bcrypt
						.hash(password, saltRound)
						.then((hashedPassword) => {
							const newUser = new User({
								userName,
								email,
								password: hashedPassword,
							});

							newUser
								.save()
								.then((result) => {
									res.json({
										status: 'SUCCESS',
										message: 'Account successfully registered!',
										data: result,
									});
								})
								.catch((err) => {
									res.json({
										status: 'FAILED',
										message:
											'An error occurred while saving user account password',
									});
								});
						})
						.catch((err) => {
							res.json({
								status: 'FAILED',
								message: 'An error has occured while hashing password!',
							});
						});
				}
			})
			.catch((err) => {
				console.log(err);
				res.json({
					status: 'FAILED',
					message: 'An error occurred while checking for existing user!',
				});
			});
	}
});

router.post('/login', (req, res) => {});

module.exports = router;
