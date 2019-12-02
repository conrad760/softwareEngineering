const express = require('express');
const connectDB = require('./config/db');

const users = require('./routes/api/users');
const auth = require('./routes/api/auth');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('API is Running nicee'));

// Define routes
app.use('/api/users', users);
app.use('/api/auth', auth);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
