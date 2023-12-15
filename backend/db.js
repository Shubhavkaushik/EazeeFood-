const mongoose = require("mongoose")
mongoose.set("strictQuery", false);
const express = require('express');

const url ="*******";
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
