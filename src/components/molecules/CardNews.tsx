import { CardNewsProps } from "../../utils/Index";
import { Link } from "react-router-dom";

export default function CardNews(props: CardNewsProps) {
  return (
    <section className="w-full md:max-w-xs p-4 flex flex-col gap-y-2 rounded-lg bg-background">
      <h2 className="md:text-lg lg:text-base font-semibold">{props.title}</h2>
      <p className="text-text/70">{props.description}</p>
      <Link to={`/${props.link}`} className="text-sm text-primary">
        Read More
      </Link>
    </section>
  );
}
