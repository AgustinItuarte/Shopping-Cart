import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

function Cart() {

    const [buyedItems, setBuyedItems] = useState([])
    console.log(buyedItems)

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));
        if(items) {
            setBuyedItems(items);
        }
    }, []);

    return (
        buyedItems.map(item => {

            return(
                <div key={uuidv4()} className="shop-item">
                    <p>{item.title}</p>
                    <button>Delete</button>
                </div>
            )
    
        })
    )
}

export default Cart;