const TicketDetail = require('../tables/TicketDetail.js');
const Time = require('../other/time.js');
const moment = require('moment');
const LoyaltyCard = require('../tables/LoyaltyCard.js');

module.exports.run = (app) => {
    app.get('/customer-spending-category/:id?', async (req, res) => {
        let id = req.params.id;

        switch (id) {
            case 'bio':
                res.json(getExpenseCategoryByClient(id))
                break;
            case 'casher':
                res.json(getExpenseCategoryByClient(id))
                break;
            case 'halal':
                res.json(getExpenseCategoryByClient(id))
                break;
            case 'vegan':
                res.json(getExpenseCategoryByClient(id))
                break;
            default:
                res.json(`You cannot make a query on ${id}`);
        }
    });

}



class shoppingClientMonth {

    static list = new Map();

    constructor(customer, date, price) {
        this.getCustomer = () => {
            return customer;
        }
        this.getDate = () => {
            return date;
        }
        this.getPrice = () => {
            return price;
        }
        shoppingClientMonth.list.set(`${customer}_${date}`, this);
    }
}


function getExpenseCategoryByClient(categorie) {
    setShoppingClient(categorie);
    let data = setupData(categorie);

    shoppingClientMonth.list.forEach((values, keys) => {
        shoppingClientMonth.list.delete(keys);
    });

    return data;

}

function setShoppingClient(categorie) {

    TicketDetail.list.forEach((values, keys) => {
        try {
            let isInCategorie = false;
            let args = TicketDetail.list.get(keys).getProduct().getName().toUpperCase().split(/[.,\/ -]/)
            args.forEach(arg => {
                if (arg === categorie.toUpperCase()) {
                    isInCategorie = true;
                }
            });

            if (isInCategorie) {

                let ticket = TicketDetail.list.get(keys).getTicket();
                let customer = ticket.getLoyaltyCard().getCode();
                let date = ticket.getDate();
                date = date.split(" ");
                date = date[0].split("/");
                let shortName = moment.monthsShort(date[1] - 1);
                let val = `${shortName}-${date[2]}`
                if (shoppingClientMonth.list.has(`${customer}_${val}`)) {
                    let shopping = shoppingClientMonth.list.get(`${customer}_${val}`)
                    customer = shopping.getCustomer();
                    let olddate = shopping.getDate();
                    let price = shopping.getPrice();
                    shoppingClientMonth.list.delete(`${customer}_${val}`);
                    let addprice = (1 - TicketDetail.list.get(keys).getDiscount().replace(',', '.')) * (TicketDetail.list.get(keys).getQuantity() * TicketDetail.list.get(keys).getPricePerUnit().replace('€', '').replace(',', '.'));
                    new shoppingClientMonth(customer, olddate, price + addprice);

                } else {
                    let price = (1 - TicketDetail.list.get(keys).getDiscount().replace(',', '.')) * (TicketDetail.list.get(keys).getQuantity() * TicketDetail.list.get(keys).getPricePerUnit().replace('€', '').replace(',', '.'));
                    new shoppingClientMonth(customer, val, price);

                }
            }
        } catch (e) {

        }


    });

}

function setupData(categorie) {

    let datas = [];

    let customerList = [];
    customerList = getCustomerCategory(categorie);



    Time.getListOfDate().forEach(time => {

        let customerListTime = customerList;

        let data = {};

        customerListTime.forEach(customer => {
            if (shoppingClientMonth.list.has(`${customer}_${time}`)) {
                let spend = shoppingClientMonth.list.get(`${customer}_${time}`).getPrice();
                let client = shoppingClientMonth.list.get(`${customer}_${time}`).getCustomer();
                data[`${LoyaltyCard.list.get(client).getFirstName().replace(/\s/g, '')} ${LoyaltyCard.list.get(client).getLastName().replace(/\s/g, '')} (${client})`] = (Math.round(spend * 100) / 100);
            }
        });

        let info = {
            name: `${time}`,
            data
        }
        datas.push(info);

    });

    return datas;

}

function getCustomerCategory(categorie) {

    let customerList = [];

    TicketDetail.list.forEach((values, keys) => {
        try {

            let isInCategorie = false;
            let args = TicketDetail.list.get(keys).getProduct().getName().toUpperCase().split(/[.,\/ -]/)
            args.forEach(arg => {
                if (arg === categorie.toUpperCase()) {
                    isInCategorie = true;
                }
            });

            if (isInCategorie) {
                let code = TicketDetail.list
                    .get(keys)
                    .getTicket()
                    .getLoyaltyCard()
                    .getCode()
                if (!customerList.includes(code)) {
                    customerList.push(code);
                }
            }
        } catch (e) {

        }
    });

    customerList.sort()
    return customerList;
}