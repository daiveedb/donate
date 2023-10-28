import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="py-[70px] px-5 sm:px-20 md:px-5 lg:px-[150px]">
      <div className="my-7">
        <div className="bg-[url('/images/protest.jpeg')] bg-cover bg-center bg-no-repeat w-full p-10 h-[400px] relative rounded-lg">
          <div className="absolute inset-0 bg-[#000000aa] p-10 px-8 md:px-20 rounded-lg">
            <h1 className="text-white text-2xl sm:text-4xl text-center">
              How to Contact us
            </h1>
            <p className="text-white py-4 sm:py-12 text-sm sm:text-base text-center">
              We are proud to announce Palestine Children&apos;s Relief Fund has
              earned our sixth consecutive 4-star rating. This is our highest
              possible rating and indicates that your organization adheres to
              sector best practices and executes its mission in a financially
              efficient way.
            </p>
            <div className="flex justify-center py-5">
              <button className="bg-palRed p-3 rounded text-white w-[200px] hover:bg-palRed hover:text-white transition-all">
                Get a Call
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        <div>
          <h2 className="text-2xl pb-5">Send us a Message</h2>
          <form action="" className="flex flex-col gap-y-6">
            <input type="text" placeholder="Enter your name" required />
            <input type="email" placeholder="Enter your email" required />
            <textarea
              name=""
              id=""
              cols={20}
              rows={5}
              placeholder="Tell us something"
              required
            ></textarea>
            <button className="bg-palGreen p-3 rounded cursor-pointer text-white w-[200px] hover:bg-green-700 transition-all ">
              Send
            </button>
          </form>
        </div>
        <div className="w-full p-10">
          <div className="w-full h-full relative">
            <Image alt="Contact us" src={"/images/contactSVG.svg"} fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
