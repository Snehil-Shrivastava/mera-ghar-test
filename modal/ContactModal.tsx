"use client";

import { X } from "lucide-react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";

import { useEffect, useState } from "react";

const ContactModal = () => {
  const searchParams = useSearchParams();
  const modal = searchParams.get("showQuotationForm");
  const pathname = usePathname();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (modal) {
      // Small delay to trigger animation
      setTimeout(() => setIsVisible(true), 10);
    }
  }, [modal]);

  // If the param doesn't exist, don't render anything
  if (!modal) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      setSubmitStatus("success");
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "" });
      setSubmitStatus("idle");
      router.replace(pathname, { scroll: false });
    }, 200);
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-999 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-100 sm:max-lg:w-120 max-sm:w-[90%] max-w-200 bg-white p-6 pb-10 shadow-xl z-1000 transition-all duration-300 ease-out font-openSans ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      >
        {/* Header (Close Button) */}
        <div className="flex justify-end items-center mb-6">
          <button onClick={handleClose} className="text-black cursor-pointer">
            <X />
          </button>
        </div>

        <div className="w-full">
          {/* Success State */}
          {submitStatus === "success" && (
            <div className="animate-in fade-in duration-300 text-center py-12">
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
              <h2 className="text-2xl font-medium mb-2">Thank You!</h2>
              <p className="text-gray-600">
                Your consultation request has been submitted successfully.
                <br />
                We&apos;ll get back to you soon!
              </p>
            </div>
          )}

          {/* Error State */}
          {submitStatus === "error" && (
            <div className="animate-in fade-in duration-300 text-center py-8 mb-4">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <p className="text-red-600 mb-2">
                Something went wrong. Please try again.
              </p>
            </div>
          )}

          {submitStatus !== "success" && (
            <>
              {/* Icon & Title - Dynamic based on step */}
              <div className="inline-flex gap-5 max-sm:gap-2.5 items-center mx-auto relative left-1/2 -translate-x-1/2">
                <h2 className="uppercase text-lg max-sm:text-xs font-medium leading-5 select-none">
                  Contact details
                </h2>
              </div>

              <form
                onSubmit={handleSubmit}
                className="animate-in fade-in duration-300 w-full mx-auto"
              >
                <div className="space-y-10 py-4 max-w-md mx-auto max-sm:text-sm">
                  <div>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-black transition-colors"
                      placeholder="Your Name*"
                    />
                  </div>

                  <div>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-black transition-colors"
                      placeholder="Your Email*"
                    />
                  </div>

                  <div>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-black transition-colors"
                      placeholder="Your Number*"
                      // pattern="[0-9+\-\s()]{7,15}"
                    />
                  </div>
                </div>

                <div className="flex justify-between mt-8 w-full max-sm:w-full mx-auto select-none max-sm:text-sm">
                  <button
                    type="submit"
                    className="bg-brand-black text-white px-8 py-2 hover:bg-brand-brown transition-colors"
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
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      </>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactModal;
