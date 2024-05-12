

const CaregoryBookCard = ({ book }) => {
    const { _id, category_name, image_url } = book;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className="md:w-[400px] md:h-[250px]" src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title mx-auto">Categorty:{category_name}</h2>
               
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default CaregoryBookCard;