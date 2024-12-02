const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
  company: {
    type: String,
    required:[true, 'Please provide company name'],
    maxlength:50
  }
})