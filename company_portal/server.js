// const express = require('express');
// const connectDB = require('../../../../../Summer_2019/SoftwareDev/SoftwareDesign/assignment2/config/db');

// const app = express();

// // Connect Database
// connectDB();

// // Init Middleware
// app.use(express.json({ extended: false }));
// app.get('/', (req, res) => res.send('API Running'));

// // Define routes
// app.use('/api/users', require('../../../../../Summer_2019/SoftwareDev/SoftwareDesign/assignment2/routes/api/users'));
// app.use('/api/auth', require('../../../../../Summer_2019/SoftwareDev/SoftwareDesign/assignment2/routes/api/auth'));
// app.use('/api/profile', require('../../../../../Summer_2019/SoftwareDev/SoftwareDesign/assignment2/routes/api/profile'));
// app.use('/api/quote', require('../../../../../Summer_2019/SoftwareDev/SoftwareDesign/assignment2/routes/api/quote'));
// app.use('/api/quoteHistory', require('../../../../../Summer_2019/SoftwareDev/SoftwareDesign/assignment2/routes/api/quoteHistory'));

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


// Something Like This