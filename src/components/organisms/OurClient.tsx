import { useRef } from "react";
import CardHappy from "../molecules/CardHappy";
import { CardClient } from "../../utils/Item";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

export default function OurClient() {
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
      <section className="flex flex-col items-center gap-y-4 py-12">
        <p className="font-semibold text-primary">Testiomonials</p>
        <h2 className="text-3xl font-semibold">Our Happy Clients</h2>
        <section className="flex items-center">
          <button onClick={scrollLeft}>
            <HiChevronLeft size={30} />
          </button>
          <section
            ref={scrollRef}
            className="max-w-4xl w-full flex gap-4 overflow-x-auto scroll-smooth py-6"
          >
            {CardClient.map((item, index) => (
              <CardHappy
                key={index}
                rating={item.rating}
                deskripsi={item.deskripsi}
              ></CardHappy>
            ))}
          </section>
          <button onClick={scrollRight}>
            <HiChevronRight size={30} />
          </button>
        </section>
      </section>
    </section>
  );
}
