"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm, ValidationError } from "@formspree/react";

const Page = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    var url =
      "https://wa.me/7086082215?text=" +
      "Name: " +
      name +
      "%0a" +
      "Email: " +
      email +
      "%0a" +
      "Message: " +
      message;

    window.open(url, "_blank")?.focus();
    toast("Message sent successfully");
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [state, handleSubmitt] = useForm("xoqgvllj");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("submitted successfully");
      setEmail("");
      setMessage("");
      setName("");
    }
  }, [state]);
  return (
    <div className="py-[90px] pt-0 px-5 sm:px-20 md:px-5 lg:px-[150px]">
      <div className="my-7">
        <div className="bg-[url('/images/protest.jpeg')] bg-cover bg-center bg-no-repeat w-full p-10 h-[400px] relative rounded-lg">
          <div className="absolute inset-0 bg-[#000000aa] p-10 px-8 md:px-20 rounded-lg">
            <h1 className="text-white text-2xl sm:text-4xl text-center">
              How to Contact us
            </h1>
            <p className="text-white py-4 sm:py-12 text-sm sm:text-base text-center">
              We are proud to announce Support Palestine Hope Relief Fund has
              earned our sixth consecutive 4-star rating. This is our highest
              possible rating and indicates that your organization adheres to
              sector best practices and executes its mission in a financially
              efficient way.
            </p>
            <div className="flex justify-center py-5">
              <p className="text-white text-xl ">
                Email us at info@supportpalestinianhope.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        <div>
          <h2 className="text-2xl pb-5">Send us a Message</h2>
          <form
            // action="mailto:bajomodavid18@gmail.com"
            // method="post"
            // onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col gap-y-6"
            // encType="text/plain"
            onSubmit={handleSubmitt}
          >
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter your name"
              required
              name="name"
              id="name"
            />
            <ValidationError prefix="name" field="name" errors={state.errors} />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              required
              name="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea
              name="message"
              id="message"
              cols={20}
              rows={5}
              placeholder="Tell us something"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              className="bg-palGreen p-3 rounded cursor-pointer text-white w-[200px] hover:bg-green-700 transition-all "
              disabled={state.submitting}
            >
              Send
            </button>
          </form>
        </div>
        <div className="w-full p-10">
          <div className="w-full h-full relative">
            <Image alt="Contact us" src={"/images/contactSVG.svg"} fill />
          </div>
        </div>
        <ToastContainer hideProgressBar />
      </div>
    </div>
  );
};

export default Page;
