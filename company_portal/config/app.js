import cors from 'cors';
import 'dotenv/config';
import express, { json } from 'express';
import morgan from 'morgan';
import { join } from 'path';
import admin from '../routes/api/admin';

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(json({ extended: false }));
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '../client/build')));

  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '../client/build', 'index.html'));
  });
}

app.use('/api/admin', admin);
app.use('/api/auth', auth);
app.use('/api/member', member);
app.use('/api/officers', officer);
app.use('/api/profile', profile);
app.use('/api/resume', resume);
// app.use('/api/event', require('./routes/api/event'));

export default app;
