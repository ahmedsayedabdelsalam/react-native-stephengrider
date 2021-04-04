const express = require('express');
const mongoose = require('mongoose');
const {validate, body} = require('../utils/validate');
const jwt = require('jsonwebtoken');

const User = mongoose.model('User');

const router = express.Router();

router.post('/signup',
    validate([
        body('email').isEmail().custom(email => {
            return User.findOne({email}).then(user => {
                if (user) return Promise.reject('E-mail already in use');
            })
        }),
        body('password').isLength({min: 6}),
    ]),
    async (req, res) => {
        const {email, password} = req.body;

        try {
            const user = new User({email, password});
            await user.save();

            const token = jwt.sign({userId: user._id}, 'MY_SECRET_KEY');
            res.send({token});
        } catch (err) {
            return res.status(422).send(err.message);
        }
    }
);

router.post('/signin',
    validate([
        body('email').isEmail(),
        body('password').isLength({min: 6}),
    ]), async (req, res) => {
        const {email, password} = req.body;

        const user = await User.findOne({email})
        if (!user) {
            return res.status(400).send({error: 'Invalid password or email'})
        }

        try {
            await user.comparePassword(password);
            const token = jwt.sign({userId: user.id}, 'MY_SECRET_KEY');
            res.send({token});
        } catch (err) {
            return res.status(422).send({error: 'Invalid password or email'});
        }
    })

module.exports = router;