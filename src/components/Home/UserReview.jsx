import { Rating } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
// rating 
function getRating(rating) {
    switch (rating) {
        case 1:
            return 'Poor';
        case 2:
            return 'Nothing special';
        case 3:
            return 'Average';
        case 4:
            return 'Very good';
        case 5:
            return 'Excellent';
        default:
            return 'None';
    }
}

const UserReview = () => {
    const [review, setReview] = useState([])
    const [rating, setRating] = useState(3);
    //  access reviews data
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div>
            <h3 className="font-extrabold text-2xl text-center my-6">User Review Section</h3>
            {/* sweeper */}
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <div>
                    {
                        review.map(data => <SwiperSlide key={data._id}>
                            <div className="h-44 my-auto" style={{ width: '100%' }}>
                                <div>
                                    <h3 className="text-center">Name:{data.name}</h3>
                                    <p className="w-4/5 mx-auto">{data.details}</p>
                                    <div className="text-center">
                                        <Rating value={data.rating} onChange={setRating} />
                                    </div>
                                    <div className="text-center">
                                        {`Selected: ${getRating(data.rating)}`}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </div>
            </Swiper>
        </div>
    );
};

export default UserReview;