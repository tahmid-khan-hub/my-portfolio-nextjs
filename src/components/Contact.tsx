"use client";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaFacebook,
} from "react-icons/fa";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!, // add !
        process.env.NEXT_PUBLIC_TEMPLATE_ID!, // add !
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY! // add !
      )
      .then(
        () => {
          Swal.fire({
            toast: true,
            position: "top-end",
            icon: "success",
            title: "Message sent successfully",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
          });
          form.current?.reset();
        },
        (error) => {
          Swal.fire({
            toast: true,
            position: "top-end",
            icon: "error",
            title: "Failed to send message",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
          });
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="bg-[#0c1220]">
      <div className="w-full py-16 px-6 md:px-3">
        <h1 className="text-center text-4xl font-bold mb-20">
          Get in{" "}
          <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-300 bg-clip-text text-transparent">
            Touch
          </span>
        </h1>
        <div className="max-w-[1330px] mx-auto grid md:grid-cols-2 gap-12">
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

          {/* Right Side */}
          <div className=" rounded-2xl ">
            <h2 className="text-3xl font-bold mb-8">Send me a message</h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
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
                className="flex font-semibold w-full justify-center items-center bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-800 transition px-6 py-3 rounded-3xl "
              >
                Send Message
                <FaPaperPlane className="ml-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
