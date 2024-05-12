import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const NavBar = () => {
    const{user,logOut}=useContext(AuthContext)
    const navlinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
        {
            user&&<>
             <li><NavLink to="/addBooks">Add Books</NavLink></li>
             <li><NavLink to="/allBooks">All Books</NavLink></li>
             <li><NavLink to="/borrow">Borrowed Books</NavLink></li>
            </>
        }
    </>
    // logout
    const handleLogOut=()=>{
        logOut()
        .then(res=>{
            console.log(res)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Successfully LogOut",
                showConfirmButton: false,
                timer: 1500
            });
        })
        .catch(error=>{
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
                <a className="btn btn-ghost text-sm -ml-6 md:text-2xl md:ml-0 text-blue-900">Library Management</a>
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
                            {/* <h5 className="text-sm ml-3">{user.displayName}</h5> */}
                            <div className="avatar">
                                <div className="w-12 rounded-full">
                                    <img src={user.photoURL}/>
                                </div>
                            </div>
                            <a onClick={handleLogOut} className="btn">LogOut</a>
                        </div>

                    </> :
                        <>
                             <a  className="btn"><NavLink to="/login">Login</NavLink></a>
                        </>
                }

                {/* <a className="btn"><NavLink to="/login">Login</NavLink></a> */}

            </div>
        </div>
    );
};

export default NavBar;