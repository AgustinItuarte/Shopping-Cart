import { useEffect, useState } from "react";

const GetData = () => {
    const [items, setItems] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch("https://fakestoreapi.com/products", { mode: "cors" })
        .then((response) => {
          if (response.status >= 400) {
            throw new Error("server error");
          }
          return response.json();
        })
        .then((response) => setItems(response))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, []);

    return { items, error, loading }
}

const Shop = () => {

    const { items, error, loading } = GetData();
}

/* function Shop() {

    GetData().then((items) => console.log(items));
    return data.map(items => {

        return(
            <div>
                <h1>Shop</h1>
                <Link to={"/"}>Atras</Link>
            </div>
        )

    });
    
    
} */

/* function Shop() {
    return(
        <div>
            <h1>Shop</h1>
            <Link to={"/"}>Atras</Link>
        </div>
    )
} */

export default Shop;