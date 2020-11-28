const Time = require('../other/time.js');
const Ticket = require('../tables/Ticket.js');
const moment = require('moment');
const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

module.exports.run = (app) => {
    app.get('/ticket-days', async (req, res) => {

        let datas = getDatas();

        res.json(datas)

    });
}

function getDatas() {

    let datas = [];



    days.forEach(day => {

        let result = ticketBydays(day);
        
        let info = {
            name: day,
            data: result
        }

        datas.push(info);

    });

    return datas;

}

function TicketByDate() {
    let Tickets = []

    Ticket.list.forEach((values, keys) => {

        let currentTicket = Ticket.list.get(keys).getDate().split(" ");

        let exist = false;
        Tickets.forEach(t => {
            if (t.includes(currentTicket[0])) {
                exist = true;
            }
        });

        if (!exist) {
            Tickets.push([currentTicket[0], 1]);
        } else {
            Tickets.forEach(t => {
                if (t.includes(currentTicket[0])) {
                    t[1]++;
                }
            });
        }

    });

    return Tickets;

}

function ticketBydays(daySearch) {

    let tickets = TicketByDate();
    let result = {}


    Time.getListOfDate().forEach(datelist => {

        tickets.forEach(t => {

            let date = t[0].split("/");
            let shortName = moment.monthsShort(date[1] - 1);
            let val = `${shortName}-${date[2]}`
            if (datelist === val) {

                let month = date[1];
                let year = date[2];
                let day = date[0];

                let dayOfWeek = (Math.trunc((23 * month) / 9) + day + 2 + year + Math.trunc(year / 4) + Math.trunc(year / 100) + Math.trunc(year / 400)) % 7;

                let day2 = null;

                switch (dayOfWeek) {
                    case 0:
                        day2 = 'Dimanche';
                        break;
                    case 1:
                        day2 = 'Lundi';
                        break;
                    case 2:
                        day2 = 'Mardi';
                        break;
                    case 3:
                        day2 = 'Mercredi';
                        break;
                    case 4:
                        day2 = 'Jeudi';
                        break;
                    case 5:
                        day2 = 'Vendredi';
                        break;
                    case 6:
                        day2 = 'Samedi';
                        break;
                }
                if(daySearch === day2){ 
                    if (val in result) {
                        result[val] = result[val] + t[1];
                    }else{
                        result[val] = t[1];
                    }
                }


            }

        });

    });

    return result;

}      