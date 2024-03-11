import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {

    return (
        <div className="Menu">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/meetings">Meetings</NavLink>
            <NavLink to="/add">Add</NavLink>
            
        </div>
    );
}

export default Menu;
