import { ButtonProps } from "../../utils/Index";

export default function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      disabled={props.disabled}
      className={`${props.className} px-4 py-2 disabled:cursor-not-allowed rounded-full border border-primary duration-300 ease-in-out`}
    >
      {props.children}
    </button>
  );
}
