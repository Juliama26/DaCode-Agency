import { FaStar } from "react-icons/fa";
import { CardHappyProps } from "../../utils/Index";

export default function CardHappy(props: CardHappyProps) {
  return (
    <section className="min-w-72 p-4 flex flex-col items-center gap-y-2 bg-background shadow-lg rounded-lg">
      <p className="font-semibold">{props.rating}</p>
      <section className="flex gap-x-1">
        {/* {Array(props.rating)
          .fill(0)
          .map((_, index) => (
            <FaStar key={index} color="orange" />
          ))} */}
        {[...Array(props.rating)].map((_, index) => (
          <FaStar key={index} color="orange" />
        ))}
      </section>
      <p className="italic text-center">{props.deskripsi}</p>
    </section>
  );
}
