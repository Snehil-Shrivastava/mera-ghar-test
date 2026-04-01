// const ContactForm = () => {
//   return (
//     <div className="flex flex-col gap-10">
//       <div className="border border-neutral-300 shadow-xs py-10 px-10 max-h-162.5">
//         <form className="grid grid-cols-2 gap-x-10 gap-y-10 text-sm">
//           <input
//             type="text"
//             placeholder="First Name"
//             className="border-b border-b-neutral-400 py-3 outline-none"
//           />
//           <input
//             type="text"
//             placeholder="Last Name"
//             className="border-b border-b-neutral-400 py-3 outline-none"
//           />
//           <input
//             type="email"
//             placeholder="Email Address"
//             className="border-b border-b-neutral-400 py-3 col-span-2 outline-none"
//           />
//           <input
//             type="text"
//             placeholder="Company Name"
//             className="border-b border-b-neutral-400 py-3 col-span-2 outline-none"
//           />
//           <input
//             type="tel"
//             placeholder="Phone Number"
//             className="border-b border-b-neutral-400 py-3 col-span-2 outline-none"
//           />
//           <textarea
//             rows={6}
//             placeholder="Message"
//             className="border-b border-b-neutral-400 py-3 col-span-2 outline-none"
//           />
//           <button className="uppercase bg-copper px-8 py-3 text-white text-sm w-60">
//             send message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;

// -------------------------------------- Test ---------------------------------------------------

"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    // last_name: "",
    // email: "",
    // company_name: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID!,
        {
          name: formData.name,
          // last_name: formData.last_name,
          // email: formData.email,
          // company_name: formData.company_name,
          phone: formData.phone,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      setSubmitStatus("success");
      setFormData({
        name: "",
        // last_name: "",
        // email: "",
        // company_name: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="border border-neutral-300 shadow-xs py-10 px-10 max-h-162.5">
        {/* Success State */}
        {submitStatus === "success" && (
          <div className="text-center py-12">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-medium mb-2">Message Sent!</h2>
            <p className="text-gray-600 text-sm">
              Thank you for reaching out. We&apos;ll get back to you soon.
            </p>
            <button
              onClick={() => setSubmitStatus("idle")}
              className="mt-6 uppercase text-sm underline underline-offset-4 text-neutral-500 hover:text-black transition-colors"
            >
              Send another message
            </button>
          </div>
        )}

        {submitStatus !== "success" && (
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-2 gap-x-10 gap-y-10 text-sm"
          >
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name*"
              className="border-b border-b-neutral-400 py-3 col-span-2 outline-none focus:border-b-black transition-colors"
            />
            {/* <input
              required
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleInputChange}
              placeholder="Last Name*"
              className="border-b border-b-neutral-400 py-3 outline-none focus:border-b-black transition-colors"
            /> */}
            {/* <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address*"
              className="border-b border-b-neutral-400 py-3 col-span-2 outline-none focus:border-b-black transition-colors"
            />
            <input
              type="text"
              name="company_name"
              value={formData.company_name}
              onChange={handleInputChange}
              placeholder="Company Name"
              className="border-b border-b-neutral-400 py-3 col-span-2 outline-none focus:border-b-black transition-colors"
            /> */}
            <input
              required
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone Number*"
              // pattern="[0-9+\-\s()]{7,15}"
              title="Please enter a valid phone number"
              className="border-b border-b-neutral-400 py-3 col-span-2 outline-none focus:border-b-black transition-colors"
            />
            <textarea
              rows={6}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
              className="border-b border-b-neutral-400 py-3 col-span-2 outline-none focus:border-b-black transition-colors resize-none"
            />

            <div className="col-span-2 flex flex-col gap-3">
              {/* Error message */}
              {submitStatus === "error" && (
                <p className="text-red-500 text-xs">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="uppercase bg-copper px-8 py-3 text-white text-sm w-60 hover:opacity-90 transition-opacity disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  "send message"
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
