import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

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
                </div>
            )
    
        })
    )
}

export default Cart;