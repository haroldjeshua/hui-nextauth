import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import Logo from "../public/assets/logo.png";
import { Menu, Transition } from "@headlessui/react";
import { BsPerson, BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useSession, signIn, signOut } from "next-auth/react";

function classNames(...classes) {
  return classes.filter(Boolean).join("");
}

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const { data: session } = useSession();

  console.log(session);

  return (
    <div className="fixed h-14 w-full flex flex-nowrap  item-center mb-[2px] p-2 bg-[#121212] z-10">
      {/* Left Side */}
      <div className="flex grow items-center justify-start">
        <Link href="/" className="flex">
          <Image
            src={Logo}
            alt="/"
            width="32"
            height="32"
            className="cursor-pointer z-10"
          />
        </Link>
        <p className="p-4">Browse</p>
        <div className="p-4">
          <Menu as="div" className="relative text-left">
            <div className="flex">
              <Menu.Button>
                <BsThreeDotsVertical size={20} />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-[#121212] ring-1 ring-white ring-opacity-5 focus:outline-none">
                <div className="py-1 flex flex-col">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#!"
                        className={classNames(
                          active
                            ? "bg-gray-500 text-gray-100"
                            : "text-gray-200",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Account Settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#!"
                        className={classNames(
                          active
                            ? "bg-gray-500 text-gray-100"
                            : "text-gray-200",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Support
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#!"
                        className={classNames(
                          active
                            ? "bg-gray-500 text-gray-100"
                            : "text-gray-200",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        License
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      {/* Middle*/}
      <div className="hidden md:flex grow-[2] items-center justify-center">
        <div className="bg-gray-500 text-white flex justify-between items-center max-w-[400px] w-full m-auto p-2 rounded-2xl">
          <div>
            <input
              type="text"
              className="bg-transparent border-none text-white focus:outline-none"
              placeholder="Search"
            />
          </div>
          <div>
            <BsSearch />
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="hidden md:flex grow items-center justify-end">
        {session ? (
          <div className="flex items-center gap-2">
            <Link href="/account">
              <div>
                <p className="cursor-pointer">Welcome, {session.user.name}</p>
              </div>
            </Link>
            <Menu as="div" className="relative text-left">
              <div className="flex">
                <Menu.Button>
                  <Image
                    src={session.user.image}
                    alt="/"
                    width="32"
                    height="32"
                    className="rounded-full"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#121212] ring-1 ring-white ring-opacity-5 focus:outline-none">
                  <div className="py-1 flex flex-col">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/account"
                          className={classNames(
                            active
                              ? "bg-gray-500 text-gray-100"
                              : "text-gray-200",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Account
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <p
                          onClick={() => signOut()}
                          className={classNames(
                            active
                              ? "bg-gray-500 text-gray-100"
                              : "text-gray-200",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Logout
                        </p>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link href="/account">
              <button className="px-4 py-[8px] rounded-lg font-bold bg-[#9147ff]">
                Account
              </button>
            </Link>
            <BsPerson size={30} />
          </div>
        )}
      </div>

      {/* Hamburger Menu */}
      <div
        onClick={handleNav}
        className="flex flex-col justify-center items-center md:hidden cursor-pointer z-10"
      >
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "md:hidden fixed top-0 left-0 w-full h-screen bg-[#121212] flex justify-center items-center ease-in duration-300"
            : "md:hidden fixed top-[-100%] left-0 w-full h-screen bg-[#121212] flex justify-center items-center ease-in duration-300"
        }
      >
        <ul className="text-center">
          <li className="p-4 text-3xl font-bold">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 text-3xl font-bold">
            <Link href="/">Live Channels</Link>
          </li>
          <li className="p-4 text-3xl font-bold">
            <Link href="/">Top Categories</Link>
          </li>
          <li className="p-4 text-3xl font-bold">
            <Link href="/">Account</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
