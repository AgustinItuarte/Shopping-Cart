import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Home() {
    return(
        <div className="container">
            <ul className="side-bar">
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/shop"}>Shop</Link></li>
                <li><Link to={"/cart"}>Cart</Link></li>
            </ul>
            <div className="content"><Outlet/></div>
        </div>
    )
}

export default Home;