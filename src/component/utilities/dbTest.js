const addToLS = id => {
    let countryCart = {};

    const countryCartCheck = localStorage.getItem('country-cart');
    if (countryCartCheck) {
        countryCart = JSON.parse(countryCartCheck)
    }
    else {
        countryCart = {};
    }

    let qunt = countryCart[id]
    if (qunt) {
        let newQunt = qunt + 1;
        countryCart[id] = newQunt;
    }
    else {
        countryCart[id] = 1;
    }
    localStorage.setItem('country-cart', JSON.stringify(countryCart))

}

const removeCountry = id => {
    let countryCart = {};
    const checkCountry = localStorage.getItem('country-cart');
    if (checkCountry) {
        countryCart = JSON.parse(checkCountry);
    }
    let qunt = countryCart[id];
    if (qunt) {
        let newQuent = qunt - 1;
        countryCart[id] = newQuent;
    }
    localStorage.setItem('country-cart', JSON.stringify(countryCart));
}

export {addToLS, removeCountry}