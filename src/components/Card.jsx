import React from "react";
import icon from '../assets/Icon.png';

function Card({ title = "Your Heading", imageSrc, color = "bg-white", textBg }) {
    return (
        <div
            className={`flex flex-col md:flex-row items-start justify-between rounded-[45px] p-6 md:p-10 ${color} border shadow-md border-black border-b-4 w-full max-w-[550px] h-auto md:h-[300px] mx-auto`}
            style={{ width: "550px", height: "300px" }}
        >
            {/* Left: Text Content */}
            <div className="flex flex-col justify-between h-full">

                <div className="text-xl font-bold py-2 px-2 rounded-xl boundry max-w-[200px]">
                    <span className={` ${textBg}`}>{title}</span>
                </div>

                <button className="flex items-center gap-2 hover:underline font-medium text-sm">
                    <img src={icon} alt="Learn Icon" className="w-4 h-4" />
                    Learn More
                </button>
            </div>

            {/* Right: Image */}
            <div className="h-full flex items-center">
                <img
                    src={imageSrc}
                    alt={`${title} illustration`}
                    className=" w-auto object-contain"
                />
            </div>
        </div>
    );
}

export default Card;
