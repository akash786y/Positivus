import React from "react";
import Card from "./Card";
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import Card1 from './Card1'
import Card2 from "./Card2";
function BodySection() {
    return (
        <>
            <div className="px-4 md:px-12">

                <div className="flex px-1 py-1 gap-4 mt-20px">
                    <p className="bg-lime-300 text-[25px] px-2">Services</p>
                    <p className="text-sm pt-2 max-w-[500px]">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-6 py-10 ">
                    <Card title="Search Engine Optimisation" imageSrc={card1} color="bg-grey" textBg="bg-lime-300" />
                    <Card title="Pay-per-click advertising" imageSrc={card2} color='bg-lime-300' textBg="bg-white" />
                </div>

                <div className="flex px-1 py-1 gap-4">
                    <p className="bg-lime-300 text-[25px] px-2">Our Working Process</p>
                    <p className="text-sm pt-2 max-w-[400px]">Step-by-Step Guide to Achieving Your Business Goals</p>
                </div>

                <div className="mt-8">
                    <Card1 />
                </div>
                <div className="mt-4">
                    <Card2 />
                </div>

                <div className="flex px-1 gap-4 mt-8">
                    <p className="bg-lime-300 text-[25px] px-2">Testimonials</p>
                    <p className="text-sm pt-2 max-w-[400px]">Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
                </div>
            </div>
        </>
    )
}

export default BodySection;