
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactLeftSide = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-7">Contact Information</h2>
      <p className="text-gray-300 mb-6 ">
        Feel free to reach out to me via email, phone or through the form. I’m
        always open to discussing projects or opportunities.
      </p>

      <div className="space-y-4 mb-8">
        {/* location */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-gray-800">
            <FaMapMarkerAlt className="text-blue-400 hover:text-blue-300 text-xl" />
          </div>
          <div className="ml-2">
            <h5 className="text-lg font-semibold">Location</h5>
            <p className="text-sm text-gray-400 font-semibold">
              Sylhet, Bangladesh
            </p>
          </div>
        </div>
        {/* email */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-gray-800">
            <FaEnvelope className="text-blue-400 hover:text-blue-300 text-xl" />
          </div>
          <div className="ml-2">
            <h5 className="text-lg font-semibold">Email</h5>
            <p className="text-sm text-gray-400 font-semibold">
              tahmidkhan0011@gmail.com
            </p>
          </div>
        </div>
        {/* phone */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-gray-800">
            <FaPhoneAlt className="text-blue-400 hover:text-blue-300 text-xl" />
          </div>
          <div className="ml-2">
            <h5 className="text-lg font-semibold">Phone</h5>
            <p className="text-sm text-gray-400 font-semibold">
              +8801610627131
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold mb-3">Follow Me</h3>
      <div className="flex gap-5 text-2xl text-white mb-3">
        {/* facebook */}
        <motion.div
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 20px rgba(0, 123, 255, 0.7)",
          }}
          transition={{ duration: 0 }}
          className="p-2 rounded-full bg-gray-800"
        >
          <a
            href="https://www.facebook.com/tahmid.khan.35762241"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook className="transition-colors" />
          </a>
        </motion.div>
        {/* linkedIn */}
        <motion.div
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 20px rgba(0, 123, 255, 0.7)",
          }}
          transition={{ duration: 0 }}
          className="p-2 rounded-full bg-gray-800"
        >
          <a
            href="https://www.linkedin.com/in/tahmid-khan-/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="transition-colors" />
          </a>
        </motion.div>
        {/* gitHub */}
        <motion.div
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 20px rgba(0, 123, 255, 0.7)",
          }}
          transition={{ duration: 0 }}
          className="p-2 rounded-full bg-gray-800"
        >
          <a
            href="https://github.com/tahmid-khan-hub"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="transition-colors" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactLeftSide;
