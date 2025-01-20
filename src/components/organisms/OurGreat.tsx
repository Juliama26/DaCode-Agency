import { useRef } from "react";
import Button from "../atoms/Button";
import CardGreat from "../molecules/CardGreat";
import { ItemGreat } from "../../utils/Item";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

export default function OurGreat() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section>
      <section className="flex flex-col items-center gap-y-4 p-4">
        <p className="font-semibold text-primary">Portfolio</p>
        <h2 className="text-3xl font-semibold">Our Great Work</h2>
        <section className="flex gap-x-2 md:gap-x-6">
          <Button>Website Optimization</Button>
          <Button>Website Optimization</Button>
          <Button>Website Optimization</Button>
        </section>
      </section>
      <section className="img-NoOrnament bg-cover bg-center flex justify-center items-center gap-x-1 md:gap-x-3 py-6 px-3">
        <button
          onClick={scrollLeft}
          className="-mt-24 md:rounded-full md:p-1 md:bg-background"
        >
          <HiChevronLeft size={30} />
        </button>
        <section
          ref={scrollRef}
          className="max-w-4xl flex gap-4 overflow-hidden scroll-smooth"
        >
          {ItemGreat.map((item, Index) => (
            <CardGreat
              key={Index}
              image={item.image}
              description={item.deskripsi}
            ></CardGreat>
          ))}
        </section>
        <button
          onClick={scrollRight}
          className="-mt-24 md:rounded-full md:p-1 md:bg-background"
        >
          <HiChevronRight size={30} />
        </button>
      </section>
    </section>
  );
}
