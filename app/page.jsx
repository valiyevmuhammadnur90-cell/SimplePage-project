import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Section_1 from "@/components/Section-1";
import Section_2 from "@/components/Section-2";
import Section_3 from "@/components/Section_3";
import Section_4 from "@/components/Section_4";
import Section_5 from "@/components/Section_5";
import Section_6 from "@/components/Section_6";

function Page() {
  return (
    <div>
      <Navbar />

      <hr className="text-neutral-300" />

      <Header />
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Section_5 />
      <Section_6 />
      <Footer />
    </div>
  );
}

export default Page;
