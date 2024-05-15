import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import BorrowBookCard from "./BorrowBookCard";


const BorrowBooks = () => {
    const {user}=useContext(AuthContext)
    const [update,setUpdate]=useState([])
    useEffect(()=>{
        fetch(`https://library-management-server-orcin.vercel.app/borrow-user/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setUpdate(data))
    },[update])
    return (
        <div>
            <h3 className="text-2xl font-semibold text-center text-blue-800 bg-lime-400 p-3 rounded-xl w-3/5 mx-auto mb-12">Total number of book you have to borrowed:{update.length}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    update.map(data=><BorrowBookCard data={data} key={data._id}></BorrowBookCard>)
                }
            </div>
        </div>
    );
};

export default BorrowBooks;