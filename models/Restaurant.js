const mongoose = require('mongoose');
const express = require('express');
const Schema = mongoose.Schema;
const router = express.Router();
const Restaurant = mongoose.model('Restaurant',new Schema(),'restaurants');

module.exports = Restaurant;
