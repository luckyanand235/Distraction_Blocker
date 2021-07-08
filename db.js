const mongoose = require('mongoose')

const daySchema = mongoose.Schema({
    monday: {
        workingDay: Boolean,
        workingHour: [Date, Date],
        breakHour: [Date, Date],
        appToBeBlocked: [{
            name: String,
            link: String,
            time_limit: Number
        }]
    },
    tuesday: {
        workingDay: Boolean,
        workingHour: [Date, Date],
        breakHour: [Date, Date],
        appToBeBlocked: [{
            name: String,
            link: String,
            time_limit: Number
        }]
    },
    wednesday: {
        workingDay: Boolean,
        workingHour: [Date, Date],
        breakHour: [Date, Date],
        appToBeBlocked: [{
            name: String,
            link: String,
            time_limit: Number
        }]
    },
    thursday: {
        workingDay: Boolean,
        workingHour: [Date, Date],
        breakHour: [Date, Date],
        appToBeBlocked: [{
            name: String,
            link: String,
            time_limit: Number
        }]
    },
    friday: {
        workingDay: Boolean,
        workingHour: [Date, Date],
        breakHour: [Date, Date],
        appToBeBlocked: [{
            name: String,
            link: String,
            time_limit: Number
        }]
    },
    saturday: {
        workingDay: Boolean,
        workingHour: [Date, Date],
        breakHour: [Date, Date],
        appToBeBlocked: [{
            name: String,
            link: String,
            time_limit: Number
        }]
    },
    sunday: {
        workingDay: Boolean,
        workingHour: [Date, Date],
        breakHour: [Date, Date],
        appToBeBlocked: [{
            name: String,
            link: String,
            time_limit: Number
        }]
    }
})

const userSchema = mongoose.Schema({
    name: String,
    
    days: daySchema

})

const User = mongoose.model('User', userSchema)

module.exports = User