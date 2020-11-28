const TicketDetail = require('../tables/TicketDetail.js');
const LoyaltyCard = require('../tables/LoyaltyCard.js');

module.exports.run = (app) => {
        app.get('/average-spend-customer', async (req, res) => {
            let datas = {}

            class Panier {
                static prixpannier = new Map();

                constructor(number, val, client) {
                    this.getNumber = () => {
                        return number;
                    }
                    this.getValue = () => {
                        return val;
                    }
                    this.getClient = () => {
                        return client;
                    }
                    Panier.prixpannier.set(number, this);
                }
            }

            let listCodeClient = [];

            TicketDetail.list.forEach((values, keys) => {
                try {
                    let t = TicketDetail.list.get(keys).getTicket();
                    if (Panier.prixpannier.has(t.getNumber())) {
                        let old = Panier.prixpannier.get(t.getNumber()).getValue();
                        let client = Panier.prixpannier.get(t.getNumber()).getClient();
                        Panier.prixpannier.delete(t.getNumber());
                        new Panier(t.getNumber(), (old + (1 - TicketDetail.list.get(keys).getDiscount().replace(',', '.')) * (TicketDetail.list.get(keys).getQuantity() * TicketDetail.list.get(keys).getPricePerUnit().replace('€', '').replace(',', '.'))), client)
                    } else {
                        let val = t.getLoyaltyCard().getCode();
                        if (!listCodeClient.includes(val)) {
                            listCodeClient.push(val);
                        }
                        new Panier(t.getNumber(), (1 - TicketDetail.list.get(keys).getDiscount().replace(',', '.')) * (TicketDetail.list.get(keys).getQuantity() * TicketDetail.list.get(keys).getPricePerUnit().replace('€', '').replace(',', '.')), val)
                    }
                } catch (e) {
                }
            });

            listCodeClient.sort();

            listCodeClient.forEach(element => {
                let nbr = 0;
                let somme = 0;
                Panier.prixpannier.forEach((values, keys) => {

                    if (Panier.prixpannier.get(keys).getClient() === element) {
                        somme = somme + Panier.prixpannier.get(keys).getValue();
                        nbr = nbr + 1;
                    }

                });
                if (nbr != 0) {
                    somme = somme / nbr;
                }
                
                datas[`${LoyaltyCard.list.get(element).getFirstName().replace(/\s/g, '')} ${LoyaltyCard.list.get(element).getLastName().replace(/\s/g, '')} (${element})`] = (Math.round(somme * 100) / 100);
                //LoyaltyCard.list.get(CodeCli)

            });


            let info = {
                name: "Panier moyen par client",
                data: {
                }
            }
            info.data = datas;
            res.json(info)

        });

}