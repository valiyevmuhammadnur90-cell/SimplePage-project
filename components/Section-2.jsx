"use client";
import { message } from "antd";

function Section_2() {
  const sendMe = () => {
    return message.success("Location for delivery sended!");
  };

  return (
    <section className="bg-[#f2f4fa] py-20 px-30 flex justify-between items-center mb-16">
      <div>
        <h1 className="text-[32px] font-light tracking-[5px] text-neutral-600">
          Your nearest restaurants
        </h1>
        <p className="text-[#3f4255] text-[16px] mt-[20px] w-[350px]">
          Each kitchen works with its own delivery area to deliver food to you
          as soon as possible
        </p>
      </div>
      <div className="flex items-center gap-2">
        <input
          className="px-[22px] py-6"
          type="text"
          placeholder="Enter delivery address"
        />
        <button
          onClick={sendMe}
          className="py-6 px-[22px] rounded-[4px] bg-[#ffe145] text-[#b79c10] hover:bg-[#e9c928] transition"
        >
          Send
        </button>
      </div>
    </section>
  );
}

export default Section_2;
