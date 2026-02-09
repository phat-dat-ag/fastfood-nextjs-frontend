type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input(inputProps: InputProps) {
  return <input className="p-2 border rounded-[4px]" {...inputProps} />;
}
