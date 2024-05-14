// import axios from "axios";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";



const UpdateAllBook = () => {
    const id = useParams();
    const ID = id._id;
    console.log(ID)
    // console.log(ID)
    const handleUpdateData = (e) => {
        e.preventDefault()
        // console.log(ID)
        const image = e.target.image.value;
        const bookname = e.target.bookname.value;
        const subcategory = e.target.subcategory.value;
        const author = e.target.author.value;
        const rating = e.target.rating.value;
        // console.log(image, bookname,subcategory, author,rating);
        const info = { image, bookname, subcategory, author, rating }
        console.log(info)
        // update data 
        axios.put(`http://localhost:5000/books/${ID}`, info)
            .then(res => {
                const data = res.data;
                console.log(data)
                if (data.modifiedCount>0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Successfully Data Update",
                        showConfirmButton: false,
                        timer: 1500

                    });
                }
            })

    }

    return (
        <div>
            <form onSubmit={handleUpdateData}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* input one */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-black">Image URL</span>
                        </label>
                        <input type="text" name="image" placeholder="image url" className="input input-bordered" required />
                    </div>
                    {/* input one */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-black">Book Name</span>
                        </label>
                        <input type="text" placeholder="book name" name="bookname" className="input input-bordered" required />
                    </div>
                    {/* input one */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-black">Category_Name</span>
                        </label>
                        <select className="h-12" name="subcategory">
                            <option value=" Science Fiction"> Science Fiction</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Fantasy">Fantasy</option>
                            <option value="Sports">Sports</option>
                        </select>
                    </div>
                    {/* input one */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-black">Author Name</span>
                        </label>
                        <input type="text" placeholder="author name" name="author" className="input input-bordered" required />
                    </div>
                    {/* input one */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-black">rating</span>
                        </label>
                        <input type="text" placeholder="rating" name="rating" className="input input-bordered" required />
                    </div>
                </div>
                <input className="btn btn-primary bg-green-700 w-full my-4" type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateAllBook;
