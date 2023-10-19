"use client";
import Image from "next/image";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <div className="w-screen min-h-screen max-h-max bg-black">
      <div className="bg-[url('/images/protest3.jpg')] bg-center bg-cover bg-no-repeat w-full h-[50vh] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black">
          <button
            className="text-white text-8xl absolute top-5 left-5"
            onClick={() => router.back()}
          >
            <AiOutlineArrowLeft />
          </button>
        </div>
      </div>
      <div className="w-full">
        <h1 className="font-black uppercase text-8xl text-white text-center -translate-y-28">
          about us
        </h1>
        <div className="pb-20 ">
          <div className="grid grid-cols-2 justify-between w-full px-10">
            <div className="p-5 w-[75%] mx-auto rounded-xl">
              <p className="text-white font-thin">
                Dealing with the challenges of today requires problem-solvers
                who bring different perspectives and are willing to take risks.
                WE emerged out of a pursuit to inspire and support the
                Palestinian people during their struggle to freedom and SO CAN
                YOU. We’re an organization driven by progressive ideas, bold
                actions, and a strong foundation of support. Contact us to learn
                more and get involved.
              </p>
            </div>
            <div>
              <Image alt="" src={""} />
            </div>
          </div>
          <div className="grid grid-cols-2 justify-between w-full px-10">
            <div>
              <Image alt="" src={""} />
            </div>
            <div className="p-5 w-[75%] mx-auto rounded-xl">
              <p className="text-white font-thin">
                Dealing with the challenges of today requires problem-solvers
                who bring different perspectives and are willing to take risks.
                WE emerged out of a pursuit to inspire and support the
                Palestinian people during their struggle to freedom and SO CAN
                YOU. We’re an organization driven by progressive ideas, bold
                actions, and a strong foundation of support. Contact us to learn
                more and get involved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
