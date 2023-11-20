import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiLogoBitcoin, BiCopy } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="bg-[#4a4f53ff] text-[#c9cbccff] w-full py-14 p-28 ">
      <div className="flex flex-col md:flex-row justify-between items-start gap-x-8">
        <div className="flex-1">
          <p className="text-2xl font-semibold py-2">
            An organization you can trust
          </p>
          <p>
            When you give, 86% of every dollar goes straight to our mission.
            Find out more.
          </p>
          <Link href={"/donate"}>
            <div className="flex items-center gap-x-2 py-2">
              <p className="text-[#f7931aff] md:text-xl lg:text-4xl">
                <BiLogoBitcoin />
              </p>
              <p className="underline">We accept cryptocurrency</p>
            </div>
          </Link>
          <div className="flex gap-x-8 py-3">
            <div className="w-20 h-10 relative">
              <Image alt="logo" src={"/images/bbb-logo.svg"} fill />
            </div>
            <div className="w-20 h-10 relative">
              <Image
                alt="logo"
                src={"/images/Charity-Navigator-Sm-Logo.png"}
                fill
              />
            </div>
            <div className="w-20 h-10 relative">
              <Image
                alt="logo"
                src={"/images/Charity-Watch-Sm-Logo.png"}
                fill
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Link href={"/contact"}>
            <p className="text-2xl font-semibold underline py-2">Contact us</p>
          </Link>
          <p>
            Address : Level 20, 48 Burk Gate Towers - Sheikh Zayed rd | Mon-Fri
            9:00am-5:00pm EST Donor Services # 1.800.728.3843 | Mon-Fri
            8:00am-5:00pm EST Report fraud, abuse, wrongdoing
          </p>
        </div>
      </div>
      <div className="py-2 flex justify-center items-center">
        Privacy Policy | Terms of Use | Legal Disclosure | Donate | Contact Us |
        About
      </div>
      <div className="flex justify-center items-center">
        <p className="text-[#818487ff] text-sm">
          &copy; 2023 Save the Children Save the Children Federation, Inc. is a
          501(c)(3) organization. Gifts are deductible to the full extent
          allowable under IRS regulations.
        </p>
      </div>
    </div>
  );
};

export default Footer;
