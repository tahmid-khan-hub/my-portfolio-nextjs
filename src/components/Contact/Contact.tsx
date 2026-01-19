"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import ContactLeftSide from "./components/ContactLeftSide";
import ContactFormFields from "./components/ContactFormFields";

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
          <ContactLeftSide />

          {/* Right Side */}
          <div className=" rounded-2xl ">
            <h2 className="text-3xl font-bold mb-8">Send me a message</h2>
            <form ref={form} onSubmit={sendEmail} >
              <ContactFormFields />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
