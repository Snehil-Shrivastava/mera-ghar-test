// import Image from "next/image";

// import checkboardPlaceholder from "@/public/checkboard-placeholder.svg";

// const TestimonilaCard = ({
//   quote,
//   name,
//   location,
//   bgColor,
//   txtColor,
//   maxHeight,
// }: {
//   quote: string;
//   name: string;
//   location: string;
//   bgColor?: string;
//   txtColor?: string;
//   maxHeight?: string;
// }) => {
//   return (
//     <div
//       className={`${bgColor ? bgColor : "bg-white"} px-8 py-4 flex flex-col gap-5 h-full ${txtColor ? txtColor : ""} ${maxHeight ? maxHeight : ""}`}
//     >
//       <div className="text-xl max-xl:text-lg opacity-50">
//         <q>{quote}</q>
//       </div>
//       <div className="flex gap-6">
//         <div>
//           <h4 className="font-bold text-xl max-xl:text-lg">{name}</h4>
//           <span className="text-sm max-xl:text-xs">{location}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonilaCard;

// ------------------------------- TEST -----------------------------------------

// "use client";

// import { useState, useRef, useEffect } from "react";

// const TestimonialCard = ({
//   quote,
//   name,
//   location,
//   bgColor = "bg-white",
//   txtColor = "",
// }: {
//   quote: string;
//   name: string;
//   location: string;
//   bgColor?: string;
//   txtColor?: string;
// }) => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [needsTruncation, setNeedsTruncation] = useState(false);
//   const textRef = useRef<HTMLParagraphElement>(null);

//   useEffect(() => {
//     // Wrapping the state update in a setTimeout defers it to the next event loop tick.
//     // This satisfies the React linter, avoids synchronous cascading renders,
//     // and guarantees the DOM has fully painted before we measure it.
//     const timerId = setTimeout(() => {
//       if (textRef.current) {
//         setNeedsTruncation(
//           textRef.current.scrollHeight > textRef.current.clientHeight,
//         );
//       }
//     }, 0);

//     // Cleanup function
//     return () => clearTimeout(timerId);
//   }, [quote]);

//   return (
//     <div
//       className={`${bgColor} ${txtColor} px-8 py-4 flex flex-col gap-5 h-full`}
//     >
//       <div className="grow flex flex-col gap-2">
//         <p
//           ref={textRef}
//           className={`text-xl max-xl:text-lg opacity-60 transition-all duration-300 ${
//             !isExpanded ? "line-clamp-4" : "line-clamp-none"
//           }`}
//         >
//           <q>{quote}</q>
//         </p>

//         {needsTruncation && (
//           <button
//             onClick={() => setIsExpanded(!isExpanded)}
//             className="text-sm font-semibold text-blue-500 hover:text-blue-700 w-fit mt-1 transition-colors underline"
//           >
//             {isExpanded ? "Show less" : "Show more"}
//           </button>
//         )}
//       </div>

//       <div className="flex gap-6 mt-auto">
//         <div>
//           <h4 className="font-bold text-xl max-xl:text-lg">{name}</h4>
//           <span className="text-sm max-xl:text-xs opacity-75">{location}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialCard;

// ----------------------------------- TEST ---------------------------------------

"use client";

import { useState, useRef, useEffect } from "react";

const TestimonialCard = ({
  quote,
  name,
  location,
  bgColor = "bg-white",
  txtColor = "",
  truncate = true,
}: {
  quote: string;
  name: string;
  location: string;
  bgColor?: string;
  txtColor?: string;
  truncate?: boolean;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsTruncation, setNeedsTruncation] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    // ResizeObserver watches the element and fires automatically when the DOM
    // paints or when the screen size changes.
    const observer = new ResizeObserver(() => {
      // We ONLY want to check for truncation when the box is collapsed.
      // If it's expanded, scrollHeight === clientHeight, which would falsely hide our button!
      if (!isExpanded) {
        // Adding a 3px buffer completely eliminates false positives from sub-pixel rounding
        setNeedsTruncation(element.scrollHeight > element.clientHeight + 3);
      }
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [quote, isExpanded]);

  return (
    <div
      className={`${bgColor} ${txtColor} px-8 py-4 flex flex-col gap-5 h-full`}
    >
      <div className={`${truncate ? "grow" : ""} flex flex-col gap-2`}>
        <p
          ref={textRef}
          className={`text-xl max-xl:text-lg opacity-60 transition-all duration-300 ${
            !isExpanded && truncate ? "line-clamp-3" : "line-clamp-none"
          }`}
        >
          <q>{quote}</q>
        </p>

        {needsTruncation && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm font-semibold text-copper hover:text-brand-brown w-fit mt-1 transition-colors underline"
          >
            {isExpanded ? "Show less" : "Show more"}
          </button>
        )}
      </div>

      <div className={`flex gap-6 ${truncate ? "mt-auto" : ""}`}>
        <div>
          <h4 className="font-bold text-xl max-xl:text-lg">{name}</h4>
          <span className="text-sm max-xl:text-xs opacity-75">{location}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
