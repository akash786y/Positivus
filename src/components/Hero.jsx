import React from "react";
import HeroImg from '../assets/Illustration.png'
import  amazon from '../assets/amazon.png'
import hubspot from '../assets/hubspot.png'
import dribble from '../assets/dribble.png'
import netflix from '../assets/netflix.png'
import notion from '../assets/notion.png'
function Hero() {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-4 md:px-12">

                {/* Left: Text Content */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="font-bold text-3xl md:text-5xl text-gray-800 mb-4 font-grotesk max-w-[500px]">
                    Navigating the digital landscape for success
                    </h1>
                    <p className="text-lg text-gray-600 mb-6">
                    Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                    </p>
                    <button className="bg-black text-white px-6 py-3 rounded-xl text-sm font-semibold">
                        Book a Consultation
                    </button>
                </div>

                {/* Right: Hero Image */}
                <div className="flex-1">
                    <img src={HeroImg}  alt="Hero Illustration" className="w-full max-w-md mx-auto" />
                </div>
            </div>
            <div className="filter grayscale flex justify-between px-4 md:px-12 flex-wrap gap-4 text-black mt-8 mb-8">
                <img src={amazon} alt="" />
                <img src={dribble} alt="" />
                <img src={notion} alt="" />
                <img src={netflix} alt="" />
                <img src={hubspot} alt="" />
            </div>
        </>
    )
}

export default Hero;