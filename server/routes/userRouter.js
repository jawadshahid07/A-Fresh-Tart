const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.post('/create-user', (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
    });

    user.save()
        .then((output) => {
            res.status(200).send({ data: output });
        })
        .catch((err) => {
            res.status(400).send({ error: err });
        });
});

module.exports = router;
