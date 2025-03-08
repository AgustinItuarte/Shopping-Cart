const PriceHandler = (buyeditems) => { // Handles the price of the items added to the cart.

    let total_price = 0;

    buyeditems.forEach(element => {
        
        if(element.ammount > 1) {
            total_price = total_price + element.price * element.ammount
        } else {
            total_price = total_price + element.price
        }
                
    });

    return total_price;
}

export default PriceHandler;