const LoyaltyCard = require('../tables/LoyaltyCard.js');
const moment = require('moment');

module.exports.run = (app) => {
    app.get('/age-customers', async (req, res) => {

        let ages = [['0-18', 0], ['18-25', 0], ['25-34', 0], ['35-50', 0], ['50-59', 0], ['60 +', 0]];

        LoyaltyCard.list.forEach((values, keys) => {

            let dateOfBirth = LoyaltyCard.list.get(keys).getDateOfBirth();
            dateOfBirth = dateOfBirth.split(" ");
            dateOfBirth = dateOfBirth[0].split("/");
            let today = moment(new Date());
            let birth = moment(new Date(`${dateOfBirth[1]}/${dateOfBirth[0]}/${dateOfBirth[2]}`));
            let ageCustomer = today.diff(birth, 'years');

            if (ageCustomer <= 18) {
                ages[0][1] = ages[0][1] + 1;
            } else if (ageCustomer <= 25) {
                ages[1][1] = ages[1][1] + 1;
            } else if (ageCustomer <= 35) {
                ages[2][1] = ages[2][1] + 1;
            } else if (ageCustomer <= 50) {
                ages[3][1] = ages[3][1] + 1;
            } else {
                ages[4][1] = ages[4][1] + 1;
            }


        });


        res.json(ages);

    });
}