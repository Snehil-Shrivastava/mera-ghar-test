const ContactForm = () => {
  return (
    <div className="flex-1 flex flex-col gap-10">
      <div className="border border-neutral-300 shadow-xs py-10 px-10 max-h-162.5">
        <form className="grid grid-cols-2 gap-x-10 gap-y-10 text-sm">
          <input
            type="text"
            placeholder="First Name"
            className="border-b border-b-neutral-400 py-3 outline-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border-b border-b-neutral-400 py-3 outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border-b border-b-neutral-400 py-3 col-span-2 outline-none"
          />
          <input
            type="text"
            placeholder="Company Name"
            className="border-b border-b-neutral-400 py-3 col-span-2 outline-none"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border-b border-b-neutral-400 py-3 col-span-2 outline-none"
          />
          <textarea
            rows={6}
            placeholder="Message"
            className="border-b border-b-neutral-400 py-3 col-span-2 outline-none"
          />
          <button className="uppercase bg-copper px-8 py-3 text-white text-sm w-60">
            send message
          </button>
        </form>
      </div>
      <div className="bg-neutral-300 w-full h-70 relative p-6">
        <div className="capitalize bg-white px-6 py-2 absolute">
          View large map
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
