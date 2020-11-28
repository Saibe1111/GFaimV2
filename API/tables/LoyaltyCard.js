class LoyaltyCard{

    /**
     * List of cached LoyaltyCards, mapped by CodeCli
     * @type {Map<string, LoyaltyCard>}
     */
    static list = new Map();

    /** 
     * @typedef LoyaltyCardOptions
     * @property {number} CodeCli
     * @property {string} Nom
     * @property {string} Prenom
     * @property {string} DateNaiss
     * @property {string} Adresse
     * @property {string} Ville
     * @property {string} CodePostal
     * @property {string} Pays
     * @property {string} Tel
     */

    /**
     * @param {LoyaltyCardOptions} params
     */
    constructor({ CodeCli, Nom, Prenom, DateNaiss, Adresse, Ville, CodePostal, Pays, Tel }) {

        this.getCode = () =>{
            return CodeCli;
        }

        this.getLastName  = () => {
            return Nom;
        }

        this.getFirstName = () => {
            return Prenom;
        }

        this.getDateOfBirth = () => {
            return DateNaiss;
        }

        this.getAddress = () => {
            return Adresse;
        }

        this.getCity = () => {
            return Ville;
        }

        this.getZipCode = () => {
            return CodePostal;
        }

        this.getCountry = () => {
            return Pays;
        }

        this.getPhoneNumber = () => {
            return Tel;
        }
        if (CodeCli != undefined) {
            LoyaltyCard.list.set(this.getCode(), this);
        }

    }

}

module.exports = LoyaltyCard;