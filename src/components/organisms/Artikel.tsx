import CardArtikel from "../molecules/CardArtikel";
import { ItemArtikel } from "../../utils/Item";

export default function Artikel() {
  return (
    <section className="max-w-screen-lg mx-auto px-3 lg:px-12 flex flex-wrap justify-center lg:justify-start gap-4 my-5 md:my-10">
      {ItemArtikel.map((item, index) => (
        <CardArtikel
          key={index}
          title={item.title}
          image={item.image}
          deskripsi={item.deskripsi}
        ></CardArtikel>
      ))}
    </section>
  );
}
