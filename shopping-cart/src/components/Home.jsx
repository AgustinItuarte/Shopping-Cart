import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Shop from "./Shop";

/* const Home = () => {

    const {name} = useParams();

    return(
        <div>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/shop"}>Shop</Link></li>
                <li><Link to={"/cart"}>Cart</Link></li>
            </ul>

            {name === "shop" ? (
                <Shop/>
            ): name === "cart" ?(
                <h1>Cart</h1>
            ) : (
                <h1>Default Profile</h1>
            )}    
        </div>
    )
} */

function Home() {
    return(
        <div>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/shop"}>Shop</Link></li>
                <li><Link to={"/cart"}>Cart</Link></li>
            </ul>
            <Outlet/>
        </div>
    )
}

export default Home;