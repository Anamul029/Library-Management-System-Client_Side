import { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
// import { updateProfile } from "firebase/auth";

// onSubmit={handleRegister}
const Register = () => {
    const { createUser } = useContext(AuthContext)
    const location=useLocation();
    const navigate=useNavigate();
    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        // const info = { name, email, photo, password }
        // console.log(info)
        let passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).+$/

          if(!passwordRegex.test(password)){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!Please provide a uppercase & a special charecter in your password.",
                
              });
            return;
        }
        // registration system
        createUser(email, password)
            .then(res => {
                const result=res.user;
                // console.log(result)
                navigate(location?.state?location?.state:'/')
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully registration complete",
                    showConfirmButton: false,
                    timer: 1500

                });
                // update profile
                updateProfile(result, {
                    displayName: name,
                    photoURL: photo,
                })

            })
            .catch(error => {
                console.log(error)
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!Please valid information.",
                    
                  });
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input type="text" name="photo" placeholder="photoURL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <p className="text-center">Already have an account?please <NavLink to="/login"><span className="font-bold text-green-700 border-b-4">Login</span></NavLink></p>
                </form>

            </div>

        </div>
    );
};

export default Register;