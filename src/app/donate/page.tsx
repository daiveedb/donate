"use client";
import Image from "next/image";
import React from "react";
import Jaga2Icon from "../components/icons/Jaga2Icon";
import { BiMoney } from "react-icons/bi";
import { AiOutlineShareAlt } from "react-icons/ai";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const handleSpread = () => {
    toast("Link Copied to clipboard");
    navigator.clipboard.writeText("https://donatePalestine.com");
  };
  return (
    <div className="py-[80px] px-5 sm:px-20 md:px-5 lg:px-[150px] overflow-x-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 pb-10">
        <div className="flex justify-center flex-col">
          <h1 className=" text-4xl sm:text-5xl md:text-6xl font-black uppercase ">
            Donate
          </h1>
          <p className="text-lg w-[80%] tracking-tight py-5">
            Every dollar you donate goes a long way in saving a life and we are
            here to make sure that exactly that happens to all the families in
            Palesstine
          </p>
        </div>
        <div className="w-full py-10">
          <div className="w-full relative h-[350px]">
            <Image
              alt="aid"
              className="rounded-lg z-20"
              src={"/images/donateImg2.jpg"}
              fill
            />
            <div className="absolute -top-12 -left-12 z-10">
              <Jaga2Icon />
            </div>
            <div className="absolute -bottom-12 -right-12 z-10">
              <Jaga2Icon />
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[#f5f5f5ff] p-4 lg:p-10">
        <h2 className="text-center text-3xl font-bold capitalize">
          two ways to contribute
        </h2>
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 p-4 lg:p-10 gap-x-5">
          <div>
            <div className="flex gap-x-2 items-center text-2xl pb-4">
              <p className="text-palGreen md:text-xl lg:text-4xl">
                <BiMoney />
              </p>
              <h3>Donate Cash</h3>
            </div>
            <p className="tracking-wide py-4 md:text-sm lg:text-base">
              The fastest way to support Soldiers and Army Families. Make a
              one-time or monthly recurring donation with a credit card, eCheck
              or PayPal.
            </p>
            <Link href={"/give"}>
              <button className="bg-palGreen p-3 rounded cursor-pointer text-white w-[200px] hover:bg-green-700 transition-all ">
                Donate Now
              </button>
            </Link>
          </div>
          <div className="flex flex-col justify-end">
            <div className="flex gap-x-2 items-center text-2xl pb-4 justify-end">
              <p className="md:text-xl lg:text-4xl text-palGreen">
                <AiOutlineShareAlt />
              </p>
              <h3>Spread the word</h3>
            </div>
            <p className="tracking-wide py-4 text-right md:text-sm lg:text-base">
              The fastest way to support Soldiers and Army Families. Make a
              one-time or monthly recurring donation with a credit card, eCheck
              or PayPal.
            </p>
            <div className="flex justify-end">
              <button
                className="bg-palGreen p-3 rounded cursor-pointer text-white w-[200px] hover:bg-green-700 transition-all"
                onClick={handleSpread}
              >
                Spread it
              </button>
              <ToastContainer hideProgressBar />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
