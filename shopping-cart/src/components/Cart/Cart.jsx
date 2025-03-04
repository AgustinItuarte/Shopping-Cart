import { useState, useEffect } from "react";
import DeleteItem from '../Cart/DeleteItem.jsx';
import PriceHandler from '../Cart/PriceHandler.jsx';

function Cart() { // Handles functionality of the cart page.

    const [buyedItems, setBuyedItems] = useState([])
    const [totalPrice, setTotalPrice] = useState()
    
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));

        if (items) {
            if (items.length !== buyedItems.length) {
                setBuyedItems(items);
            }
        }

        setTotalPrice(PriceHandler(buyedItems))
                
    }, [buyedItems], console.log(buyedItems));

    const handleAddDeleteButtons = (item, itemList, event) => { // Handles add and delete item buttons functionality.

        for (let i = 0; i < itemList.length; i++) {
    
            if (item.ammount >= 0 && itemList[i].id === item.id) {
                
                if (event.target.className === 'additem-btn') {
                    item.ammount++;
                } else {
                    item.ammount--;
                }
                
                const array = [...itemList];
                localStorage.setItem('items', JSON.stringify(itemList));
                setBuyedItems(array)
                setTotalPrice(PriceHandler(array))

            };

            if (!(item.ammount) && itemList[i].id === item.id) {
                
                const array = [...itemList];
                
                if (item.ammount <= 0) {
                    itemList.splice([i], 1)
                    localStorage.setItem('items', JSON.stringify(itemList));
                    setBuyedItems(array)
                    setTotalPrice(PriceHandler(array))
                    return
                }
               
                itemList[i].ammount = 1;
                localStorage.setItem('items', JSON.stringify(itemList));
                setBuyedItems(array)
                setTotalPrice(PriceHandler(array))

            };
        }   
    
    }

    const inputHandler = (item, event) => {

        const array = [...buyedItems];
        item.ammount = event.target.value;
        DeleteItem(item, array);
        localStorage.setItem('items', JSON.stringify(array));
        setBuyedItems(array)
        setTotalPrice(PriceHandler(array));
        
    }

        return (
            <div className="cart-container">
                <div className="subtotal"><h1>Cart</h1></div>
                <ul className="cart-items">
                    {buyedItems.map(item => {
                        return(
                            <li key={item.id} className="shop-item">
                                <div>
                                    <img className="img-all" src={item.image} alt=""/>
                                </div>
                                <div className="item-title">
                                    <p>{item.title}</p>
                                </div>
                                <p>Price: ${item.price}</p>
                                <button className="additem-btn" onClick={(event) => {handleAddDeleteButtons(item, buyedItems, event)}}>+</button>
                                <input type="number" value={item.ammount} onChange={(event) => {inputHandler(item, event)}}/>
                                <button className="delete-btn" onClick={(event) => {handleAddDeleteButtons(item, buyedItems, event)}}>Delete</button>
                            </li>
                        )
                    })}
                </ul>
                <div className="subtotal"><p>Subtotal: ${totalPrice}</p></div>
                <button onClick={() => {alert('Se ha realizado el pedido')}}>Comprar</button>
            </div>    
        )
}


export default Cart;