const moment = require('moment');
const TicketDetail = require('../tables/TicketDetail.js');
const Time = require('../other/time.js');

module.exports.run = (app) => {
        app.get('/turnover', async (req, res) => {

            let datas = {}

            let times = Time.getListOfDate();

            times.forEach(time => {
                datas[time] = 0
            });

            
            TicketDetail.list.forEach((values, keys) => {
                try {
                    let t = TicketDetail.list.get(keys).getTicket();
                    let date = t.getDate();
                    let dates = date.split(" ");
                    let dateParts = dates[0].split("/");
                    let shortName = moment.monthsShort(dateParts[1] - 1);
                    let val = `${shortName}-${dateParts[2]}`

                    let ticket = TicketDetail.list.get(keys);
                    if (val in datas) {
                        datas[val] = datas[val] + ((1 - TicketDetail.list.get(keys).getDiscount().replace(',', '.')) * (ticket.getPricePerUnit().replace('€', '').replace(',', '.') * ticket.getQuantity()));
                    }
                } catch (e) {  
                }

            });

            times.forEach(time => {
                datas[time] = (Math.round(datas[time] * 100) /100)
            });

            let info = {
                name: "Chiffre d’affaire",
                data: {
                }
            }
            info.data = datas;
            res.json(info)

        });
    
}