import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function GetData() {

    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((response) => setItems(response));
        
    }, []);

    if(items != null) {
        return items;
    }
    
}

function Shop() {

    const data = GetData();
    console.log(data)
    /* return data.map(items => {

        return(
            <div>
                <h1>Shop</h1>
                <Link to={"/"}>Atras</Link>
            </div>
        )

    }); */
    
    
}

/* function Shop() {
    return(
        <div>
            <h1>Shop</h1>
            <Link to={"/"}>Atras</Link>
        </div>
    )
} */

export default Shop;