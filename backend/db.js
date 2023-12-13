const mongoose = require("mongoose")
mongoose.set("strictQuery", false);
const express = require('express');

//const url = 'mongodb://127.0.0.1:27017/EazeeFood?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.9.0';
const url= 'mongodb+srv://shubhavkaushik:shubhav123@cluster0.qjifkco.mongodb.net/EazeeFood?retryWrites=true&w=majority'
const mongoConnect = async () => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, async (err, result) => {
        if (err) console.log("---", err);
        else {
            console.log("connected");
            const fd = await mongoose.connection.collection("food_items");
            fd.find({}).toArray(async function (err, data) {
                const fc = await mongoose.connection.collection("foodCategories");
                fc.find({}).toArray(function (err, catData) {
                    if (err) console.log(err);
                    else {
                        global.food_items = data;
                        global.foodCategories = catData;
                        //console.log([ global.food_items,global.foodCategories])

                    }
                });
                //  if (err) console.log(err);
                //  else {
                //      global.food_items = data;
                //  }
            });
        }
    }


    )
}

module.exports.mongoConnect = mongoConnect;
