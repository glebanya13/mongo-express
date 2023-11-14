import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import recordsRouter from './routes/records.js';

const app = express()

app.set('port', 5000);

app.listen(app.get('port'), () => {
  console.log(`[OK] Server is running on localhost:${app.get('port')}`);
});

mongoose.connect('mongodb://127.0.0.1:27017/mydata')
  .then(db => console.log('[OK] DB is connected'))
  .catch(err => console.error(err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use('/api/records', recordsRouter);