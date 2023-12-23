import GetData from "./GetData";
import { useState } from "react";

const Shop = () => {

    const [buyedItems, setBuyedItems] = useState([])
    const { items, error, loading } = GetData ();
    console.log(buyedItems)

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading the page</div>;

    return (
        items.map(item => {

            return(
                <div key={item.id} className="shop-item">
                    <p>Name</p>
                    <button onClick={() => setBuyedItems(item)}>Add to cart</button>
                </div>
            )
    
        })
    )
}

export default Shop;