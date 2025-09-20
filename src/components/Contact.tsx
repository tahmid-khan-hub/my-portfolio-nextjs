"use client";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="bg-[#0c1220]"><div
      id="contact"
      className="w-full py-16 px-4 md:px-3"
    >
        <h1 className="text-center text-4xl font-bold mb-20">Get in Touch</h1>
      <div className="max-w-[1350px] mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl font-bold mb-7">Contact Information</h2>
          <p className="text-gray-300 mb-6 ">
            Feel free to reach out to me via email, phone or through the form.
            I’m always open to discussing projects or opportunities.
          </p>

          <div className="space-y-4 mb-8">
            {/* location */}
            <div className="flex items-center gap-3">
             <div className="p-2 rounded-full bg-gray-800"> <FaMapMarkerAlt className="text-blue-400 hover:text-blue-300 text-xl" /></div>
              <div className="ml-2">
                <h5 className="text-lg font-semibold">Location</h5>
                <p className="text-sm text-gray-400 font-semibold">Sylhet, Bangladesh</p>
              </div>
            </div>
            {/* email */}
            <div className="flex items-center gap-3">
             <div className="p-2 rounded-full bg-gray-800"> <FaEnvelope className="text-blue-400 hover:text-blue-300 text-xl" /></div>
              <div className="ml-2">
                <h5 className="text-lg font-semibold">Email</h5>
                <p className="text-sm text-gray-400 font-semibold">tahmidkhan0011@gmail.com</p>
              </div>
            </div>
            {/* phone */}
            <div className="flex items-center gap-3">
             <div className="p-2 rounded-full bg-gray-800"> <FaPhoneAlt className="text-blue-400 hover:text-blue-300 text-xl" /></div>
              <div className="ml-2">
                <h5 className="text-lg font-semibold">Phone</h5>
                <p className="text-sm text-gray-400 font-semibold">+8801610627131</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3">Follow Me</h3>
          <div className="flex gap-5 text-2xl text-white mb-3">
            {/* linkedIn */}
            <motion.div whileHover={{
              scale: 1.1, 
              boxShadow: "0px 0px 20px rgba(0, 123, 255, 0.7)",
              }}
              transition={{ duration: 0 }} className="p-2 rounded-full bg-gray-800"><a
              href="https://www.linkedin.com/in/tahmid-khan-/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="transition-colors" />
            </a></motion.div>
            {/* gitHub */}
            <motion.div whileHover={{
              scale: 1.1, 
              boxShadow: "0px 0px 20px rgba(0, 123, 255, 0.7)",
              }}
              transition={{ duration: 0 }} className="p-2 rounded-full bg-gray-800"><a href="https://github.com/tahmid-khan-hub" target="_blank" rel="noreferrer">
              <FaGithub className="transition-colors" />
            </a></motion.div>
          </div>
        </div>

        {/* Right Side */}
        <div className=" rounded-2xl ">
          <h2 className="text-3xl font-bold mb-8">Send me a message</h2>
          <form className="space-y-5">
            {/* Name + Email */}
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-gray-800 rounded-lg px-4 py-3 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-gray-800 rounded-lg px-4 py-3 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Subject */}
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-gray-800 rounded-lg px-4 py-3 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Message */}
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full bg-gray-800 rounded-lg px-4 py-3 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            {/* Button */}
            <button
            type="submit"
            className="flex w-full justify-center items-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-3xl hover:bg-blue-700 transition-colors"
            >
            Send Message
            <FaPaperPlane className="ml-4" />
            </button>
          </form>
        </div>
      </div>
    </div></div>
  );
};

export default Contact;
