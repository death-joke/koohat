import express from 'express';
import pino from 'express-pino-logger';
 
const app = express();
app.use(pino);

 

 
app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);