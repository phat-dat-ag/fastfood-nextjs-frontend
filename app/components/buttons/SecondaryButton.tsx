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
      className="px-2 py-1 border rounded-[4px] bg-orange-500 hover:bg-orange-300"
      onClick={onClickFunction}
    >
      {buttonLabel}
    </button>
  );
}
