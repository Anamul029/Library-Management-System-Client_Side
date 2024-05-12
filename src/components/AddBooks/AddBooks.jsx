
import axios from "axios";


const AddBooks = () => {
    
    const handleAdd = (e) => {
        e.preventDefault();
        const image = e.target.image.value;
        const bookname = e.target.bookname.value;
        const subcategory = e.target.subcategory.value;
        const description = e.target.description.value;
        const author = e.target.author.value;
        const rating = e.target.rating.value;
        const customization = e.target.customization.value;
        const processing_time = e.target.processing_time.value;
        const quantity = e.target.quantity.value;
        // const User_Email = e.target.User_Email.value;
        // const User_Name = e.target.User_Name.value;
      
       
        const information = { image, bookname, subcategory, description, author, rating, customization, processing_time, quantity }
        // console.log(information);

        axios.post('http://localhost:5000/books',information)
        .then(res=>{
            const data=res.data;
            console.log(data)
            if(data.insertedId){
                alert('book added successfully')
            }
        })

        // post data to the database
        // fetch('http://localhost:5000/bo',{
        //     method:'POST',
        //     headers:{
        //         'content-type':'application/json'
        //     },
        //     body:JSON.stringify(information)
        // })
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data)
        //     if(data.insertedId){
        //         alert('book added successfully')
        //     }
        // })
    }
    return (
        <div>
            <h2 className="text-2xl font-semibold text-blue-800 text-center my-5">Add Books item Here</h2>
            <form onSubmit={handleAdd} className="bg-lime-200 p-6 rounded-xl">
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
                        {/* <input type="text" placeholder="subcategory_Name" name="subcategory" className="input input-bordered" required /> */}
                    </div>
                    {/* input one */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-black">short description</span>
                        </label>
                        <input type="text" placeholder="short description" name="description" className="input input-bordered" required />
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
                    {/* input one */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-black">customization</span>
                        </label>
                        <select className="h-12" name="customization">
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        {/* <input type="text" placeholder="customization" name="customization" className="input input-bordered" required /> */}
                    </div>
                    {/* input one */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-black">processing_time</span>
                        </label>
                        <input type="text" placeholder="processing_time" name="processing_time" className="input input-bordered" required />
                    </div>
                    {/* input one */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-black">Quantity</span>
                        </label>
                        <input type="text" placeholder="quantity" name="quantity" className="input input-bordered" required />
                    </div>
                    {/* input one
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-black">User Email</span>
                        </label>
                        <input type="email" placeholder="User Email" name="User_Email" disabled defaultValue={user.email} className="input input-bordered" required />
                    </div>
                    input one
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-black">User Name</span>
                        </label>
                        <input type="text" placeholder="User name" name="User_Name" disabled defaultValue={user.displayName} className="input input-bordered" required />
                    </div> */}
                   
                </div>
                <button className="btn btn-primary bg-green-700 w-full my-4">Add to Craft</button>
            </form>
        </div>
    );
};

export default AddBooks;



