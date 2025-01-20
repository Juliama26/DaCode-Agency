import { CardGreatProps } from "../../utils/Index";

export default function CardGreat(props: CardGreatProps) {
  return (
    <section className="flex flex-col gap-y-2 min-w-72">
      <img src={props.image} alt="assets" />
      <p>{props.description}</p>
    </section>
  );
}
