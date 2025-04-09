import React from "react";
import PlusIcon from '../assets/plusIcon.png'

function Card2({color, textBg, description}) {
    return (
        <>
            <div className={`w-full ${color} rounded-3xl p-8 shadow-md flex flex-col justify-between border border-black border-b-4 bg-gray-100`}>

                {/* Bottom: Title & Icon */}
                <div className="flex items-center justify-between">
                    <div className={` ${textBg}  px-3 py-1 rounded flex gap-4`}>
                        <p className="text-4xl font-bold">02</p>
                        <p className="text-xl pt-2">Research and Strategy Development</p>
                    </div>
                    <img src={PlusIcon} alt="icon" className="w-10 h-10" />
                </div>
            </div>
        </>
    )
}

export default Card2;