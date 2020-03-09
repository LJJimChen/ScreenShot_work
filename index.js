const screenshot = require('screenshot-desktop')
const schedule = require('node-schedule')
const fs = require('fs')
const moment = require('moment')
const path = require('path')

var rule = new schedule.RecurrenceRule();
rule.minute = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]; //take screen shot each 5 min
console.log('waiting screen shot.')
var j = schedule.scheduleJob(rule, function () {
    //take a screen shot
    screenshot().then(
        (img) => {
            var p = path.join(__dirname, moment().format('YYYYMMDD-HHmmss.jpg'))
            fs.writeFile(p, img, function (err) {
                if (err) {
                    throw err
                }
            })
            console.log('screenshot success to ' + p)
        }
    )
});