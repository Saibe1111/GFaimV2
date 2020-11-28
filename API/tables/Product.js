const Category = require('./Category.js');

class Product{

    /**
     * List of cached Products, mapped by CodeCli
     * @type {Map<string, Product>}
     */
    static list = new Map();

    /** 
     * @typedef ProductOptions
     * @property {number} Refprod
     * @property {number} CodeCateg
     * @property {string} NomProd
     * @property {number} NoFour
     * @property {number} NoSousCateg
     * @property {number} QteParUnit
     * @property {string} PrixUnit - En €
     * @property {number} UnitesStock
     * @property {number} UnitesCom - Unités commandées
     * @property {number} NiveauReap
     * @property {boolean} Indisponible
     */

    /**
     * @param {ProductOptions} params
     */
    constructor({ Refprod,  Nomprod, NoFour, CodeCateg, NoSousCateg, QteParUnit, PrixUnit, UnitesStock, UnitesCom, NiveauReap, Indisponible }) {

        this.getReference = () =>{
            return Refprod;
        }

        this.getCategory  = () => {
            if (Category.list.has(CodeCateg)) {
                return Category.list.get(CodeCateg)
            } else {
                throw 'This key does not exist ! '
            }
        }

        this.getName = () => {
            return Nomprod;
        }

        this.getSupplierNumber = () => {
            return NoFour;
        }

        this.getCodeSubCategory = () => {
            return NoSousCateg;
        }

        this.getQuantityPerUnit = () => {
            return QteParUnit;
        }

        this.getPricePerUnit = () => {
            return PrixUnit;
        }

        this.getUnitsStored = () => {
            return UnitesStock;
        }

        this.getUnitsOrdered = () => {
            return UnitesCom;
        }

        this.getReplenishmentLevel = () => {
            return NiveauReap;
        }

        this.getIndisponible = () => {
            return Indisponible;
        }
        if(Refprod != undefined){
            Product.list.set(this.getReference(), this);
        }
        
    }

    
}

module.exports = Product;