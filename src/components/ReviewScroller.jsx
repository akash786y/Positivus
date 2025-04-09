// import React, { useRef } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// function ReviewScroller() {
//     const scrollRef = useRef(null);

//     // const scroll = (offset) => {
//     //     if (scrollRef.current) {
//     //         scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
//     //     }
//     // };

//     const [activeIndex, setActiveIndex] = useState(0);

//     const reviews = [
//         { text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.", name: "John Smith", designation: "Marketing Director at XYZ Corp" },
//         { text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.", name: "John Smith", designation: "Marketing Director at XYZ Corp" },
//         { text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.", name: "John Smith", designation: "Marketing Director at XYZ Corp" },
//         { text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.", name: "John Smith", designation: "Marketing Director at XYZ Corp" },
//     ];

//     const scroll = (direction) => {
//         const newIndex = Math.max(0, Math.min(activeIndex + direction, reviews.length - 1));
//         setActiveIndex(newIndex);
//         scrollRef.current?.scrollTo({
//             left: newIndex * 520, // approx card width
//             behavior: "smooth",
//         });
//     };

//     return (
//         // <div className="relative bg-black rounded-3xl p-8 w-full min-h-[500px]">
//         //     {/* Scroll Buttons */}
//         //     <button
//         //         onClick={() => scroll(-300)}
//         //         className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white text-black p-2 rounded-full shadow-md"
//         //     >
//         //         <ChevronLeft />
//         //     </button>

//         //     <button
//         //         onClick={() => scroll(300)}
//         //         className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white text-black p-2 rounded-full shadow-md"
//         //     >
//         //         <ChevronRight />
//         //     </button>

//         //     {/* Scrollable Review Cards */}
//         //     <div
//         //         ref={scrollRef}
//         //         className="flex overflow-x-auto space-x-10 scrollbar-hide scroll-smooth py-6 px-6 "
//         //     >
//         //         {reviews.map((review, index) => (
//         //             <div key={index} className="flex flex-col items-start relative min-h-[250px]">
//         //                 {/* Review Box */}
//         //                 <div className="relative bg-black text-white p-6 rounded-xl border-2 border-lime-300 min-w-[500px] max-w-sm">
//         //                     <p className="text-base">"{review.text}"</p>
//         //                 </div>

//         //                 <div className="absolute bottom-[-12px] left-8 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[12px] border-l-transparent border-r-transparent border-t-lime-300"></div>

//         //                 {/* Name and Designation */}
//         //                 <div className="absolute -bottom-10 left-6">
//         //                     <p className="text-white font-semibold">{review.name}</p>
//         //                     <p className="text-sm text-gray-300">{review.designation}</p>
//         //                 </div>

//         //             </div>
//         //         ))}
//         //     </div>
//         // </div>


//         <div className="relative bg-black rounded-3xl p-10 w-full min-h-[600px] text-white flex flex-col items-center">
//             {/* Scrollable Review Cards */}
//             <div
//                 ref={scrollRef}
//                 className="flex overflow-x-auto scrollbar-hide space-x-10 scroll-smooth py-10 px-6 w-full"
//                 style={{ scrollSnapType: "x mandatory" }}
//             >
//                 {reviews.map((review) => (
//                     <div
//                         className="relative flex-shrink-0 scroll-snap-start"
//                         style={{ minWidth: "500px", maxWidth: "500px" }}
//                     >
//                         {/* Review Box */}
//                         <div className="relative bg-black p-8 rounded-2xl border-2 border-lime-300 min-h-[250px]">
//                             <p className="text-lg">"{review.text}"</p>

//                             {/* Triangle pointer */}
//                             <div className="absolute bottom-[-12px] left-10 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[12px] border-l-transparent border-r-transparent border-b-lime-300" />
//                         </div>

//                         {/* Name and Designation below the triangle */}
//                         <div className="mt-6 ml-4">
//                             <p className="font-bold text-white">{review.name}</p>
//                             <p className="text-sm text-gray-300">{review.designation}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Navigation & Indicator */}
//             <div className="flex items-center gap-6 mt-6">
//                 <button
//                     onClick={() => scroll(-1)}
//                     className="bg-white text-black p-2 rounded-full shadow-md"
//                 >
//                     <ChevronLeft />
//                 </button>

//                 <div className="flex gap-2">
//                     {reviews.map((_, i) => (
//                         <span
//                             key={i}
//                             className={`w-3 h-3 rounded-full ${activeIndex === i ? "bg-lime-300" : "bg-gray-500"
//                                 }`}
//                         />
//                     ))}
//                 </div>

//                 <button
//                     onClick={() => scroll(1)}
//                     className="bg-white text-black p-2 rounded-full shadow-md"
//                 >
//                     <ChevronRight />
//                 </button>
//             </div>
//         </div>

//     );
// }

// export default ReviewScroller;





// // const reviews = [
// //     { text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.", author: "John Smith" },
// //     { text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.", author: "John Smith" },
// //     { text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.", author: "John Smith" },
// //     { text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.", author: "John Smith" },
// //   ];





import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ReviewScroller() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    { text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.", name: "John Smith", designation: "Marketing Director at XYZ Corp" },
    { text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.", name: "John Smith", designation: "Marketing Director at XYZ Corp" },
    { text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.", name: "John Smith", designation: "Marketing Director at XYZ Corp" },
    { text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.", name: "John Smith", designation: "Marketing Director at XYZ Corp" },
    { text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.", name: "John Smith", designation: "Marketing Director at XYZ Corp" },
  ];

  const scroll = (direction) => {
    const newIndex = Math.max(0, Math.min(activeIndex + direction, reviews.length - 1));
    setActiveIndex(newIndex);
    scrollRef.current?.scrollTo({
      left: newIndex * 520, // approx card width
      behavior: "smooth",
    });
  };

  return (
    <div className="relative bg-black rounded-3xl py-10 w-full min-h-[600px] text-white flex flex-col items-center">
      {/* Scrollable Review Cards */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide space-x-10 scroll-smooth py-10 px-6 w-full"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 scroll-snap-start"
            style={{ minWidth: "500px", maxWidth: "500px" }}
          >
            {/* Review Box */}
            <div className="relative bg-black p-8 rounded-3xl border-2 border-lime-300 min-h-[250px] rounded-[40px]">
              <p className="text-lg">"{review.text}"</p>

              {/* Triangle pointer */}
              {/* <div className="absolute bottom-[-12px] left-10 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[12px] border-l-transparent border-r-transparent border-b-lime-300" /> */}
              <div className="absolute top-full left-10 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[12px] border-l-transparent border-r-transparent border-t-lime-300" />

            </div>

            {/* Name and Designation below the triangle */}
            <div className="mt-6 ml-4">
              <p className="font-bold text-white">{review.name}</p>
              <p className="text-sm text-gray-300">{review.designation}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation & Indicator */}
      <div className="flex items-center gap-24 mt-6">
        <button
          onClick={() => scroll(-1)}
          className="bg-black text-white p-2 rounded-full shadow-md"
        >
          <ChevronLeft />
        </button>

        <div className="flex gap-2">
          {reviews.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full ${
                activeIndex === i ? "bg-lime-300" : "bg-gray-500"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => scroll(1)}
          className="bg-black text-white p-2 rounded-full shadow-md"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}

export default ReviewScroller;
