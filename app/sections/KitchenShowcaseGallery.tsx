// import { mera_kitchen } from "@/lib/data";
// import { ChevronRight } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// const KitchenShowcaseGallery = () => {
//   const KitchemGallery = mera_kitchen;
//   return (
//     <div className="py-20 flex flex-col gap-15">
//       <div className="w-[90%] max-w-360 mx-auto grid grid-cols-2 gap-x-15 gap-y-15 place-items-center">
//         {KitchemGallery.map((data, index) => (
//           <Image
//             key={index}
//             src={data.src}
//             alt=""
//             className="object-cover h-100"
//           />
//         ))}
//       </div>
//       <div className="flex gap-10 items-center w-[90%] max-w-360 mx-auto justify-center">
//         <Link
//           href={"?showQuotationForm=true"}
//           className="flex gap-4 justify-between bg-copper py-3.5 px-5 w-80 text-white cursor-pointer"
//         >
//           <button className="uppercase cursor-pointer">
//             Book free consulatation
//           </button>
//           <ChevronRight />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default KitchenShowcaseGallery;

// --------------------------------- TEST ----------------------------------------------------------

// "use client";

// import { mera_kitchen } from "@/lib/data";
// import { ChevronRight, X } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect, useCallback } from "react";

// const KitchenShowcaseGallery = () => {
//   const KitchemGallery = mera_kitchen;
//   const [selectedImage, setSelectedImage] = useState<{
//     src: string;
//     index: number;
//   } | null>(null);

//   const closeModal = useCallback(() => {
//     setSelectedImage(null);
//   }, []);

//   // Close on Escape key
//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "Escape") closeModal();
//     };
//     if (selectedImage) {
//       document.addEventListener("keydown", handleKeyDown);
//       // Prevent background scroll when modal is open
//       document.body.style.overflow = "hidden";
//     }
//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//       document.body.style.overflow = "";
//     };
//   }, [selectedImage, closeModal]);

//   return (
//     <>
//       <div className="py-20 flex flex-col gap-15 overflow-x-hidden">
//         <div className="w-[90%] max-w-360 mx-auto grid grid-cols-2 gap-x-15 gap-y-15 place-items-center">
//           {KitchemGallery.map((data, index) => (
//             <div
//               key={index}
//               className="relative cursor-zoom-in group overflow-hidden"
//               // @ts-expect-error random
//               onClick={() => setSelectedImage({ src: data.src, index })}
//             >
//               <Image
//                 src={data.src}
//                 alt=""
//                 className="object-cover h-100 max-xl:h-80 transition-transform duration-500 ease-in-out group-hover:scale-105"
//               />
//               {/* Subtle hover overlay */}
//               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
//                 <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm tracking-widest uppercase font-light">
//                   View
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="flex gap-10 items-center w-[90%] max-w-360 mx-auto justify-center">
//           <Link
//             href={"?showQuotationForm=true"}
//             className="flex gap-4 justify-between bg-copper py-3.5 px-5 w-80 text-white cursor-pointer"
//           >
//             <button className="uppercase cursor-pointer">
//               Book free consulatation
//             </button>
//             <ChevronRight />
//           </Link>
//         </div>
//       </div>

//       {/* Lightbox Modal */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
//           onClick={closeModal}
//         >
//           {/* Backdrop — dimmed + blurred */}
//           <div className="absolute inset-0 bg-black/75 backdrop-blur-md transition-all duration-300" />

//           {/* Close button */}
//           <button
//             onClick={closeModal}
//             className="absolute top-10 right-15 z-20 text-white rounded-full w-9 h-9 flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-200 cursor-pointer"
//             aria-label="Close"
//           >
//             <X size={50} strokeWidth={2} />
//           </button>

//           {/* Modal content */}
//           <div
//             className="relative z-10 max-w-[85vw] max-h-[85vh] animate-lightbox-in"
//             onClick={(e) => e.stopPropagation()} // prevent closing when clicking the image itself
//             style={{
//               animation: "lightboxIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) both",
//             }}
//           >
//             {/* Enlarged image */}
//             <Image
//               src={selectedImage.src}
//               alt=""
//               width={1200}
//               height={800}
//               className="object-contain max-w-[85vw] max-h-[85vh] w-auto h-auto shadow-2xl"
//             />
//           </div>
//         </div>
//       )}

//       {/* Keyframe animation injected as a style tag */}
//       <style jsx global>{`
//         @keyframes lightboxIn {
//           from {
//             opacity: 0;
//             transform: scale(0.88);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default KitchenShowcaseGallery;

// ----------------------------------- TEST 2 ----------------------------------------------

"use client";

import { mera_kitchen } from "@/lib/data";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

const KitchenShowcaseGallery = () => {
  const KitchemGallery = mera_kitchen;
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    index: number;
  } | null>(null);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const navigate = useCallback(
    (direction: "prev" | "next") => {
      if (!selectedImage) return;
      const newIndex =
        direction === "prev"
          ? selectedImage.index - 1
          : selectedImage.index + 1;
      if (newIndex < 0 || newIndex >= KitchemGallery.length) return;
      // @ts-expect-error random
      setSelectedImage({ src: KitchemGallery[newIndex].src, index: newIndex });
    },
    [selectedImage, KitchemGallery],
  );

  // Close on Escape, navigate with arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") navigate("prev");
      if (e.key === "ArrowRight") navigate("next");
    };
    if (selectedImage) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage, closeModal, navigate]);

  return (
    <>
      <div className="py-20 flex flex-col gap-15">
        <div className="w-[90%] max-w-360 mx-auto grid grid-cols-2 max-lg:grid-cols-1 gap-x-15 gap-y-15 place-items-center">
          {KitchemGallery.map((data, index) => (
            <div
              key={index}
              className="relative cursor-zoom-in group overflow-hidden"
              // @ts-expect-error random
              onClick={() => setSelectedImage({ src: data.src, index })}
            >
              <Image
                src={data.src}
                alt=""
                className="object-cover h-100 max-xl:h-80 transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm tracking-widest uppercase font-light">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-10 items-center w-[90%] max-w-360 mx-auto justify-center">
          <Link
            href={"?showQuotationForm=true"}
            className="flex gap-4 justify-between bg-copper py-3.5 px-5 w-80 text-white cursor-pointer"
          >
            <button className="uppercase cursor-pointer">
              Book free consultation
            </button>
            <ChevronRight />
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          {/* Backdrop — dimmed + blurred */}
          <div className="absolute inset-0 bg-black/75 backdrop-blur-md transition-all duration-300" />

          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-10 right-15 z-20 text-white rounded-full w-9 h-9 flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-200 cursor-pointer"
            aria-label="Close"
          >
            <X size={50} strokeWidth={2} />
          </button>

          {/* Prev button */}
          {selectedImage.index > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate("prev");
              }}
              className="absolute left-4 z-20 bg-white/90 text-black rounded-full w-11 h-11 flex items-center justify-center shadow-xl hover:bg-white hover:scale-110 transition-all duration-200"
              aria-label="Previous image"
            >
              <ChevronLeft size={22} strokeWidth={2} />
            </button>
          )}

          {/* Next button */}
          {selectedImage.index < KitchemGallery.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate("next");
              }}
              className="absolute right-4 z-20 bg-white/90 text-black rounded-full w-11 h-11 flex items-center justify-center shadow-xl hover:bg-white hover:scale-110 transition-all duration-200"
              aria-label="Next image"
            >
              <ChevronRight size={22} strokeWidth={2} />
            </button>
          )}

          {/* Modal content */}
          <div
            className="relative z-10 max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
            style={{
              animation: "lightboxIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) both",
            }}
          >
            {/* Enlarged image */}
            <Image
              src={selectedImage.src}
              alt=""
              width={1200}
              height={800}
              className="object-contain max-w-[85vw] max-h-[85vh] w-auto h-auto shadow-2xl"
            />

            {/* Image counter */}
            <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm tabular-nums font-openSans">
              {selectedImage.index + 1} / {KitchemGallery.length}
            </p>
          </div>
        </div>
      )}

      {/* Keyframe animation injected as a style tag */}
      <style jsx global>{`
        @keyframes lightboxIn {
          from {
            opacity: 0;
            transform: scale(0.88);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default KitchenShowcaseGallery;
