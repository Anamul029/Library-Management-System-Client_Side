import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Details = () => {
    const {user}=useContext(AuthContext)
    const book = useLoaderData();
    const id = useParams()
    const ID = id._id;
    const info = book.find(info => info._id === ID)
    console.log(info)
    const { image, _id, stockStatus, quantity, author, customization, processing_time, rating, subcategory, bookname } = info;
    
    // add borrow book information to database
    
    return (

        <div className="card mt-12 lg:card-side w-4/5 container mx-auto bg-base-100 shadow-xl">
            <figure><img className="md:h-[500px] md:w-[400px]" src={image} alt="Album" /></figure>
            <div className="card-body">
                <div className="grid grid-cols-2 gap-6">
                    <h2 className="mt-4 text-xl"><span className="font-semibold text-blue-800">Book Name:</span>{bookname}</h2>
                    <h3 className="mt-4 text-xl"><span className="font-semibold text-blue-800">Author:</span>{author}</h3>
                    <h3 className="mt-4 text-xl"><span className="font-semibold text-blue-800">Category:</span>{subcategory}</h3>
                    <h3 className="mt-4 text-xl"><span className="font-semibold text-blue-800">Rating:</span>{rating}</h3>
                    <h3 className="mt-4 text-xl"><span className="font-semibold text-blue-800">Quantity:</span>{quantity}</h3>
                    <h3 className="mt-4 text-xl"><span className="font-semibold text-blue-800">Customization:</span>{customization}</h3>
                    <h3 className="mt-4 text-xl"><span className="font-semibold text-blue-800">Process Time:</span>{processing_time}</h3>
                    <h3 className="mt-4 text-xl"><span className="font-semibold text-blue-800">Stock Status:</span>{stockStatus}</h3>
                    {/* <h3><span className="font-semibold text-blue-800">Process Time:</span>{processing_time}</h3> */}
                    <p className="col-span-2 md:w-[400px] lg:w-[500px] mt-4 justify-center">Science fiction often serves as a lens through which authors explore contemporary societal issues in a speculative context. Themes such as ethics, politics, environmental concerns, and human rights are often addressed in these narratives, prompting readers to reflect on the implications of current trends and decisions.</p>
                </div>
                <div className="card-actions my-auto justify-end">
                    <button id="borrow" className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Borrow Book</button>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <form>
                                {/* input one */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold text-black">Return Date</span>
                                    </label>
                                    <input type="date" name="date" placeholder="return date" className="input input-bordered" required />
                                </div>
                                {/* input one */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold text-black">User Name</span>
                                    </label>
                                    <input type="text" placeholder=" User name" name="name" disabled className="input input-bordered" defaultValue={user.displayName} required />
                                </div>
                                {/* input one */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold text-black">User Email</span>
                                    </label>
                                    <input type="text" placeholder="Email" name="name" disabled className="input input-bordered" defaultValue={user.email} required />
                                </div>
                            </form>
                            <p className="py-4">Press ESC key or click the button below to close</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Submit</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>


    );
};

export default Details;