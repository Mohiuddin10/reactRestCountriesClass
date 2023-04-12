// to store data in localStorage 
const addtoLS = id => {
    let countryCart = {};

    // get the country cart 
    let countryCartCheck = localStorage.getItem('country-cart');
    if (countryCartCheck){
        console.log(countryCartCheck);
        countryCart = JSON.parse(countryCartCheck);
    }
    else {
        countryCartCheck = {};
    }
    const quantity = countryCart[id];
    if (quantity) {
        console.log('already added to localStorage')
        const newQuantity = quantity + 1;
        countryCart[id] = newQuantity;
    }
    else {
        console.log('first item');
       countryCart[id] = 1;
    }

    localStorage.setItem('country-cart', JSON.stringify(countryCart));
    
}


const removeCountryCart = id => {
    let countrycart = {};
    let checkCountry = localStorage.getItem('country-cart');
    if (checkCountry) {
        countrycart = JSON.parse(checkCountry); 
    }
    let quantity = countrycart[id];
    if (quantity) {
        let newQunt = quantity - 1;
        countrycart[id] = newQunt;
    } 
    localStorage.setItem('country-cart', JSON.stringify(countrycart));
    
};

export {addtoLS, removeCountryCart}




// remove story 
// let countryCart = {};
//     let countryCartCheck = localStorage.getItem('country-cart');
//     if (countryCartCheck){
//         countryCart = JSON.parse(countryCartCheck);
//     }
//     const quantity = countryCart[id];
//     if (quantity) {
//         console.log('already added to localStorage')
//         const newQuantity = quantity - 1;
//         countryCart[id] = newQuantity;
//     }
//     else {
//         console.log('Not added');
       
//     }
//     localStorage.setItem('country-cart', JSON.stringify(countryCart));