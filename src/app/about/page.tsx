import React from "react";
import JagaIcon from "../components/icons/JagaIcon";
import Image from "next/image";

const page = () => {
  return (
    <div className="pt-[70px] px-3 sm:px-5 md:px-10 lg:px-16 xl:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 p-2 sm:p-4 md:p-8 lg:p-12 xl:p-20 w-full">
        <div className="mb-5">
          <div className="relative">
            <h3 className="text-3xl text-center md:text-left">
              Our Mission By 2024
            </h3>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 -z-10">
              <JagaIcon height={20} />
            </div>
          </div>
          <p className="py-4 text-center md:text-left">
            Our main goal is to save and plant as many trees as we can and also
            provide each customer with the opportunity to turn their unwanted
            textbooks into profit. Donating books allows a chance for a second
            life, giving someone else the opportunity to read and enjoy the
            book. It’s also an environmentally-conscious decision since
            recycling prevents them from ending up in a landfill. Our main goal
            is to save and plant as many trees as we can and also provide each
            customer with the opportunity to turn their unwanted textbooks into
            profit.
          </p>
          <div className="flex justify-center w-full md:justify-start">
            <button className="bg-palRed p-3 rounded text-white w-[200px] hover:bg-palRed hover:text-white transition-all">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-full sm:px-6">
          <div className="w-full h-[300px] relative">
            <Image
              alt="protest"
              className="rounded-lg"
              src={"/images/protest3.jpg"}
              fill
            />
          </div>
        </div>
      </div>
      <div>
        <div className="grid sm:grid-cols-3 justify-items-center text-center pb-5">
          <div className="flex flex-col">
            <h3 className="text-3xl font-bold text-palRed">$78,000</h3>
            <h3>Raised</h3>
          </div>
          <div className="flex flex-col">
            <h3 className="text-3xl font-bold text-palRed">4,000+</h3>
            <h3>Rescued</h3>
          </div>
          <div className="flex flex-col">
            <h3 className="text-3xl font-bold text-palRed">200,000+</h3>
            <h3>Fed</h3>
          </div>
          {/* <div className="flex flex-col">
            <h3></h3>
            <h3>Raised</h3>
        </div> */}
        </div>
        <h2 className="text-xl md:text-4xl text-center">Our Partners</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 pt-2 md:pt-8 gap-8 justify-items-center pb-5">
          <div className="relative w-[60%] h-[50px] mx-auto">
            <Image alt="partner" src={"/images/partner1.png"} fill />
          </div>
          <div className="relative w-[60%] h-[50px] mx-auto">
            <Image alt="partner" src={"/images/partner2.png"} fill />
          </div>
          <div className="relative w-[60%] h-[50px] mx-auto">
            <Image alt="partner" src={"/images/partner3.png"} fill />
          </div>
          <div className="relative w-[60%] h-[50px] mx-auto">
            <Image alt="partner" src={"/images/partner4.png"} fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
