import express from 'express';
import userRoutes from './routes/userRoutes';
import tweetRoutes from './routes/tweetRoutes';


const app = express();
app.use(express.json());
app.disable('x-powered-by');
app.use('/user', userRoutes);
app.use('/tweet', tweetRoutes);

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});