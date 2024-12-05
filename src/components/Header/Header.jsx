import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className=" ">
            <NavLink  to="/">Home</NavLink>
            <NavLink className="mx-8" to="/login">Login</NavLink>
        </div>
    );
};

export default Header;