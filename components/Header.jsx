function Header() {
  return (
    <div>
      <header className="flex justify-between items-center px-30 py-7 mt-4">
        <div>
          <h1 className="text-6xl font-light text-neutral-600 w-130">
            Your Food court at home
          </h1>
          <div className="flex items-center mt-20 gap-5">
            <span className="hover:-translate-y-1 transition cursor-default w-27 text-center border-2 border-yellow-300 rounded">
              <h2>Delivery</h2>
              <p>Order in</p>
            </span>
            <span className="hover:-translate-y-1 transition cursor-default w-27 text-center border-2 border-yellow-300 rounded">
              <h2>Takeout</h2>
              <p>Grab and go</p>
            </span>
          </div>
        </div>
        <div>
          <img
            className="w-145 rotatable"
            src="https://png.pngtree.com/png-clipart/20250301/original/pngtree-a-plate-of-food-with-rice-png-image_20541271.png"
            alt=""
          />
        </div>
      </header>

      <div className="flex justify-start items-center gap-8 bg-white px-10 py-4 shadow-2xl shadow-neutral-200 border-t-[1px] border-neutral-300 mb-20">
        <p className="w-44">Delivery in all paris in less than 30 minutes</p>
        <p className="w-44">Free delivery from 29 euros</p>
        <p className="w-44">Only fresh and French products</p>
      </div>
    </div>
  );
}

export default Header;
