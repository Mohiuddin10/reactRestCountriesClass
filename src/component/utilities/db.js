// to store data in localStorage 
const addtoLS = id => {
    let countryCart = {};

    // get the country cart 
    const countryCartCheck = localStorage.getItem('country-cart');
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

export {addtoLS}