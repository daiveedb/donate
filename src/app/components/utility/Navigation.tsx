"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/app/Data";
import { usePathname } from "next/navigation";
import { Menu } from "@headlessui/react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
const Navigation = () => {
  const pathname = usePathname();
  return (
    <div className="flex w-full h-[90px] bg-[#ffffffe0] justify-between items-center px-2 sm:px-5 md:px-10 lg:px-20 fixed z-30">
      <div className="flex flex-row md:flex-col items-center gap-y-2">
        <div className="w-16 h-12 relative">
          <Image alt="" src={"/images/logodonate.png"} fill />
        </div>
        <h1 className="text-sm">Support Palestinian Hope</h1>
      </div>
      <div className="sm:flex gap-x-3 sm:gap-x-6 hidden">
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
      <div className="sm:hidden pr-4">
        <Menu>
          {({ open }) => (
            <div className="relative ">
              <Menu.Button className={"scale-150"}>
                {open ? <IoClose /> : <IoMenu />}
              </Menu.Button>
              <Menu.Items
                className={
                  "absolute right-0 bottom-0 translate-y-full bg-green-200 p-5 border rounded"
                }
              >
                {navLinks.map((link: any) => {
                  return (
                    <Menu.Item key={link.id}>
                      <Link href={link.link}>
                        <div>
                          <p
                            className={`font-semibold tracking-wide text-sm md:text-lg navlink mb-5 ${
                              link.link == pathname ? "text-palGreen" : ""
                            }`}
                          >
                            {link.title}
                          </p>
                        </div>
                      </Link>
                    </Menu.Item>
                  );
                })}
              </Menu.Items>
            </div>
          )}
        </Menu>
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
