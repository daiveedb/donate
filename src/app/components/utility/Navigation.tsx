"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/app/Data";
import { usePathname } from "next/navigation";
const Navigation = () => {
  const pathname = usePathname();
  return (
    <div className="flex w-full h-[70px] bg-[#ffffffe0] justify-between items-center px-20 fixed z-30">
      <div className="w-24 h-16 relative">
        <Image alt="" src={"/images/logodonate.png"} fill />
      </div>
      <div className="flex gap-x-6">
        {navLinks.map((link: any) => {
          return (
            <Link href={link.link} key={link.id}>
              <div>
                <p
                  className={`font-semibold tracking-wide text-lg navlink ${
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
      <div>
        <button className="bg-palGreen p-3 rounded cursor-pointer text-white w-[150px] hover:bg-green-700 transition-all ">
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default Navigation;
