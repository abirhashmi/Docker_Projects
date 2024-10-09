import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/wdjRoutes';

const app = express();
const PORT = 4000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongo:27017/wdj', {
    useMongoClient: true
}, (err, db) => {
    if(err) {
        console.log('database is not connected')
    }
    else {
        console.log('connected!!')
    }
});

//bodyparser setup
app.use(bodyParser.urlencoded({extended: true} ));
app.use(bodyParser.json());

routes(app);

//serving static files