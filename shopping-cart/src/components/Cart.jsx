/* async function GetData() {
    let response = await fetch('https://fakestoreapi.com/products')
    let data = await response.json();
    console.log(data);
} 

export default GetData(); */
import { Link } from "react-router-dom";

function Cart() {
    return(
        <div>
            <h1>Cart</h1>
            <Link to={"/"}>Atras</Link>
        </div>
    )
}

export default Cart;