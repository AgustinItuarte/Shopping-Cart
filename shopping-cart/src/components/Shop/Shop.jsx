import GetData from "./GetData";
import { useState, useEffect } from "react";

const Shop = () => {

    const [buyedItems, setBuyedItems] = useState([])
    const { items, error, loading } = GetData ();
     
    useEffect(() => {
        if (buyedItems.length > 0) {
            localStorage.setItem('items', JSON.stringify(buyedItems));
        }
    }, [buyedItems]);

    const buyItem = (item) => {

        const itemsCart = JSON.parse(localStorage.getItem('items'));
        if (itemsCart) {
            setBuyedItems(itemsCart);
            setBuyedItems(current => [...current, item]);
        } else {
            setBuyedItems(current => [...current, item]);
        }       
        
    }

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading the page</div>;

    return (
        items.map(item => {

            return(
                <div key={item.id} className="shop-item">
                    <p>Name</p>
                    <button onClick={() => buyItem(item)}>Add to cart</button>
                </div>
            )
    
        })
    )

}

export default Shop;