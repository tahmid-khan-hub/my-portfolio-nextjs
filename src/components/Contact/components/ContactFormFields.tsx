import { FaPaperPlane } from "react-icons/fa";

const ContactFormFields = () => {
  return (
    <div className="space-y-5">
      {/* Name + Email */}
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full bg-gray-800 rounded-lg px-4 py-3 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full bg-gray-800 rounded-lg px-4 py-3 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Subject */}
      <input
        type="text"
        name="title"
        placeholder="Subject"
        className="w-full bg-gray-800 rounded-lg px-4 py-3 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Message */}
      <textarea
        name="message"
        placeholder="Message"
        rows={6}
        className="w-full bg-gray-800 rounded-lg px-4 py-3 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      ></textarea>

      {/* Button */}
      <button
        type="submit"
        className="flex font-semibold w-full justify-center items-center bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400 hover:from-blue-900 hover:to-blue-800 px-6 py-3 rounded-3xl transition-transform duration-200 hover:scale-103 active:scale-95"
      >
        Send Message
        <FaPaperPlane className="ml-4" />
      </button>
    </div>
  );
};

export default ContactFormFields;
