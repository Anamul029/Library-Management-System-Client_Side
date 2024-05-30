import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    // console.log(user.photoURL)
    const navlinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
        {
            user && <>
                <li><NavLink to="/addBooks">Add Books</NavLink></li>
                <li><NavLink to="/allBooks">All Books</NavLink></li>
                <li><NavLink to="/borrow">Borrowed Books</NavLink></li>
            </>
        }
    </>
    // logout
    const handleLogOut = () => {
        logOut()
            .then(res => {
                console.log(res)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully LogOut",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
                    <img className="h-34 -ml-10 w-25" src="data:image/jpeg;base64,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" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <div className="flex gap-2 justify-center items-center">
                            <div className="flex flex-col justify-center items-center mt-3">
                                <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </div>
                                <h5 className="text-sm ml-3">{user.displayName}</h5>
                            </div>

                            <a onClick={handleLogOut} className="btn">LogOut</a>
                        </div>

                    </> :
                        <>
                            <a className="btn"><NavLink to="/login">Login</NavLink></a>
                        </>
                }

                {/* <a className="btn"><NavLink to="/login">Login</NavLink></a> */}

            </div>
        </div>
    );
};

export default NavBar;