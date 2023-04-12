// to store data in localStorage 
const addtoLS = id => {
    const quantity = localStorage.getItem(id);
    quantity? console.log('already added') : console.log('first item')
    localStorage.setItem(id, 1)
}

export {addtoLS}