const addToLS = id => {
    let countryCart = {};
    const checkCountry = localStorage.getItem('country-cart');

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

    localStorage.setItem('country-cart', JSON.stringify(countryCart))

}

const removeCountry = id => {

    
}

export {addToLS, removeCountry}