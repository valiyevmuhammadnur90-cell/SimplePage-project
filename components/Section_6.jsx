import Image from "next/image";

function Section_6() {
  return (
    <section className="flex justify-between items-start flex-col px-30 mb-16">
      <span className="flex items-center gap-3 mb-[25px]">
        <p className="text-[36px] font-[300] tracking-[4px]">#YellowKitchens</p>
        <p className="text-[36px] font-[300] tracking-[4px]">in instagram</p>
      </span>

      <div className="flex items-center justify-between gap-[34px]">
        <Image
          src="/images/img_1.jpg"
          alt=""
          width={296}
          height={299}
          className="h-[270px] rounded-xl hover:-translate-y-[4px] hover:translate-x-[4px] transition"
        />
        <Image
          src="/images/img_2.jpg"
          alt=""
          width={296}
          height={299}
          className="h-[270px] rounded-xl hover:-translate-y-[4px] hover:translate-x-[4px] transition"
        />
        <Image
          src="/images/img_3.jpg"
          alt=""
          width={296}
          height={299}
          className="h-[270px] rounded-xl hover:-translate-y-[4px] hover:translate-x-[4px] transition"
        />
        <Image
          src="/images/img_4.jpg"
          alt=""
          width={296}
          height={299}
          className="h-[270px] rounded-xl hover:-translate-y-[4px] hover:translate-x-[4px] transition"
        />
      </div>
    </section>
  );
}

export default Section_6;
