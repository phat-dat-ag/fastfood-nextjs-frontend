interface PrimaryButtonProps {
  buttonLabel: string;
  onClickFunction: () => void;
}
export default function PrimaryButton({
  buttonLabel,
  onClickFunction,
}: PrimaryButtonProps) {
  return (
    <button
      type="button"
      className="px-2 py-1 border rounded-[4px] bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-md"
      onClick={onClickFunction}
    >
      {buttonLabel}
    </button>
  );
}
