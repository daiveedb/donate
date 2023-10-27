"use client";
import Image from "next/image";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <div className="w-screen min-h-screen max-h-max bg-[#1d2e28] relative">
      <div className="bg-[url('/images/protest.jpeg')] bg-bottom bg-fixed flex justify-center items-center bg-cover bg-no-repeat w-full h-[40vh] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1d2e28]">
          <button
            className="text-white text-8xl absolute top-5 left-5"
            onClick={() => router.back()}
          >
            <AiOutlineArrowLeft />
          </button>
        </div>
        <h1 className=" absolute top-1/2 font-normal font-serif uppercase text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white text-center -translate-y-28}">
          about us
        </h1>
      </div>
      <div className="w-full">
        <div className="pb-20 flex flex-col gap-y-10">
          <div className="grid grid-cols-1 md:grid-cols-1 justify-between w-full lg:px-10">
            <div className="p-10 lg:w-[75%] w-[90%] mx-auto rounded-xl bg-[#1F2122]}">
              <p className="text-white text-center font-thin">
                Dealing with the challenges of today requires problem-solvers
                who bring different perspectives and are willing to take risks.
                WE emerged out of a pursuit to inspire and support the
                Palestinian people during their struggle to freedom and SO CAN
                YOU. We’re an organization driven by progressive ideas, bold
                actions, and a strong foundation of support. Contact us to learn
                more and get involved. Dealing with the challenges of today
                requires problem-solvers who bring different perspectives and
                are willing to take risks. WE emerged out of a pursuit to
                inspire and support the Palestinian people during their struggle
                to freedom and SO CAN YOU. We’re an organization driven by
                progressive ideas, bold actions, and a strong foundation of
                support. Contact us to learn more and get involved. Dealing with
                the challenges of today requires problem-solvers who bring
                different perspectives and are willing to take risks. WE emerged
                out of a pursuit to inspire and support the Palestinian people
                during their struggle to freedom and SO CAN YOU. We’re an
                organization driven by progressive ideas, bold actions, and a
                strong foundation of support. Contact us to learn more and get
                involved.
              </p>
            </div>
          </div>
        </div>
        <div className="py-6 inset-x-0 absolute bottom-0">
          <p className="text-xl text-white font-thin tracking-wide text-center">
            You Can Save A Life Today
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
