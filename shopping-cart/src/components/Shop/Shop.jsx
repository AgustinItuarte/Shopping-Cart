import { useEffect, useState } from "react";
import GetData from "./GetData";


const Shop = () => {

    const { items, error, loading } = GetData ();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading the page</div>;

    return (
        items.map(item => {

            return(
                <div key={item.id} className="shop-item">
                    <p>Name</p>
                    <button>Add to cart</button>
                </div>
            )
    
        })
    )
}

export default Shop;