import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Home() {
    return(
        <div className="container">
            <ul className="side-bar">
                <li><Link to={"/"}>H O M E</Link></li>
                <li><Link to={"/shop"}>S H O P</Link></li>
                <li><Link to={"/cart"}>C A R T</Link></li>
            </ul>
            <div className="content"><Outlet/></div>
        </div>
    )
}

export default Home;