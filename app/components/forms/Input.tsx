type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input(inputProps: InputProps) {
  return (
    <input
      className="w-full rounded-lg border border-gray-300 px-4 py-2 transition focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
      {...inputProps}
    />
  );
}
