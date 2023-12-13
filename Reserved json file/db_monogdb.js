//The MongoClient class is a class that allows for making Connections to MongoDB.
// The programmatically provided options take precedence over the URI options.

const { MongoClient } = require('mongodb');
const mongoose = require('mongoose')
// or as an es module:
// import { MongoClient } from 'mongodb'
// Connection URL
const url = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.9.0';

// Our data enter into the client 
const client = new MongoClient(url);
//we establish connection first then start server
const mongoConnect = () => {
    return client.connect()
        .then((client) => {

            //console.log(client);
            console.log("Database connected");
            // function to fetch data
            async function getData() {

                const db = client.db('EazeeFood');
                // using db we fetch sub-collection data
               // let collection = db.collection('food_items');
                //await handle the promise
               // let response = await collection.find({}).toArray();
               // console.log(response);

            }
            getData();
            //     if(err) console.log(err);
            //     else console.log(data);
        })
        .catch(err => {
            console.log(err);
        })
}

module.exports.mongoConnect = mongoConnect;

