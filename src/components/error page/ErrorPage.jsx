import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="card w-96 bg-primary mx-auto mt-6 md:mt-20 text-primary-content">
            <div className="card-body">
                <h2 className="card-title">404 Error!!!!!! <br />Page not found</h2>
                <div className="card-actions justify-end">
                    <button className="btn"><Link to='/'>Back to Home</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;