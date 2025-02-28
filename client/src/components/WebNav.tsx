import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import CodeRace_50x50 from "../assets/coderace_70X70.png";

export default function WebNav() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-bold hover:bg-opacity-80 duration-300"
      >
        <Link to="/about" className="flex items-center text-white">
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-bold hover:bg-opacity-80 duration-300"
      >
        <Link to="/crypto" className="flex items-center text-white">
          Crypto Race
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-bold hover:bg-opacity-80 duration-300"
      >
        <Link to="/quicksort" className="flex items-center text-white">
          QuickSort Race
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-bold hover:bg-opacity-80 duration-300"
      >
        <Link to="/fetch" className="flex items-center text-white">
          Fetch Race
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar color="blue" className=" mx-auto max-w-screen-xl">
      <div className="container mx-auto flex items-center justify-between text-white">
        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <Link to="/">
            <img src={CodeRace_50x50} className="h-10" alt="logo" />
          </Link>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-white hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </MobileNav>
    </Navbar>
  );
}
