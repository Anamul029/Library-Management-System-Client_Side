import axios from "axios";
import { useEffect, useState } from "react";
import CaregoryBookCard from "./CaregoryBookCard";


const CaregoryBook = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/services')
            .then(res => {
                //    console.log(res.data)
                setBooks(res.data)
            })
    }, [])
    // console.log(books)
    return (
        <div className="border-2 border-black rounded-lg bg-lime-100">
            <h3 className="text-2xl font-semibold text-center my-12"> All Category Books</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {

                    books.map(book => <CaregoryBookCard book={book} key={book._id}></CaregoryBookCard>)
                }
            </div>

        </div>
    );
};

export default CaregoryBook;