import { Link } from "react-router-dom";

function Home() {
    return(
        <div>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/shop"}>Shop</Link></li>
                <li><Link to={"/shop"}>Cart</Link></li>
            </ul>            
        </div>
    )
}

export default Home;