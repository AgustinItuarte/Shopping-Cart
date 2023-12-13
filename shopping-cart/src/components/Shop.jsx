/* async function GetData() {
    let response = await fetch('https://fakestoreapi.com/products')
    let data = await response.json();
    console.log(data);
} 

export default GetData(); */
import { Link } from "react-router-dom";

function Shop() {
    return(
        <div>
            <h1>Shop</h1>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/shop"}>Shop</Link></li>
                <li><Link to={"/shop"}>Cart</Link></li>
            </ul>
            <Link to={"/"}>Atras</Link>
        </div>
    )
}

export default Shop;