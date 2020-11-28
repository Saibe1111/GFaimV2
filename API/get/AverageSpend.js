const moment = require('moment');
const TicketDetail = require('../tables/TicketDetail.js');
const Time = require('../other/time.js');

module.exports.run = (app) => {
        app.get('/average-spend', async (req, res) => {
            let datas = {}


            class Panier {
                static prixpannier = new Map();

                constructor(number, val, date) {
                    this.getNumber = () => {
                        return number;
                    }
                    this.getValue = () => {
                        return val;
                    }
                    this.getDate = () => {
                        return date;
                    }
                    Panier.prixpannier.set(number, this);
                }
            }

            TicketDetail.list.forEach((values, keys) => {
                try {
                    let t = TicketDetail.list.get(keys).getTicket();
                    if (Panier.prixpannier.has(t.getNumber())) {
                        let old = Panier.prixpannier.get(t.getNumber()).getValue();
                        let date = Panier.prixpannier.get(t.getNumber()).getDate();
                        Panier.prixpannier.delete(t.getNumber());
                        new Panier(t.getNumber(), old + ((1 - TicketDetail.list.get(keys).getDiscount().replace(',', '.')) * (TicketDetail.list.get(keys).getQuantity() * TicketDetail.list.get(keys).getPricePerUnit().replace('€', '').replace(',', '.'))), date)
                    } else {
                        let date = t.getDate();
                        let dates = date.split(" ");
                        let dateParts = dates[0].split("/");
                        let shortName = moment.monthsShort(dateParts[1] - 1);
                        let val = `${shortName}-${dateParts[2]}`
                        new Panier(t.getNumber(), ((1 - TicketDetail.list.get(keys).getDiscount().replace(',', '.')) * (TicketDetail.list.get(keys).getQuantity() * TicketDetail.list.get(keys).getPricePerUnit().replace('€', '').replace(',', '.'))), val)
                    }
                } catch (e) {
                }
            });


            let times = Time.getListOfDate();

            times.forEach(time => {
                let nbr = 0;
                let somme = 0;
                Panier.prixpannier.forEach((values, keys) => {
                    if (Panier.prixpannier.get(keys).getDate() === time) {
                        somme = somme + Panier.prixpannier.get(keys).getValue();
                        nbr = nbr + 1;
                    }
                });
                if(nbr != 0){
                    somme = somme / nbr;
                }
                datas[time] = (Math.round(somme * 100) /100)
            });

            let info = {
                name: "Panier moyen",
                data: {
                }
            }
            info.data = datas;
            res.json(info)

        });
    

}