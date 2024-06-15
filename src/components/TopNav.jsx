import { useState } from "react";

import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill, BsPerson } from "react-icons/bs";
import { FaGoogleWallet } from "react-icons/fa";
import { MdHelp, MdOutlineFavorite } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";

function TopNav() {
  const [sideNav, setSideNav] = useState(false);
  return (
    <div className="mx-auto flex max-w-[1520px] items-center justify-between px-4">
      <div className="flex items-center">
        <div className="cursor-pointer" onClick={() => setSideNav(!sideNav)}>
          <AiOutlineMenu size={25} />
        </div>
        <h1 className="px-2 text-2xl sm:text-3xl lg:text-4xl">
          Green
          <span className="font-bold">Haven</span>
        </h1>
        <div
          style={{ backgroundColor: "var(--color-secondary-200)" }}
          className="hidden items-center rounded-full p-1 text-[14px] lg:flex"
        >
          <p
            style={{
              backgroundColor: "var(--color-primary-700)",
              color: "var(--color-white)",
            }}
            className="rounded-full p-2 font-bold"
          >
            Free
          </p>
          <p className="p-2 font-bold">Delivery</p>
        </div>
      </div>
      <div
        style={{ backgroundColor: "var(--color-secondary-200)" }}
        className="flex w-[200px] items-center rounded-full px-2 sm:w-[400px] lg:w-[500px]"
      >
        <AiOutlineSearch size={25} />
        <input
          type="text"
          className="w-full bg-transparent p-2 focus:outline-none"
          placeholder="search plants"
        />
      </div>
      <button
        style={{
          backgroundColor: "var(--color-primary-700)",
          color: "var(--color-white)",
        }}
        className="hidden items-center rounded-full py-2 sm:flex"
      >
        <BsFillCartFill />
        Cart
      </button>
      {sideNav && (
        <div
          style={{ backgroundColor: "var(--color-black-opacity-60)" }}
          className="fixed left-0 top-0 z-10 h-screen w-full duration-300"
          onClick={() => setSideNav(!sideNav)}
        ></div>
      )}
      <aside
        style={{ backgroundColor: "var(--color-white)" }}
        className={`fixed top-0 z-10 h-screen w-[300px] duration-300 ${sideNav ? "left-0" : "left-[-100%]"}`}
      >
        <AiOutlineClose
          onClick={() => setSideNav(!sideNav)}
          size={25}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="p-4 text-2xl">
          Green <span style={{ color: "var(--color-orange-700)" }}>Haven</span>
        </h2>
        <nav>
          <ul
            style={{ color: "var(--color-secondary-900)" }}
            className="flex flex-col p-4"
          >
            <li className="flex py-4 text-xl">
              <BsPerson
                style={{
                  backgroundColor: "var(--color-primary-400)",
                  color: "var(--color-white)",
                }}
                size={25}
                className="mr-4 rounded-full p-1"
              />
              <a href="#myAccount">My Account</a>
            </li>
            <li className="flex py-4 text-xl">
              <TbTruckReturn
                style={{
                  backgroundColor: "var(--color-primary-400)",
                  color: "var(--color-white)",
                }}
                size={25}
                className="mr-4 rounded-full p-1"
              />
              <a href="#about">Delivery</a>
            </li>
            <li className="flex py-4 text-xl">
              <MdOutlineFavorite
                style={{
                  backgroundColor: "var(--color-primary-400)",
                  color: "var(--color-white)",
                }}
                size={25}
                className="mr-4 rounded-full p-1"
              />
              <a href="#services">My Favorite</a>
            </li>
            <li className="flex py-4 text-xl">
              <FaGoogleWallet
                style={{
                  backgroundColor: "var(--color-primary-400)",
                  color: "var(--color-white)",
                }}
                size={25}
                className="mr-4 rounded-full p-1"
              />
              <a href="#contact">My Wallet</a>
            </li>
            <li className="flex py-4 text-xl">
              <MdHelp
                style={{
                  backgroundColor: "var(--color-primary-400)",
                  color: "var(--color-white)",
                }}
                size={25}
                className="mr-4 rounded-full p-1"
              />
              <a href="#contact">Help</a>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}

export default TopNav;
