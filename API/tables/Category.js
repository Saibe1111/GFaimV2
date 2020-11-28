class Category {

    /**
     * List of cached Categories, mapped by CodeCateg
     * @type {Map<string, Category>}
     */
    static list = new Map();

    /** 
     * @typedef CategoryOptions
     * @property {number} CodeCateg
     * @property {string} NomCateg
     * @property {string} Description
     */

    /**
     * @param {CategoryOptions} params
     */
    constructor({ CodeCateg, NomCateg, Description }) {

        this.getCode = () => {
            return CodeCateg;
        }

        this.getName = () => {
            return NomCateg;
        }

        this.getFirstName = () => {
            return Description;
        }
        if (CodeCateg != undefined) {
            Category.list.set(this.getCode(), this);
        }

    }

}

module.exports = Category;