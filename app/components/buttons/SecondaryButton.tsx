interface SecondaryButtonProps {
  buttonLabel: string;
  onClickFunction: () => void;
}
export default function SecondaryButton({
  buttonLabel,
  onClickFunction,
}: SecondaryButtonProps) {
  return (
    <button
      type="button"
      className="px-2 py-1 border rounded-[4px] bg-white text-orange-600 border border-orange-600 hover:bg-orange-50 font-semibold"
      onClick={onClickFunction}
    >
      {buttonLabel}
    </button>
  );
}
