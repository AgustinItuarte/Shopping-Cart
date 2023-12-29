import { useState, useEffect } from "react";
import AddItem from "./AddItem";
/* import { v4 as uuidv4 } from 'uuid'; */

function Cart() {

    const [buyedItems, setBuyedItems] = useState([])

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));
        if(items) {
            setBuyedItems(items);
        }
    }, []);

    return (
        buyedItems.map(item => {

            return(
                <div key={item.id} className="shop-item">
                    <p>{item.title}</p>
                    <p>Amount: </p>
                    <p>Price: </p>
                    <button>Delete</button>
                    <button onClick={() => AddItem(item, buyedItems)}>+</button>
                </div>
            )
    
        })
    )
}

export default Cart;