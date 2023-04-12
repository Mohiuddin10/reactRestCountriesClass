// to store data in localStorage 
const addtoLS = id => {
    const quantity = localStorage.getItem(id);
    if (quantity) {
        console.log('already added to localStorage')
        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem(id, newQuantity);
    }
    else {
        console.log('first item');
        localStorage.setItem(id, 1)
    }
    
}

export {addtoLS}