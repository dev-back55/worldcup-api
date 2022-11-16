import express from 'express';
import bodyParser from 'body-parser';
import partidosRoutes from './routes/partidos.routes.js';
import morgan from 'morgan';
import dotenv from "dotenv";

dotenv.config()

const { CLIENT_URL } = process.env || "http://localhost:3000";

const app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));

// CORS CONFIGURATION
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', CLIENT_URL);
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, authorization, On-behalf-of, x-sg-elas-acl');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

//routes
app.use(partidosRoutes)


export default app;
