import { NavLink } from "react-router-dom";

const Nav = () => {

    const navLink = <>
        <NavLink to={``} type="button" className={({ isActive }) => isActive ? `px-8 py-3 font-semibold border-2 rounded border-vibe-primary` : `px-8 py-3 font-semibold border-2 rounded`}>Home</NavLink>
        <NavLink to={'ListedBook'} type="button" className={({ isActive }) => isActive ? `px-8 py-3 font-semibold border-2 rounded border-vibe-primary` : `px-8 py-3 font-semibold border-2 rounded`}>Listed Books</NavLink>
        <NavLink to={'PagesToRead'} type="button" className={({ isActive }) => isActive ? `px-8 py-3 font-semibold border-2 rounded border-vibe-primary` : `px-8 py-3 font-semibold border-2 rounded`}>Pages to Read</NavLink>

    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Book Vide</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-vibe-btn-primary text-white">Sign In</a>
                <a className="btn bg-vibe-btn-secondary text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default Nav;