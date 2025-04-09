import React from "react";
import MinusIcon from '../assets/minusIcon.png'

function Card1() {
    return (
        <>
            <div className={`w-full rounded-3xl p-8 shadow-md flex flex-col justify-between border border-black border-b-4 bg-lime-300`} >

                <hr className="border-t-2 border-black mb-2" />

                <p className="max-w-[1000px] text-gray-600 text-base mb-4">During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</p>

                <div className="flex items-center justify-between mt-auto">
                    <div className={` w-fit px-3 py-1 rounded flex gap-4`}>
                        <p className="text-4xl font-bold">01</p>
                        <p className="text-xl pt-2">Consultation</p>
                    </div>
                    <img src={MinusIcon} alt="icon" className="w-10 h-10" />
                </div>
            </div>
        </>
    )
}

export default Card1;