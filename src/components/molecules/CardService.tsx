import { Link } from "react-router-dom";
import { CardServiceProps } from "../../utils/Index";

export default function CardService(props: CardServiceProps) {
  return (
    <section className="flex flex-col gap-y-2 p-4 rounded-lg border-t-4 border-primary bg-background">
      <figure>
        <img src={props.image} alt="assets" />
      </figure>
      <h3 className="text-lg font-semibold">{props.title}</h3>
      <p>{props.description}</p>
      <Link to={`/${props.link}`} className="text-sm text-primary">
        Read More
      </Link>
    </section>
  );
}
