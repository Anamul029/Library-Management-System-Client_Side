import { Link } from "react-router-dom";


const BookCard = ({info}) => {
    const { image, _id, stockStatus,author, customization, description, processing_time, rating, subcategory } = info;
    console.log(info)
    const handleDelete=(id)=>{
        console.log(id)
    }

    return (
        <div className="card card-compact md:h-[600px] w-auto bg-lime-200 shadow-xl">
            <figure><img className="md:h-[350px] h-60 w-52 p-4 rounded-xl md:w-[400px]" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="items-center mx-auto">
                    {/* <h2 className="card-title">Description:{description}</h2> */}
                    <h2 className="text-xl font-semibold">category:{subcategory}</h2>
                </div>

                <div className="flex justify-around my-3">
                    <h3 className="font-semibold">Author Name: <span>{author}</span></h3>
                    <h3 className="font-semibold">Status: <span>{stockStatus}</span></h3>
                </div>
                <div className="flex justify-around my-3">
                    <h3 className="font-semibold">Process time:{processing_time}</h3>
                    <h3 className="font-semibold">Customization:{customization}</h3>
                </div>
               
                <div className="flex justify-around">
                    <h3 className="font-semibold text-blue-900">Rating:{rating}</h3>
                    
                </div>
                <div className="card-actions justify-around">
                    {/* <button className="btn w-3/4 btn-primary"><Link to={`/details/${_id}`}>View Details</Link></button> */}
                    <button className="btn btn-primary bg-green-600"><Link to={`/update/${_id}`}>Update Data</Link></button>
                    <button onClick={() => handleDelete(_id)} className="btn btn-primary bg-red-600">Delete Data</button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;