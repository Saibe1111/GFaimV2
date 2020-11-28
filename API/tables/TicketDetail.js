const Ticket = require('./Ticket.js');
const Product = require('./Product.js');

class TicketDetail {

    /**
     * List of cached TicketDetails, mapped by NoTicket and Refprod
     * @type {Map<string, TicketDetail>}
     */
    static list = new Map();

    /** 
     * @typedef TicketDetailOptions
     * @property {number} NoTicket
     * @property {string} Refprod
     * @property {string} PrixUnit
     * @property {number} Qte - Quantité
     * @property {number} Remise - Remise (%)
     */

    /**
     * @param {TicketDetailOptions} params
     */
    constructor({ NoTicket, Refprod, PrixUnit, Qte, ['Remise%']: Remise }) {

        this.getTicket = () => {
            if (Ticket.list.has(NoTicket)) {
                return Ticket.list.get(NoTicket);
            } else {
                throw 'This key does not exist ! '
            }
        }

        this.getProduct = () => {
            if (Product.list.has(Refprod)) {
                return Product.list.get(Refprod);
            } else {
                throw 'This key does not exist ! '
            }
        }

        this.getPricePerUnit = () => {
            return PrixUnit;
        }

        this.getQuantity = () => {
            return Qte;
        }

        this.getDiscount = () => {
            return Remise;
        }
        if (NoTicket + Refprod != undefined) {
            TicketDetail.list.set(NoTicket + Refprod, this);
        }

    }
}

module.exports = TicketDetail;