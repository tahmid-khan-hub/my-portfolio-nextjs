"use client";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-16 px-2 "
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
          <p className="text-gray-600 mb-6">
            Feel free to reach out to me via email, phone or through the form.
            I’m always open to discussing projects or opportunities.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-600 text-xl" />
              <span>Dhaka, Bangladesh</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-600 text-xl" />
              <span>your@email.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-600 text-xl" />
              <span>+880 1234 567890</span>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">Follow Me</h3>
          <div className="flex gap-5 text-2xl text-gray-700">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="hover:text-blue-700 transition-colors" />
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-black transition-colors" />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className=" shadow-md rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">Send me a message</h2>
          <form className="space-y-5">
            {/* Name + Email */}
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Subject */}
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Message */}
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="flex items-center gap-2 bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
