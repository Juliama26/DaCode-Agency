import Button from "../atoms/Button";
import { CardCardArtikelProps } from "../../utils/Index";

export default function CardArtikel(props: CardCardArtikelProps) {
  return (
    <section className="flex flex-col gap-y-2 w-full md:max-w-72 p-3 rounded-xl shadow-lg border">
      <img src={props.image} alt="assets" className="h-32 object-cover" />
      <h3 className="text-xl font-semibold">{props.title}</h3>
      <p>{props.deskripsi}</p>
      <Button className="bg-primary">Read More</Button>
    </section>
  );
}
