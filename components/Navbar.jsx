import { CiMenuBurger, CiShoppingBasket, CiUser } from "react-icons/ci";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-30 py-4">
      <h2 className="text-2xl">
        <kbd className="border-b-4 border-b-yellow-300">yellow</kbd>kitchen
      </h2>
      <div className="flex items-center gap-10">
        <button className="flex items-center gap-0.5 text-[18px]">
          <CiUser className="text-[18px]" />
          Log in
        </button>
        <button className="flex items-center gap-0.5 text-[18px]">
          <CiShoppingBasket className="text-[20px]" /> 0
        </button>
        <CiMenuBurger className="text-[20px]" />
      </div>
    </nav>
  );
}

export default Navbar;
