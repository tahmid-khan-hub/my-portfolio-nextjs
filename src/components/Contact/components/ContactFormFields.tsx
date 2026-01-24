import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

const ContactFormFields = () => {
  return (
    <div className="space-y-5">
      {/* Name + Email */}
      <div className="flex flex-col md:flex-row gap-4">
        <motion.input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full bg-gray-800 rounded-lg px-4 py-3 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-900 border border-gray-700 text-gray-300"
          required
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        />
        <motion.input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full bg-gray-800 rounded-lg px-4 py-3 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-900 border border-gray-700 text-gray-300"
          required
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        />
      </div>

      {/* Subject */}
      <motion.input
        type="text"
        name="title"
        placeholder="Subject"
        className="w-full bg-gray-800 rounded-lg px-4 py-3 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-900 border border-gray-700 text-gray-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
      />

      {/* Message */}
      <motion.textarea
        name="message"
        placeholder="Message"
        rows={6}
        className="w-full bg-gray-800 rounded-lg px-4 py-3 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-900 border border-gray-700 text-gray-300"
        required
        initial={{ opacity: 0, x: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
      ></motion.textarea>

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
