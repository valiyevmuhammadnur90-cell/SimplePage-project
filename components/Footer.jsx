import Image from "next/image";
import { IoMdArrowDown } from "react-icons/io";

function Footer() {
  return (
    <footer className="bg-[#3f4255] text-white py-10 px-30 cursor-default">
      <div className="flex justify-between items-center mb-20">
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-2xl">
            <kbd className="border-b-4 border-b-yellow-300">yellow</kbd>kitchen
          </h2>

          <span className="w-72 bg-[#d4d7e5] h-[1px] my-[28px]"></span>

          <div className="flex items-center gap-5">
            <Image src="/images/appstore.png" alt="" width={78} height={27} />
            <Image src="/images/googleplay.png" alt="" width={78} height={27} />
          </div>
        </div>

        <div className="flex items-start gap-12">
          <ul>
            <li className="font-[600] text-2xl mb-1.5">About us</li>
            <li id="li">Concept</li>
            <li id="li">Franchise</li>
            <li id="li">Business</li>
            <li id="li">Restaurant signup</li>
            <li id="li">For Investors</li>
          </ul>
          <ul>
            <li className="font-[600] text-2xl mb-1.5">Get help</li>
            <li id="li">Read FAQs</li>
            <li id="li">Restaurants</li>
            <li id="li">Specialities</li>
            <li id="li">Sign up to deliver</li>
            <li id="li" className="flex items-center gap-1">
              English <IoMdArrowDown />
            </li>
          </ul>
          <ul>
            <li className="font-[600] text-2xl mb-1.5">Contact us</li>
            <li id="li">Yellow kitchen Paris 11</li>
            <li id="li">69 avenue de la Republique 75011 Paris</li>
            <li id="li">0800 111 126</li>
            <li id="li">contact@yellowkitchens.com</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Image src="/images/logos.png" alt="" width={120} height={20} />

        <div className="flex items-center gap-[60px]">
          <p>Privacy Policy</p>
          <p>Terms</p>
          <p id="p">© 2020 Yellow kitchen</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
