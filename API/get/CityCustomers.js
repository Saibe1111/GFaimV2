const LoyaltyCard = require('../tables/LoyaltyCard.js');

module.exports.run = (app) => {
    app.get('/city-customers', async (req, res) => {
        
        let city = getCity();
        let data = initData(city);
        res.json(addData(data));
    });
}

function getCity() {

    let city = [];

        LoyaltyCard.list.forEach((values, keys) => {

            let customerCity = LoyaltyCard.list.get(keys).getCity().replace(/ /g,'');

            if (!city.includes(customerCity)) {
                city.push(customerCity);
            }

        });

    city.sort();

    return city
}

function initData(listOfCity){

    let data = [];

    listOfCity.forEach(city => {
        data.push([city, 0]);
    });

    return data;

}

function addData(data){

    LoyaltyCard.list.forEach((values, keys) => {
        let customerCity = LoyaltyCard.list.get(keys).getCity().replace(/ /g,'');
        data.forEach(tab => {
            if(tab[0] === customerCity){
                ++tab[1];
            }
        });

    });

    return data;

}