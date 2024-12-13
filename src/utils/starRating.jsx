import React from "react";
import { FaStar } from "react-icons/fa"; // Font Awesome React Icons

const StarRating = ({ reviewer_rating }) => {
    return (
        <div>
            {Array.from({ length: reviewer_rating }, (_, index) => (
                <FaStar key={index} color="#FFC531" size={16} />
            ))}
        </div>
    );
};

export default StarRating;