const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

// @route   GET api/users
// @desc    Get all users
// @access  Public
router.get('/', async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.send(users);
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post(
    '/',
    [
        check('name', 'Name is required')
            .not()
            .isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Please enter a longer password').isLength({ min: 6 })
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password } = req.body;

        try {
            // See if user exists
            let user = await User.findOne({ email });

            if (user) {
                return res.status(400).json({
                    errors: [{ msg: 'User already exists' }]
                });
            }

            user = new User({
                name,
                email,
                password
            });

            // Encrypt password
            const salt = await bcrypt.genSalt(10);

            user.password = await bcrypt.hash(password, salt);
            await user.save();

            // // Return jsonwebtoken
            // res.send(user)
            const payload = {
                user: {
                    id: user.id
                }
            };

            jwt.sign(
                payload,
                process.env.JWT_SECRET,
                { expiresIn: 360000 },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);

// @route   UPDATE api/users
// @desc    Update user role
// @access  Private
router.put('/:id', async (req, res) => {
    const condition = { _id: req.params.id };
    console.log('REQ: ', condition);

    const { role } = req.body;
    console.log('Body: ', role);

    const user = await User.findById(req.params.id);
    console.log('User: ', user.role);

    if (role == user.role) {
        return res.status(400).json({
            errors: [{ msg: 'Cannot update role' }]
        });
    }
    if (user) {
        await User.findByIdAndUpdate(
            req.params.id,
            { role: role },
            (err, obj) => {
                if (err) {
                    return res.status(400).json({
                        errors: err
                    });
                }
                return res.json(obj);
            }
        );
    } else {
        return res.status(400).json({
            errors: [{ msg: 'User not found' }]
        });
    }
});

module.exports = router;
