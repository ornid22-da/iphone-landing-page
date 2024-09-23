import { navLists } from "../constants";
import { appleImg, bagImg, searchImg } from "../utils";

const Navbar = () => {
  return (
    <header className="w-full flex justify-between items-center py-5 px-5 sm:px-10">
      <nav className="flex w-full screen-max-width">
        <img
          className="cursor-pointer hover:scale-125 transition-all"
          src={appleImg}
          alt="Apple"
          width={14}
          height={14}
        />

        <div className="flex flex-1 justify-evenly max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="text-xs cursor-pointer text-gray hover:text-white hover:scale-125 transition-all"
            >
              {nav}{" "}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 xl:gap-12 max-sm:justify-end max-sm:flex-1 lg:gap-10 md:gap-5">
          <img
            className="cursor-pointer hover:scale-125 transition-all"
            src={searchImg}
            alt="search"
            width={14}
            height={14}
          />
          <img
            className="cursor-pointer hover:scale-125 transition-all"
            src={bagImg}
            alt="bag"
            width={14}
            height={14}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
