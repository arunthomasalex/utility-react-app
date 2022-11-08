'use strict'

import express from 'express';
import path from 'path';
import { home } from './routes';

const app = express()


app.use('/public', express.static(path.resolve(__dirname, '../public')));

app.route('/')
    .get(home);

// hide powered by express
app.disable('x-powered-by');
app.listen(process.env.PORT || 8888);
