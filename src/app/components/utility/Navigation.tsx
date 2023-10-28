"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/app/Data";
import { usePathname } from "next/navigation";
const Navigation = () => {
  const pathname = usePathname();
  return (
    <div className="flex w-full h-[70px] bg-[#ffffffe0] justify-between items-center px-2 sm:px-5 md:px-10 lg:px-20 fixed z-30">
      <div className="w-24 h-16 relative">
        <Image alt="" src={"/images/logodonate.png"} fill />
      </div>
      <div className="flex gap-x-3 sm:gap-x-6">
        {navLinks.map((link: any) => {
          return (
            <Link href={link.link} key={link.id}>
              <div>
                <p
                  className={`font-semibold tracking-wide text-sm md:text-lg navlink ${
                    link.link == pathname ? "text-palGreen" : ""
                  }`}
                >
                  {link.title}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="hidden md:block">
        <Link href={"/donate"}>
          <button className="bg-palGreen py-2 rounded cursor-pointer text-white w-[100px] sm:w-[150px] hover:bg-green-700 transition-all text-sm">
            Donate Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
