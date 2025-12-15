import Image from "next/image";

function Section_1() {
  return (
    <section>
      <div className="flex justify-between items-center px-30 mb-14">
        <h1 className="text-[38px] font-light text-neutral-800">Restaurants</h1>
        <button className="bg-[#f2f4fA] px-4 py-2 rounded-2xl text-[#9093a6] hover:bg-[#d6d7dd] transition">
          show all
        </button>
      </div>

      <div className="flex justify-between items-center px-30 mb-16">
        <div className="">
          <Image
            src="/images/burger.jpg"
            alt=""
            className="h-[260px] rounded-2xl mb-5 hover:-translate-y-[4px] hover:translate-x-[4px] transition"
            width={290}
            height={60}
          />
          <p className="tracking-widest text-2xl text-center text-neutral-700">
            BURGER D'LICE
          </p>
        </div>
        <div className="">
          <Image
            src="/images/pastifigio.jpg"
            alt=""
            className="h-[260px] rounded-2xl mb-5 hover:-translate-y-[4px] hover:translate-x-[4px] transition"
            width={290}
            height={60}
          />
          <p className="italic font-light text-2xl text-center text-neutral-700">
            II. PASTIFIGIO
          </p>
        </div>
        <div className="">
          <Image
            src="/images/vegette.jpg"
            alt=""
            className="h-[260px] rounded-2xl mb-5 hover:-translate-y-[4px] hover:translate-x-[4px] transition"
            width={290}
            height={60}
          />
          <p className="text-2xl text-center text-neutral-70">Veggio</p>
        </div>
        <div className="">
          <Image
            src="/images/wok.jpg"
            alt=""
            className="h-[260px] rounded-2xl mb-5 hover:-translate-y-[4px] hover:translate-x-[4px] transition"
            width={290}
            height={60}
          />
          <p className="text-2xl font-semibold italic text-center text-neutral-700">
            Wok Food
          </p>
        </div>
      </div>
    </section>
  );
}

export default Section_1;
