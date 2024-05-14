import axios from "axios";
import Swal from "sweetalert2";


const BorrowBookCard = ({ data }) => {
    // console.log(data)
    const { bookname, image, subcategory, date, _id } = data;
    const handleReturn = (id) => {
        //   console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, return it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/borrow/${id}`)
                    .then(res => {
                        console.log(res.data)
                    })
                Swal.fire({
                    title: "Returned!",
                    text: "Succefully Book returned",
                    icon: "success"
                });
            }
        });

    }
    return (
        <div className="card w-72 h-96 bg-base-100 shadow-xl image-full">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2><span className="font-semibold text-white">Name:</span>{bookname}</h2>
                <h2><span className="font-semibold text-white">Catecory:</span>{subcategory}</h2>
                <h2><span className="font-semibold text-white">Return Date:</span>{date}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleReturn(_id)} className="btn btn-primary bg-orange-600">Return Book</button>
                </div>
            </div>
        </div>
    );
};

export default BorrowBookCard;