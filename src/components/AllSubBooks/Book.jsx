

const Book = ({book}) => {
    const { image, _id, stockStatus,author, customization, description, processing_time, rating, subcategory } = book;

    return (
        <div className="card card-side bg-base-100 shadow-xl">
        <figure><img className="w-4/5" src={image} alt="Movie"/></figure>
        <div className="card-body w-4/5">
          {/* <h2 className="">Category:{subcategory}</h2> */}
          <p><span className="text-blue-800 font-semibold">Description:</span>{description}</p>
          <p><span className="text-blue-800 font-semibold">Rating:</span>{rating}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    );
};

export default Book;