import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="py-[80px] md:px-5 lg:px-20">
      <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2">
        <div className="bg-[#f5f5f5ff] rounded p-5 w-full">
          <h1 className="text-4xl font-bold pt-4">Saving Lives</h1>
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[200px] lg:h-[300px] my-4">
            <Image
              alt=""
              className="rounded-md"
              src={"/images/savingLives.jpg"}
              fill
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold">Instructions:</h2>
            <ul className="list-disc p-4 text-lg">
              <li>
                <p>Scan the QR Code on below</p>
              </li>
              <li>
                <p>Pay with the payment option of your choice</p>
              </li>
              <li>
                <p>Celebrate as you have just saved a life</p>
              </li>
            </ul>
            <p className="text-lg">
              If you have any questions, please do not hesitate to reach out to
              us{" "}
              <span className="text-palRed font-bold">@mailus@gmail.com</span>{" "}
              or{" "}
              <Link href={"/contact"} className="text-palRed underline">
                Contact us
              </Link>
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full relative p-5 h-[500px]">
            <Image alt="qr-code" src={"/images/donateQR.svg"} fill />
          </div>
          <h2 className="text-xl sm:text-3xl font-bold w-[80%] text-center mx-auto py-3">
            Scan this QR Code to Donate to Palestine
          </h2>
        </div>
      </div>
    </div>
  );
};

export default page;
