const mongoose = require('mongoose')
const dotenv = require('dotenv')
const connectToDatabase = require('../config/dbConnection')

dotenv.config();
const collectionName = process.env.COLLECTION_NAME



connectToDatabase()

const schema = {
    name:String,
    email:String,
}

const mongoosemodel = mongoose.model(collectionName,schema)

module.exports = mongoosemodel

