
import CaregoryBook from "./CaregoryBook";
import Slider from "./Slider";
import Swal from "sweetalert2";


const Home = () => {
    const handlesave=(e)=>{
        e.preventDefault()
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your valuable feedback is saved on database",
            showConfirmButton: false,
            timer: 1500
          });
    }
    return (
        <div className="">
            <Slider></Slider>
            <CaregoryBook></CaregoryBook>
            {/* extra section */}
            <div className="my-12">
                <h2 className="font-extrabold text-2xl text-center my-6">FAQ</h2>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        How long does it take to process and ship orders?
                    </div>
                    <div className="collapse-content">
                        <p>Orders typically take 1-2 business days to process before shipping. Shipping times vary depending on the destination and chosen shipping method.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Can I request a custom order for a specific item?
                    </div>
                    <div className="collapse-content">
                        <p>We welcome custom orders! Reach out to our team with details of your desired item, and we'll work with you to bring your vision to life.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        What is your return policy?
                    </div>
                    <div className="collapse-content">
                        <p>We want you to be completely satisfied with your purchase. If for any reason you're not happy with your order, you may return it within 30 days for a full refund or exchange.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Do you provide any tips or tutorials for using your products?
                    </div>
                    <div className="collapse-content">
                        <p>Explore our blog and resources section for valuable tips, tutorials, and project ideas to inspire your creativity.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        I'm having trouble navigating your website or placing an order, what should I do?
                    </div>
                    <div className="collapse-content">
                        <p>If you encounter any technical difficulties while browsing our website or placing an order, please clear your browser cache and cookies, or try using a different browser.</p>
                    </div>
                </div>
            </div>
            {/* user review section */}
            {/* second extra section */}
            <div className="my-6 md:my-16">
                <h3 className="text-2xl font-semibold text-center my-6">Please sent Your important feedback for our website  </h3>
                <form onSubmit={handlesave}>
                    <textarea className="border-2 border-solid w-full border-black" name="feedback" id="" cols="50" rows="10"></textarea>
                    <button className="btn btn-primary bg-green-600 w-full">Submit Your feedback</button>
                </form>
            </div>
        </div>
    );
};

export default Home;