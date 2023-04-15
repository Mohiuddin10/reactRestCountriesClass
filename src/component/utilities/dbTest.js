const addToLS = id => {
    let countryCart = {};
    let checkCountry = localStorage.getItem('country-cart');

    if (checkCountry) {
        countryCart = JSON.parse(checkCountry);
    }
    else {
        checkCountry = {};
    }

    let amount = countryCart[id];
    if (amount) {
        let newAmount = amount + 1;
        countryCart[id] = newAmount;
    }
    else {
        countryCart[id] = 1;
    }

    localStorage.setItem('country-cart', JSON.stringify(countryCart));

}

const removeCountry = id => {
    let countryCart = {};
    let checkCountry = localStorage.getItem('country-cart');
    if (checkCountry) {
        countryCart = JSON.parse(checkCountry);
    }
    

    let amount = countryCart[id];
    if (amount) {
        let newAmount = amount - 1;
        countryCart[id] = newAmount;
    }
    
    localStorage.setItem('country-cart', JSON.stringify(countryCart));
    
}

const removeAll = id => {
    localStorage.removeItem('country-cart');

}

export {addToLS, removeCountry, removeAll}