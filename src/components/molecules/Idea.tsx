import { IdeaProps } from "../../utils/Index";

export default function Idea(props: IdeaProps) {
  return (
    <section className="flex gap-x-4">
      <p className="flex justify-center items-center p-3 rounded-md bg-primary">
        {props.no}
      </p>
      <section>
        <h3 className="text-lg font-semibold text-primary">{props.title}</h3>
        <p>{props.deskripsi}</p>
      </section>
    </section>
  );
}
