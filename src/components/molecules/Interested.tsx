import { InterestProps } from "../../utils/Index";

export default function Interested(props: InterestProps) {
  return (
    <section className={`${props.className} img-ornament bg-cover bg-center`}>
      <section className="max-w-screen-lg mx-auto flex flex-col items-center gap-y-4 py-8 md:py-16 px-3 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-semibold md:text-center">
          {props.title}
        </h2>
        <p className="md:text-center">{props.description}</p>
        {props.children}
      </section>
    </section>
  );
}
