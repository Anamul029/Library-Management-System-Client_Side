

const BorrowBookCard = ({data}) => {
    // console.log(data)
    const{bookname,image,subcategory,date}=data;
    return (
        <div className="card w-72 h-96 bg-base-100 shadow-xl image-full">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2><span className="font-semibold text-white">Name:</span>{bookname}</h2>
                <h2><span className="font-semibold text-white">Catecory:</span>{subcategory}</h2>
                <h2><span className="font-semibold text-white">Return Date:</span>{date}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary bg-orange-600">Return Book</button>
                </div>
            </div>
        </div>
    );
};

export default BorrowBookCard;