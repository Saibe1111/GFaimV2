const LoyaltyCard = require('./LoyaltyCard.js');

class Ticket {

    /**
     * List of cached Tickets, mapped by NoTicket and CodeCli
     * @type {Map<string, Ticket>}
     */
    static list = new Map();

    /** 
     * @typedef TicketOptions
     * @property {number} NoTicket
     * @property {number} CodeCli
     * @property {string} Caissier
     * @property {Date} DateTicket
     */

    /**
     * @param {TicketOptions} params
     */
    constructor({ NoTicket, CodeCli, Caissier, DateTicket }) {

        this.getNumber = () => {
            return NoTicket;
        }

        this.getLoyaltyCard = () => {
            if (LoyaltyCard.list.has(CodeCli)) {
                return LoyaltyCard.list.get(CodeCli)
            } else {
                throw 'This key does not exist ! '
            }
        }

        this.getCashier = () => {
            return Caissier;
        }

        this.getDate = () => {
            return DateTicket;
        }
        if (NoTicket != undefined) {
            Ticket.list.set(this.getNumber(), this);
        }

    }
}
module.exports = Ticket;