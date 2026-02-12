interface CancelButtonProps {
  buttonLabel: string;
  onClickFunction: () => void;
}
export default function CancelButton({
  buttonLabel,
  onClickFunction,
}: CancelButtonProps) {
  return (
    <button
      className="rounded-lg border border-orange-400 px-4 py-2 font-medium text-orange-500 transition hover:bg-orange-50 active:scale-[0.98]"
      type="button"
      onClick={onClickFunction}
    >
      {buttonLabel}
    </button>
  );
}
