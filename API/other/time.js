const moment = require('moment');
const Ticket = require('../tables/Ticket.js');

module.exports.getListOfDate = () =>  {
    let dates = [];
    Ticket.list.forEach((values, keys) => {
        
            let ticket = Ticket.list.get(keys)
            let date = ticket.getDate();
            date = date.split(" ");
            date = date[0].split("/");
            let shortName = moment.monthsShort(date[1] - 1);
            let val = `${shortName}-${date[2]}`
            if(!dates.includes(val)){
                dates.push(val);
            }
    });
    let dateInOrder = [];
    let testeddateYear = 2019;
    let testeddateMonth = 1;
    while(dates.length !==  dateInOrder.length){
        let shortName = moment.monthsShort(testeddateMonth - 1);
        dates.forEach(element => {
            if(element ===  `${shortName}-${testeddateYear}`){
                dateInOrder.push(element);
            }
        });
        if(testeddateMonth < 12){
            testeddateMonth++;
        }else{
            testeddateMonth = 1;
            testeddateYear++;
        }
    }
    return dateInOrder;
}