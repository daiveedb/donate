"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Jaga2Icon from "../components/icons/Jaga2Icon";
import { BiMoney } from "react-icons/bi";
import { AiOutlineShareAlt } from "react-icons/ai";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiLogoBitcoin, BiCopy } from "react-icons/bi";
import { log } from "console";

const Page = () => {
  const handleSpread = () => {
    toast("Link Copied to clipboard");
    navigator.clipboard.writeText("https://donatePalestine.com");
  };
  const handleCopyQr = () => {
    toast("Copied to clipboard");
    navigator.clipboard.writeText(
      "bc1qw676vmuz342ud4elwz8epfk73l n4qfamikf2ht"
    );
  };
  const [donatedValue, setDonatedValue] = useState<string>("");
  const [donatePage, setDonatePage] = useState<number>(1);
  const [anonymous, setAnonymous] = useState<boolean>();

  // useEffect(() => {
  //   var form: any = document.getElementById("donor-details");
  //   var elements = form.elements;
  //   for (var i = 0, len = elements.length; i < len; ++i) {
  //     elements[i].readOnly = true;
  //   }
  // }, [anonymous]);
  return (
    <div className="py-[100px] pt-0 px-5 sm:px-20 md:px-5 lg:px-[150px] overflow-x-hidden">
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

      <section className=" p-4 w-full lg:p-10 bg-gray-100">
        <h2 className="text-center text-3xl font-bold capitalize">
          two ways to contribute
        </h2>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 p-4 lg:p-10 gap-x-10">
          <div>
            <div className="flex gap-x-2 items-center text-2xl pb-2">
              <p className="text-palGreen md:text-xl lg:text-4xl">
                <BiLogoBitcoin />
              </p>
              <h3>Donate Crypto</h3>
            </div>
            <p className="tracking-wide py-4 md:text-sm lg:text-base">
              The fastest way to support Soldiers and Army Families. Make a
              one-time or monthly recurring donation with a credit card, eCheck
              or PayPal.Your generous support provides humanitarian aid to
              people in need around the world. This includes those struggling to
              survive turmoil in Palestine
            </p>
            <div className="flex flex-col justify-start py-9">
              <div className="flex gap-x-2 items-center text-2xl pb-2 justify-start">
                <p className="md:text-xl lg:text-4xl text-palGreen">
                  <AiOutlineShareAlt />
                </p>
                <h3>Spread the word</h3>
              </div>
              <p className="tracking-wide py-4 text-left md:text-sm lg:text-base">
                The fastest way to support Soldiers and Army Families. Make a
                one-time or monthly recurring donation with a credit card,
                eCheck or PayPal.
              </p>
              <div className="flex justify-start">
                <button
                  className="bg-palGreen p-3 rounded cursor-pointer text-white w-[200px] hover:bg-green-700 transition-all"
                  onClick={handleSpread}
                >
                  Spread it
                </button>
                <ToastContainer hideProgressBar />
              </div>
            </div>
            {/* <Link href={"/give"}>
              <button className="bg-palGreen p-3 rounded cursor-pointer text-white w-[200px] hover:bg-green-700 transition-all ">
                Donate Now
              </button>
            </Link> */}
          </div>

          <div className="h-[450px] w-full md:w-[90%] md:mx-auto border rounded p-4 relative overflow-x-hidden bg-white shadow-lg">
            <div className="w-full bg-palGreen rounded h-[20%] flex justify-center items-center">
              <h1 className="text-white text-2xl">Crypto To Hope</h1>
            </div>
            {donatePage === 1 ? (
              <div>
                <form action="" className="py-10">
                  <div className="bg-gray-100 border flex flex-col gap-x-2 items-center rounded p-2">
                    <div className="w-full flex gap-x-2 items-center">
                      <p className="text-palGreen md:text-xl lg:text-4xl">
                        <BiLogoBitcoin />
                      </p>
                      <input
                        onWheel={() => blur()}
                        className="w-full"
                        type="number"
                        placeholder="0.000029btc = $1000 "
                        onChange={(e) => setDonatedValue(e.target.value)}
                        value={donatedValue}
                        min={0}
                      />
                    </div>
                    <div></div>
                  </div>
                </form>
                <div className="w-full left-0 -translate-1/2 absolute bottom-5 flex justify-center">
                  <button
                    className="w-[90%] p-3 bg-palGreen text-white rounded"
                    onClick={() => {
                      if (Math.ceil(donatedValue as any) > 0 && donatedValue) {
                        setDonatePage(donatePage + 1);
                      }
                    }}
                  >
                    Next
                  </button>
                </div>
              </div>
            ) : donatePage === 2 ? (
              <div className="slide-in">
                <form
                  id="donor-details"
                  action=""
                  className="pt-4 grid grid-cols-1 gap-y-2"
                  onSubmit={() => setDonatePage(donatePage + 1)}
                >
                  <div className="flex justify-between items-center pr-1">
                    <p>Donate Anonymously</p>
                    <input
                      type="checkbox"
                      className="w-4 h-4"
                      onChange={(e) => {
                        setAnonymous(e.target.checked);
                      }}
                    />
                  </div>
                  <fieldset
                    disabled={anonymous}
                    className="grid grid-cols-1 gap-y-2"
                  >
                    <input
                      className="w-full"
                      type="text"
                      placeholder="Enter Your Full Name"
                      required
                    />
                    <input
                      className="w-full"
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                    <div className="flex justify-between gap-x-2">
                      <input
                        className="w-full"
                        type="text"
                        placeholder="Country"
                        required
                      />
                      <input
                        className="w-full"
                        type="text"
                        placeholder="City"
                        required
                      />
                    </div>
                    <input
                      className="w-full"
                      type="number"
                      placeholder="Phone Number"
                      required
                    />
                  </fieldset>
                  <div className="flex gap-x-2">
                    <button
                      type="button"
                      className="w-[90%] p-3 bg-palGreen text-white rounded-lg"
                      onClick={() => {
                        setDonatePage(donatePage - 1);
                      }}
                    >
                      Previous
                    </button>
                    {anonymous ? (
                      <button
                        type="button"
                        className="w-[90%] p-3 bg-palGreen text-white rounded-lg"
                        onClick={() => {
                          setDonatePage(donatePage + 1);
                        }}
                      >
                        Next
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="w-[90%] p-3 bg-palGreen text-white rounded-lg"
                      >
                        Next
                      </button>
                    )}
                  </div>
                </form>
              </div>
            ) : (
              <div className="slide-in">
                <div className="w-full h-full my-3 p-5 flex justify-center flex-col items-center">
                  <p className="text-sm text-center pb-3">
                    Use the address below to donate <b>{donatedValue} BTC</b>{" "}
                    from your wallet.
                  </p>
                  <div className="relative w-[150px] h-[150px]">
                    <Image alt="qr" src={"/images/qrCodeDonate.jpeg"} fill />
                  </div>
                  <div className="p-3 w-full border rounded my-2 flex items-center gap-x-3 ">
                    <div
                      className="cursor-pointer hover:bg-gray-100"
                      onClick={handleCopyQr}
                    >
                      <BiCopy />
                    </div>
                    <div className="overflow-x-scroll donate-code">
                      <p className="text-sm">
                        bc1qw676vmuz342ud4elwz8epfk73ln4qfamikf2ht
                      </p>
                    </div>
                  </div>
                  <p className="text-[10px] text-palRed text-center">
                    Send only BTC to this address. Sending other unsupported
                    tokens or NFTs to this address may result in the loss of
                    your donation. The address will expire after 180 days if
                    unused.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* <div className="flex flex-col justify-start">
            <div className="flex gap-x-2 items-center text-2xl pb-4 justify-start">
              <p className="md:text-xl lg:text-4xl text-palGreen">
                <AiOutlineShareAlt />
              </p>
              <h3>Spread the word</h3>
            </div>
            <p className="tracking-wide py-4 text-left md:text-sm lg:text-base">
              The fastest way to support Soldiers and Army Families. Make a
              one-time or monthly recurring donation with a credit card, eCheck
              or PayPal.
            </p>
            <div className="flex justify-start">
              <button
                className="bg-palGreen p-3 rounded cursor-pointer text-white w-[200px] hover:bg-green-700 transition-all"
                onClick={handleSpread}
              >
                Spread it
              </button>
              <ToastContainer hideProgressBar />
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Page;
