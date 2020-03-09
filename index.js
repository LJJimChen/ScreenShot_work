const screenshot = require('screenshot-desktop')
const schedule = require('node-schedule')
const fs = require('fs')
const moment = require('moment')
const path = require('path')

var rule = new schedule.RecurrenceRule();
rule.minute = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
console.log('waitting screen shot.')
var j = schedule.scheduleJob(rule, function () {
    //截图
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