import express from 'express';
//import mongodb from 'mongodb';
//import config from './data';

const app = express();
const PORT = 4000;
//const client = mongodb.MongoClient;

// Connect to MongoDB
/*client.connect(config.DB, { useNewUrlParser: true }, (err, db) => {
    if (err) {
        console.log('Database is not connected');
    } else {
        console.log('Connected to database!');
    }
});*/

// Define the GET route
app.get('/', (req, res) => {
    res.json("I love docker!");
});

// Start the server
app.listen(PORT, () => {
    console.log('Your server is running on PORT:', PORT);
});
