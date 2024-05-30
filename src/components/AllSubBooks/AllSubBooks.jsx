import { useLoaderData, useParams } from "react-router-dom";
import Book from "./Book";

const AllSubBooks = () => {
    const subcategory=useParams()
    const information=useLoaderData();
    const sub=subcategory.category
    const info=information.filter(info=>info.subcategory===sub)
    return (
        <div>
            <h2 className="text-2xl font-semibold text-center">all subcategory book is here:{info.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {
                    info.map(book=><Book book={book} key={book._id}></Book>)
                }
            </div>
        </div>
    );
};

export default AllSubBooks;