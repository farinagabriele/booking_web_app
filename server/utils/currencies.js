const currency                = require('currency.js');


const currencies = () => {
    var currencies = {};
    
    currencies.EUR = value => currency(value, { separator: ".", decimal: ",", symbol: "€ ", formatWithSymbol: true })

    return currencies;
};

module.exports = currencies();